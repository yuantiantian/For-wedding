<template>
    <div class="home">
        <index-header></index-header>
        <div class="banner" ref="banner">
            <div :class="{'show':isShow==1}" class="bannerd banner1"></div>
            <div :class="{'show':isShow==2}" class="bannerd banner2"></div>
            <div :class="{'show':isShow==3}" class="bannerd banner3"></div>
            <div class="infor" v-show="videoShow">
                <h1>Jack&Rose</h1>
                <div class="video" @click="videoStart=true"><img src="../../static/images/bofang.jpg"></div>
                <p>我们的故事，才刚刚开始</p>
            </div>
            <ul>
                <li><span :class="{'cur':isShow==1}"></span></li>
                <li><span :class="{'cur':isShow==2}"></span></li>
                <li><span :class="{'cur':isShow==3}"></span></li>
            </ul>
        </div>
        <div class="overlay" v-show="videoStart">
            <div class="alert">
                <video src="../../static/video.webm" controls="controls"></video>
                <span @click="videoStart=false">关闭</span>
            </div>
        </div>
       <div class="time">
           <div class="left"><img src="../assets/xfeng.png"> 距离婚礼开始还有</div>
           <div class="right">
               <div>{{d}}<img src="../assets/heart.png"><span>Days</span></div>
               <div>{{h}}<img src="../assets/heart.png"><span>Hours</span></div>
               <div>{{m}}<img src="../assets/heart.png"><span>Minutes</span></div>
               <div>{{s}}<span>Seconds</span></div>
           </div>
       </div>
       <div class="newman">
           <div class="bride">
               <div class="brideImg"></div>
               <div class="brideInfor" :class="{'rightShow':rightShow==1}">
                   <h1>Bride Story</h1>
                   <h2>{{indexInfor.bride}}</h2>
                   <p>法法师的个人提供谁是大歌神地方反复氛围让的点点滴滴反反复复付付灌灌灌灌灌过
                        付付灌灌灌灌灌过付付灌灌灌灌灌过付付灌灌灌灌灌过付付灌灌灌灌灌过
                        法法师的个人提供谁是大歌神地方反复氛围让的点点滴滴反反复复付付灌灌灌灌灌过
                    </p>
                    <div class="sociality"><sociality></sociality></div>
               </div>
           </div>
           <div class="groom">
                <div class="groomInfor" :class="{'leftShow':leftShow==1}">
                        <h1>Groom Story</h1>
                        <h2>Jack</h2>
                        <p>法法师的个人提供谁是大歌神地方反复氛围让的点点滴滴反反复复付付灌灌灌灌灌过
                             付付灌灌灌灌灌过付付灌灌灌灌灌过付付灌灌灌灌灌过付付灌灌灌灌灌过
                             法法师的个人提供谁是大歌神地方反复氛围让的点点滴滴反反复复付付灌灌灌灌灌过
                         </p>
                         <div class="sociality"><sociality></sociality></div>
                </div>
                <div class="groomImg"></div>
           </div>
       </div>
       <div class="cehua">
            <div class="text" :class="{'topShow':topShow==1}">
                <h1>婚礼寄语</h1>
                <p>法法师的个人提供谁是大歌神地方反复氛围让的点点滴滴反反复复付付灌灌灌灌灌过
                        付付灌灌灌灌灌过付付灌灌灌灌灌过付付灌灌灌灌灌过付付灌灌灌灌灌过
                        法法师的个人提供谁是大歌神地方反复氛围让的点点滴滴反反复复付付灌灌灌灌灌过
                </p>
                
            </div>
       </div>
       <div class="photo">
            <h1>photo</h1>
            <h2>记录美好时刻</h2>
            <div class="left">
                <div class="left1"></div>
                <div class="left2"></div>
                <div class="left3"></div>
            </div>
            <div class="right">
                <div class="right1"></div>
                <div class="right2"></div>
                <div class="right3"></div>
                <div class="right4"></div>
            </div>
            <p>more</p>
       </div>
       <div class="follow">
            <h1>Bridesmaids&nbsp;&&nbsp;Groomsman</h1>
            <h2>欢迎参加这场婚礼</h2>
            <h3>认识你们是给我们最好的礼物，欢迎你们来见证我们的婚礼</h3>
            
            <div class="follower" :class="{'bottomShow':bottomShow==1}" >
                <div class="one">
                    <div class="touxiang"></div>
                    <div class="infor">
                        <h4>Jessica</h4>
                        <p>认识你们是给我们最好的礼物，欢迎你们来见证我们的婚礼</p>
                    </div>
                </div>
                <div class="one">
                        <div class="touxiang"></div>
                        <div class="infor"></div>
                    </div>
                    <div class="one">
                            <div class="touxiang"></div>
                            <div class="infor"></div>
                        </div>
                        <div class="one">
                                <div class="touxiang"></div>
                                <div class="infor"></div>
                            </div>
                            <div class="one">
                                    <div class="touxiang"></div>
                                    <div class="infor"></div>
                                </div>
                                <div class="one">
                                        <div class="touxiang"></div>
                                        <div class="infor"></div>
                                    </div>
            </div>
       </div>
       <div class="wish">
           <h1>Best Wishes</h1>
           <div class="toLeft" @click="delChang"><img src="../assets/left.png" alt="left"></div>
           <div class="toRight" @click="addChange"><img src="../assets/right.png" alt="right"></div>
            <div :class="{'wishShow':wishShow==0}" class="wishes">
                <p class="to">To you：</p>
                <p class="content">认识你们是给我们最好的礼物，欢迎你们来见证我们的婚礼认识你们是给我们最好的礼物，欢迎你们来见证我们的婚礼认识你们是给我们最好的礼物，欢迎你们来见证我们的婚礼</p>
                <p class="from">From 袁甜甜</p>
            </div>
            <div :class="{'wishShow':wishShow==1}" class="wishes">
                    <p class="to">To you：</p>
                    <p class="content">sfefcvsdvsdvdgvsgvbgasfsfvcrgrrshgerz</p>
                    <p class="from">From 袁甜甜</p>
                </div>
                <div :class="{'wishShow':wishShow==2}" class="wishes">
                        <p class="to">To you：</p>
                        <p class="content">多个被他虐rebbus额外添加NSvsgrtusrbvyRrbtry一个你是人不</p>
                        <p class="from">From 袁甜甜</p>
                    </div>
       </div>
       <div class="gift">
           <div class="content">
                <div class="logo"><img src="../assets/gift.png" alt=""></div>
                <h1>Gifts Bride & Groom</h1>
                <h4>送出你的礼物，祝福两位新人初心不变，白头偕老</h4>
                <div class="btn">Send Gift</div>
           </div>
            
       </div>
       <index-footer></index-footer>
    </div>
