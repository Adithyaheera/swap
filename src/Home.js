import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import './Home.css'
function Home() {
  return (
    <div className='container'>
        <h3>Swap</h3>
        <h6 className='small'>trade tokens in an instant</h6>
<div className='con-1'>

<div className='row-1'> 
<button className='btn2'>Swap</button> <button className='btn3'>Active pools</button>

</div>
<div className='btn-left'>
<button className='btn-green'>core</button> <button className='btn-blue'>community</button> <button className='btn-yellow'>Expertmental</button>

</div>

<div className='text'>
<h6>Swap From:</h6>
<div className='text-1'>
  <div>1</div>
  <DropdownButton id="dropdown2">
<Dropdown className='table'>
<div>EGLD
    <div className='max'> 0.0557</div>
  </div>
  <div>MEX
    <div className='max'> 0</div>
  </div>
<div>USDC
<div className='max'> 2,810.8108</div>
</div>
<div>RIDE
<div className='max'> 1,5844</div>
</div>
<div>ISET</div>
<div className='max'> 0</div>
<div>AERO
<div className='max'> 0</div>
</div>
<div>SUPER
<div className='max'> 0</div>
</div>
<div>BSK
<div className='max'> 2.792,666.6666</div>
</div>
<div>PLATA
<div className='max'> 0</div>
</div>
<div>EFFORT
<div className='max'> 0</div>
</div>
</Dropdown>



  </DropdownButton>
  <div>-$1.00</div>
  


</div>

</div>
<div className='type'>
<h6>Swap To (Est):</h6>
<div className='text-1'>
  <div>1</div>
  <div>-$0.00</div>


</div>
<h6>Skip Unwrap WEGLD</h6>


</div>

<div className='col-3'>
  <p> Excharge Rate    1EGLD =190.4965 USDC($190.49)</p>
  <p>slippage</p>  <p className='no-1'>0.5%</p>
</div>





<button className='btn-primary'>Swap</button>

<label className='type-3'>you will be asked to sign 2 transactions</label>

</div>



    </div>
  )
}

export default Home