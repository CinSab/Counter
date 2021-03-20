import React from "react"
import './estadou.css'

class Estadoo extends React.Component{
	constructor(props) {
		super(props)
		console.log(`Contador ${props.id} Constructor`)

		//this.incrementar = this.incrementar.bind(this)
	}

	state = {
		contador : Number(this.props.valor)
	}	

	incrementar() {
		console.log(`Contador ${this.props.id} Incrementar`)
	}


render (){
	console.log('Contador render')

	let { id, fondo } = this.props;
	let { contador } = this.state;

	return(
		<div className='Contador'>
			<div className='jumbroton' style={{backgroundcolor: fondo}}>
				<h3>Calendario contador{id}</h3>
				<hr/>

				<h4 className= 'alert alert-info w-50'>valor: {contador}</h4>

				

				<button className="btn btn-success my-1" onClick={() => {

					this.setState(prevstate => ({contador: prevstate.contador + 1}) )

				}}>
					Incrementar
				</button>
			</div>
		</div> 


		)


	}
}

export default Estadoo;