</template>

<script>
    import indexHeader from '../components/header'
    import indexFooter from '../components/footer'
    import Sociality from '../components/sociality'
    import axios from 'axios'
    export default{
        data(){
            return {
                indexInfor:[],
                isShow:1,
                videoShow:false,
                videoStart:false,
                wishShow:0,
                date:'2017/10/26 10:00:00',
                d:0,
                h:0,
                m:0,
                s:0,
                rightShow:0,
                leftShow:0,
                topShow:0,
                bottomShow:0,
            }
        },    
        computed:{

        },    
        mounted(){
            this.getIndex();
            this.autoChange();
            setInterval(this.getTime,1000);
            var that = this;
            window.onscroll = function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                if(t>=500){
                     that.rightShow = 1;
                }
                if(t>=1000){
                    that.leftShow = 1;
                }
                if(t>=1500){
                    that.topShow = 1;
                }
                if(t>=3200){
                    that.bottomShow = 1;
                }
            }
        },
        methods:{
            getIndex(){
                axios.get("/api/index").then((result)=>{
                    var res = result.data;
                    this.indexInfor = res.result;
                    this.$nextTick(()=>{
                        console.log(this.indexInfor);
                    })
                })
                
            },
            change(){
                if(this.isShow>=3){
                    this.isShow = 1;
                }else{
                    this.isShow++;
                }
               
            },
            addChange(){
                if(this.wishShow>=2){
                    this.wishShow = 0;
                }else{
                    this.wishShow++;
                }
            },
            delChang(){
                if(this.wishShow<=0){
                    this.wishShow = 2;
                }else{
                    this.wishShow--;
                }
            },
            autoChange(){
                setInterval(this.addChange,10000);
                let inter = setInterval(this.change,3000);
                var that = this;
                this.$refs.banner.onmouseover=function(){
                    clearInterval(inter);
                    that.videoShow = true;
                }
                this.$refs.banner.onmouseout=function(){
                    inter = setInterval(that.change,3000);
                    that.videoShow = false;
                }
            },
            getTime(){
                var EndTime= new Date(this.date);
                var NowTime = new Date();
                var t =EndTime.getTime() - NowTime.getTime();
                this.d=Math.floor(t/1000/60/60/24);
                this.h=Math.floor(t/1000/60/60%24);
                this.m=Math.floor(t/1000/60%60);
                this.s=Math.floor(t/1000%60);
            },
            scrollChange(){
                if(document.body.scrollTop==500){
                    this.rightShow = true;
                }
            }
        },
        components:{
            indexHeader,
            indexFooter,
            Sociality
        }
    }
</script>

<style>
</style>