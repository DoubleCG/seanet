<template>
  <div 
    v-show = 'onDomore'
    id='domore'
  >
      <div 
        class='ele'
        data-toggle='tooltip'
        data-placement='left'
        title='个人'
        @click='togglePeople'
      >
        <i class='icon iconfont icon-account'></i>
      </div>

      <div
        class='ele'
        data-toggle='tooltip'
        data-placement='top'
        title='团队'
        @click='toggleTeam'
      >
        <i class='icon iconfont icon-hot'></i>
      </div>

      <div
        id='logOff'
        @click='toLogoff'
      >注销</div>
  </div>
</template>


<script>


import {mapState,mapMutations} from 'vuex';



export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState([
      'userInfo',
      'onDomore',
    ]),
  },
  methods:{
    ...mapMutations([
      'toggleDomore',
      'toLogoff',
      'togglePeople',
      'toggleTeam',
    ]),
  }
}

</script>


<style lang='less' scoped>
#domore{
  
  width:240px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 0 10px #999;
  overflow: hidden;
  z-index: 10000000;
  
  #logOff{
    width:100%;
    font-weight: 600;
    height:34px;
    line-height: 28px;
    font-size: 20px;
    text-align:center;
    cursor:pointer;
    color:#fff;
    background-color: #999;
    &:hover{
      color:red;
    }
  }

  .ele{
    width:3rem;
    height:3rem;
    line-height: 3rem;
    margin:10px;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    cursor:pointer;
    color:#7EBCB7;
    border:1px solid #333;
    background:#FFF;
    &:hover{
      box-shadow: 0 0 5px #999;
    }
  }

}
</style>
