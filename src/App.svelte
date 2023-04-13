<script lang="ts">
  import Attemp from "./lib/Attemp.svelte";

  const target: number[] = [];
  let attemp: number[][] = [];
  let contBelongs: number[] = [];
  let contCorrect: number[] = [];
  let numAttemps: number = 0;
  let win: boolean = false;

  function startArray(){
    for (let i = 0; i < 6; i++) {
      attemp[i] = [];
      contBelongs[i] = 0;
      contCorrect[i] = 0;
}
  } 

  function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  function numberInArray(number:number, array:number[]){
    for(let i=0; i<array.length; i++){
      if(number == array[i]){
        return true;
      }
    }
    return false; 
  }
  function generateNumber() {
    let randomNumber: number = randomInt(0,9);
    for(let i=0; i<5; i++){
      while(numberInArray(randomNumber, target)){
        randomNumber = randomInt(0,9);
      }
      target.push(randomNumber);
    }
  }

  function checkVictory(){
    win = (contCorrect[numAttemps] == 5)
  }

  function compareNumbers(){
    let targetCopy = [].concat(target);
    let found: boolean = false;
    for(let i=0; i<5; i++){
      found = false;
      if(attemp[numAttemps][i] == target[i]) contCorrect[numAttemps]++;
      for(let j=0; j<5 && !found; j++){
        if (attemp[numAttemps][i] == targetCopy[j]){
          contBelongs[numAttemps]++;
          targetCopy[j] = -1;
          found = true;
        } 
      }
    }
    checkVictory();
    numAttemps++;
  }

startArray();
generateNumber();


</script>


<main>
  <div id="titleContainer">
    <h1 id="title">Enigma</h1>
  </div>
  
  <div class="gameScreen center-column">
    {#if !win && numAttemps < 6}
      <Attemp attemp={attemp[0]} contBelongs={contBelongs[0]} contCorrect={contCorrect[0]}/>
      {#if numAttemps >=1}
      <Attemp attemp={attemp[1]} contBelongs={contBelongs[1]} contCorrect={contCorrect[1]}/>
      {/if}
      {#if numAttemps >=2}
      <Attemp attemp={attemp[2]} contBelongs={contBelongs[2]} contCorrect={contCorrect[2]}/>
      {/if}
      {#if numAttemps >=3}
      <Attemp attemp={attemp[3]} contBelongs={contBelongs[3]} contCorrect={contCorrect[3]}/>
      {/if}
      {#if numAttemps >=4}
      <Attemp attemp={attemp[4]} contBelongs={contBelongs[4]} contCorrect={contCorrect[4]}/>
      {/if}
      {#if numAttemps >=5}
      <Attemp attemp={attemp[5]} contBelongs={contBelongs[5]} contCorrect={contCorrect[5]}/>
      {/if}

      <div class="input">
        <form class="center-column">
          <label for="attemp">Insert a number:</label>
          <input bind:value={attemp[numAttemps]} id="attemp" maxlength="5" type="number">
          <button id="sub" on:click|preventDefault={compareNumbers}>Submit</button>
        </form>
        <p>coded with 🤍 by Marco Díaz</p>
      </div>
      <!-- <p>{target}</p> -->
      {:else if (!win &&numAttemps >= 5)}
        <div class="center-column menu" id="loseMenu">
          <h1 id="lose">Sorry You Lost :( </h1>
          <h2>The code was:</h2>
          <div class="code-container">
            <h1>{target[0] + ' ' + target[1] + ' ' + target[2] + ' ' + target[3] + ' ' + target[4]}</h1>
          </div>
        </div>
    {/if}

    {#if win}

    <div class="center-column menu" id="winMenu">
      <h1 id="congratulations">Congratulations You Won!</h1>
      <h2>The code was:</h2>
      <div class="code-container">
        <h1>{target[0] + ' ' + target[1] + ' ' + target[2] + ' ' + target[3] + ' ' + target[4]}</h1>
      </div>
    </div>
    {/if}
  </div>
</main>

<style>

main{
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  height: 100vh;
  
}
#titleContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}

#title{
  font-family: 'Chivo Mono', monospace;
  font-weight: 400;
  font-size: 4rem;
  color: white;
  margin-right: 1rem;
}
.gameScreen{
  /* margin-top: 5rem; */
  height: 80%;
  
}

.center-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input{
    margin-top: 5rem;
  }
  .input label{
    font-size: 1.2rem;
  }
  .input input{
    height: 2.5rem;
    font-size: 1.2rem;
    text-align: center;
    border: 2px solid #646cff;
    border-radius: 10px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  #sub{
    margin-top: 2rem;
    border-color: #646cff;
  }

  button {
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.6em 2em;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  background: #646cff;
  transition: 0.5s;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

  .menu{
    width: 40vw;
    border-radius: 20px;
    padding-block: 3rem;
    /* padding-inline: 4rem; */
  }
  #winMenu{
    /* background-color: #3d7241; */
    background: linear-gradient(156deg, rgba(0,114,255,1) 0%, rgba(0,198,255,1) 100%);
  }

  #loseMenu{
    /* background-color: #731c1c; */
    background: linear-gradient(156deg, rgba(179,18,23,1) 0%, rgba(229,45,39,1) 100%);
  }


  #congratulations{
    color: white;
  }

  .code-container{
    background: #2b2b2b;
    border-radius: 20px;
    padding-inline: 2rem;
  }
</style>