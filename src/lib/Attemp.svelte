<script lang="ts">

// export let target: number[] = [];
export let attemp: any[] = [];
export let contBelongs: number = 0;
export let contCorrect: number = 0;

</script>

<div class="container">

  <!-- PRIMER INTENTO -->
  <div class="table-column" id="solucion">
    <div class="numbercell">
      {#if attemp[0] == undefined}
      <p class="number">_</p>
      {:else}
      <p class="number">{attemp[0]}</p>
      {/if}
    </div>
    <div class="numbercell">
      {#if attemp[1] == undefined}
      <p class="number">_</p>
      {:else}
      <p class="number">{attemp[1]}</p>
      {/if}
    </div>
    <div class="numbercell">
      {#if attemp[2] == undefined}
      <p class="number">_</p>
      {:else}
      <p class="number">{attemp[2]}</p>
      {/if}
    </div>
    <div class="numbercell">
      {#if attemp[3] == undefined}
      <p class="number">_</p>
      {:else}
      <p class="number">{attemp[3]}</p>
      {/if}
    </div>
    <div class="numbercell">
      {#if attemp[4] == undefined}
      <p class="number">_</p>
      {:else}
      <p class="number">{attemp[4]}</p>
      {/if}
    </div>
    
  </div>
  <div class="table-column" id="belongs">
    <p class="numbercell number">{contBelongs}</p>
  </div>
  <div class="table-column" id="correct">
    <p class="numbercell number">{contCorrect}</p>
  </div>
</div>




<style>
  .container{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.table-column{
  margin-inline: 3rem;
  margin-top: 0.5rem;
}

#solucion{
  display: flex;
  justify-content: center;
  align-items: center;
}

.numbercell{
  padding: 10px;
  width: 2rem;
  height: 2rem;
  background-color: #595959;
  border-radius: 10px;
  margin-top: 5px;
  margin-inline: 5px;

}

.number{
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

#belongs p{
  /* background: #aa8c03; */
  background: linear-gradient(156deg, rgba(247,151,30,1) 0%, rgba(255,210,0,1) 100%);
}
#correct p{
  /* background: #03aa11; */
  background: linear-gradient(156deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%);
}


</style>