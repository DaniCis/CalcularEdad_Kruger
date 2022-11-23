import { useState } from "react";
import Card from "./Card";

const Edad = () =>{
    const [fechaNacimiento,setFecha] = useState();
    const [day,setDay] = useState();
    const [month,setMonth] = useState();
    const [year,setYear] = useState();

    const obtenerFecha = (e) =>{
        const fecha = document.querySelector('input[type="date"]')
        setFecha(fecha.value)
    }

    const calcularEdad = () =>{
        const actualYear = new Date().getFullYear()
        const actualmonth = new Date().getMonth() + 1
        const actualDay = new Date().getUTCDate()
        const[year, month, day] = fechaNacimiento.split("-")
        
        //no cumple todavia
        if(month > actualmonth){
            setYear(actualYear - year - 1)
            if(day > actualDay){
                setMonth((actualmonth -month)+11)
                setDay((actualDay - day)+31)
            }
            else{
                setMonth((actualmonth - month)+12)
                setDay(actualDay - day)
            }
        }else{
            if(month == actualmonth && day > actualDay){
                setYear(actualYear - year - 1)
                setDay((actualDay - day)+30)
                setMonth((actualmonth - month)+11)
            }   
            else{
                setMonth(actualmonth -month)
                setYear(actualYear - year)
                setDay(actualDay - day)
            }
        }
    }

    return (
        <div className="contenedor">
            <div className="contenedorFecha">
                <input type='date' onChange={obtenerFecha} pattern="\d{4}-\d{2}-\d{2}"></input>
                <button onClick={calcularEdad}>Calcular</button>
            </div>
            <div className="contenedorEdad">
                <Card valor={year} unidad='años' />
                <Card valor={month} unidad= 'meses'/>
                <Card valor={day} unidad='días' />
            </div>
        </div>
    )
}

export default Edad;