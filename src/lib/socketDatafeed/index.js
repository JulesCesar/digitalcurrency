/**
 * 数据更新器
 * 通过更新器触发datafeeds的getBars实时更新图表数据
 */
class dataUpdater {
    constructor(datafeeds) {
      this.subscribers = {}
      this.requestsPending = 0
      this.historyProvider = datafeeds
    }
    subscribeBars(symbolInfo, resolution, newDataCallback, listenerGuid) {
        this.subscribers[listenerGuid] = {
            lastBarTime: null,
            listener: newDataCallback,
            resolution: resolution,
            symbolInfo: symbolInfo
        }
    }
    unsubscribeBars(listenerGuid) {
        delete this.subscribers[listenerGuid]
    }
    updateData() {
        if (this.requestsPending) return
        this.requestsPending = 0
        for (let listenerGuid in this.subscribers) {
            this.requestsPending++
            this.updateDataForSubscriber(listenerGuid).then(() => this.requestsPending--).catch(() => this.requestsPending--)
        }
    }
    updateDataForSubscriber(listenerGuid) {
        return new Promise((resolve, reject) => {
            const subscriptionRecord = this.subscribers[listenerGuid]
            const rangeEndTime = parseInt((Date.now() / 1000).toString())
            const rangeStartTime = rangeEndTime - this.periodLengthSeconds(subscriptionRecord.resolution, 10)
            this.historyProvider.getBars(subscriptionRecord.symbolInfo, subscriptionRecord.resolution, rangeStartTime, rangeEndTime,
                bars => {
                    this.onSubscriberDataReceived(listenerGuid, bars)
                    resolve()
                },
                () => {
                    reject()
                }
            )
        })
    }
    onSubscriberDataReceived(listenerGuid, bars) {
        if (!this.subscribers.hasOwnProperty(listenerGuid)) return
        if (!bars.length) return
        const lastBar = bars[bars.length - 1]
        const subscriptionRecord = this.subscribers[listenerGuid]
        if (subscriptionRecord.lastBarTime !== null && lastBar.time < subscriptionRecord.lastBarTime) return
        const isNewBar = subscriptionRecord.lastBarTime !== null && lastBar.time > subscriptionRecord.lastBarTime
        if (isNewBar) {
            if (bars.length < 2) {
            throw new Error('Not enough bars in history for proper pulse update. Need at least 2.');
            }
    
            const previousBar = bars[bars.length - 2]
            subscriptionRecord.listener(previousBar)
        }
    
        subscriptionRecord.lastBarTime = lastBar.time
        subscriptionRecord.listener(lastBar)
    }
    periodLengthSeconds(resolution, requiredPeriodsCount) {
        let daysCount = 0
        if (resolution === 'D' || resolution === '1D') {
            daysCount = requiredPeriodsCount
        } else if (resolution === 'M' || resolution === '1M') {
            daysCount = 31 * requiredPeriodsCount
        } else if (resolution === 'W' || resolution === '1W') {
            daysCount = 7 * requiredPeriodsCount
        } else {
            daysCount = requiredPeriodsCount * parseInt(resolution) / (24 * 60)
        }
        return daysCount * 24 * 60 * 60
    }
}

class socketDatafeed {
    constructor(vue) {
        // 默认商品信息
        this.defaultConfiguration = {
            supports_search: true,
            supports_group_request: false,
            supported_resolutions: ['1', '5', '15', '30', '60', '1D', '2D', '3D', '1W', '1M'],
            supports_marks: true,
            supports_timescale_marks: true,
            supports_time: true
        }
        this.self = vue
        this.barsUpdater = new dataUpdater(this)
    }

    onReady(callback) {
        return new Promise((resolve, reject) => {
            resolve (this.defaultConfiguration);
        }).then(conf => callback(conf));
    }

    /**
   * @param {*String} symbolName  商品名称或ticker
   * @param {*Function} onSymbolResolvedCallback 成功回调 
   * @param {*Function} onResolveErrorCallback   失败回调
   * `resolveSymbol` should return result asynchronously.
   */
  resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    return new Promise((resolve, reject) => {
      let symbolInfo = this.defaultSymbol()
      if (this.self.getSymbol) {
        symbolInfo = Object.assign(this.defaultSymbol(), this.self.getSymbol())
      }
      resolve(symbolInfo)
    }).then(data => onSymbolResolvedCallback(data)).catch(err => onResolveErrorCallback(err))
  }
  //-----------------------------------------------------------------------
    



  //-----------------------------------------------------------------------

  /**
   * @param {*Object} symbolInfo  商品信息对象
   * @param {*String} resolution  分辨率
   * @param {*Number} rangeStartDate  时间戳、最左边请求的K线时间
   * @param {*Number} rangeEndDate  时间戳、最右边请求的K线时间
   * @param {*Function} onDataCallback  回调函数
   * @param {*Function} onErrorCallback  回调函数
   */
  getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback) {
    const onLoadedCallback = data => {
      data && data.length ? onDataCallback(data, { noData: true }) : onDataCallback([], { noData: true })
    }
    this.self.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback)
  }

  /**
   * 订阅K线数据。图表库将调用onRealtimeCallback方法以更新实时数据
   * @param {*Object} symbolInfo 商品信息
   * @param {*String} resolution 分辨率
   * @param {*Function} onRealtimeCallback 回调函数 
   * @param {*String} subscriberUID 监听的唯一标识符
   * @param {*Function} onResetCacheNeededCallback (从1.7开始): 将在bars数据发生变化时执行
   */
  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    this.barsUpdater.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)
  }

  /**
   * 取消订阅K线数据
   * @param {*String} subscriberUID 监听的唯一标识符
   */
  unsubscribeBars(subscriberUID) {
    this.barsUpdater.unsubscribeBars(subscriberUID)
  }

  /**
   * 默认商品信息
   */
  defaultSymbol() {
    return {
      'name': 'BTCUSDT',
      'timezone': 'Asia/Shanghai',
      'minmov': 1,
      'minmov2': 0,
      'pointvalue': 1,
      'fractional': false,
      'session': '24x7',
      'has_intraday': true,
      'has_no_volume': false,
      'description': 'BTCUSDT',
      'pricescale': 1,
      'ticker': 'BTCUSDT',
      'supported_resolutions': ['1', '5', '15', '30', '60', '1D', '2D', '3D', '1W', '1M']
    }
  }
}

export default socketDatafeed;