<template>
  <div class="hello">
    <h1>balance : {{this.balance}}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {{this.manager}}. There are currently
          {{this.players.length}} people entered, competing to win
          {{this.balance}} ether!
        </p>
            
        <hr />

        <form v-on:submit.prevent="playerEnter">
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input v-model="value" placeholder="enter amount"/>
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4>Ready to pick a winner?</h4>
        <button v-on:click="pickWinner">Pick a winner!</button>

        <hr/>

        <h1>{{this.message}}</h1>
      </div>
  </div>
  
</template>

<script>
/* eslint-disable */
import lottery from '../lottery'
import web3 from '../web3' 
export default {
  name: 'HelloWorld',
  props: {
  },
  methods : {
    async loadData () {
        this.manager = await lottery.methods.manager().call();
        console.log(lottery.options.address)
        this.balance = await web3.eth.getBalance(lottery.options.address)
        this.balance = web3.utils.fromWei(this.balance,'ether')
        
        this.players = await lottery.methods.getPlayers().call()
    },
    async playerEnter(){
        event.preventDefault()
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
        try{
        this.message = 'Waiting on transaction success...' 
        await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.value, 'ether')
         })
        }catch(err){}

        this.message ='You have been entered!' 
    },
    async pickWinner () {
      const accounts = await web3.eth.getAccounts();

      this.message = 'Waiting on transaction success...' 
    try {
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    }catch(err){}
      
      this.message = 'A winner has been picked!'
    }
  },
  data(){
    return {
      balance :'',
      manager : '',
      players : [],
      value : '',
      message: ''
    }
  },
  mounted(){
    this.loadData()    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
