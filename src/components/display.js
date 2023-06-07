const Display = (props) => {
    const imc = parseFloat(props.imc);
    let displayOut = '';
    let imcClass = '';

    if(imc !== 0) {
        displayOut = `O seu IMC é ${imc.toFixed(2)}`
        if(imc < 18.5) {
            imcClass = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            imcClass = 'Peso Normal';
        } else if (imc >= 25 && imc < 30) {
            imcClass = 'Sobrepeso';
        } else {
            imcClass = 'Obesidade';
        }
    }

    return (
        <div>
            <h2> {imcClass} </h2>
            <p> {displayOut} </p>
        </div>
    );
}

export default Display;