<template>
  <div id="mairumaichu" :style="{height:'420px',background:'#1D2630',boxShadow: '0 2px 4px 0 rgba(29,38,48,0.60)',}">

        <div class="card-container">
            <a-tabs type="card">
            <a-tab-pane tab="市价交易" key="1">
               
            <div class="gutter-example">
                    <a-row :gutter="16">
                        <a-col class="gutter-row" :span="12">
                            <div class="gutter-box">
                                <div class="buy">
                                    <div class="buy_content buy_title">
                                        <span class="active1">买入</span>
                                    </div>
                                    <div class="tabs buy_warpper">
                                        <div class="usePrice usePriceuno">
                                            可用USDT≈245
                                        </div>
                                        <div class="tabs-content" style="display: block">
                                        
                                            <div class="changeInput">
                                                <input type="text" placeholder="买入价">
                                            </div>
                                            
                                            <div class="changeInput">
                                                <input type="text" placeholder="买入数量">
                                                <span>USDT</span>
                                            </div>
                                            <div class="changeInput">
                                                <input type="text" placeholder="买入数量">
                                                <span>USDT</span>
                                            </div>
                                            <div class="canUse">
                                                
                                                <div class="usePercent">
                                                    <span>1/4</span>
                                                    <span>1/3</span>
                                                    <span>半仓</span>
                                                    <span>全仓</span>
                                                </div>
                                            </div>
                                            <div class="orderNow">买入</div>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </a-col>
                        <a-col class="gutter-row" :span="12">
                            <div class="gutter-box">
                                <div class="buy">
                                    <div class="buy_content buy_title">
                                        <span class="active">卖出</span>
                                    </div>
                                    <div class="tabs buy_warpper">
                                        <div class="usePrice usePriceuno">
                                            可用USDT≈245
                                        </div>
                                        <div class="tabs-content" style="display: block">
                                        
                                            <div class="changeInput">
                                                <input type="text" placeholder="卖出价">
                                            </div>
                                            
                                            <div class="changeInput">
                                                <input type="text" placeholder="卖出数量">
                                                <span>USDT</span>
                                            </div>
                                            <div class="changeInput">
                                                <input type="text" placeholder="买入数量">
                                                <span>USDT</span>
                                            </div>
                                            <div class="canUse">
                                                
                                                <div class="usePercent">
                                                    <span>1/4</span>
                                                    <span>1/3</span>
                                                    <span>半仓</span>
                                                    <span>全仓</span>
                                                </div>
                                            </div>
                                            <div class="orderNowmc">卖出</div>
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </a-tab-pane>
            <a-tab-pane tab="现价交易" key="2">
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
            </a-tab-pane>
           
            </a-tabs>
        </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.active1{
    padding-left:10px;
   border-left: 4px green solid;
   /* border-left-color: green; */

}
</style>