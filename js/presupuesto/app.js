const ingresos = [
    new Ingreso('Sueldo',12000000),
    new Ingreso('Venta Carro',8000000)
];

const egresos = [
    new Egreso('Renta Casa',5000000),
    new Egreso('CompraRopa',5000000)
];

let cargarApp = () => {    
    cargarCabecero();
    cargarIngreso();
    cargarEgresos();   
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentaje_egreso = totalEgresos()/totalIngresos();
    console.log(porcentaje_egreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentaje_egreso);
}

let totalIngresos = ()=>{
    let ingresoTotal = 0;
    for(let ingreso  of ingresos){
        ingresoTotal += ingreso.getValor; 
    }

    return ingresoTotal;
}

let totalEgresos= () =>{
    let egresoTotal = 0;
    for(let egreso of egresos){
        egresoTotal +=egreso.getValor;
    }
    
    return egresoTotal;
}

let presupuestoTotal= (ingreso,egreso) => {    
    let presupuestoTotal = ingreso - egreso;   
    return presupuestoTotal;
}



const formatoMoneda = (valor) =>{
   return  valor.toLocaleString('en-US',{style:'currency',currency:'COP',minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) =>{
    return  valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2});
 }
const  cargarIngreso =() =>{
    let ingresosHTML ='';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;

}

const crearIngresoHTML= (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.getValor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.getId})'></ion-icon>
                            </button>
                                
                            </div>  
                        </div>
                    </div>
    `;    

    return ingresoHTML;
    }

const cargarEgresos = () =>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += cargarEgresoHTML(egreso); 
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const cargarEgresoHTML = (egreso) =>{
    let porcentaje_egreso = egreso.getValor/totalIngresos();
    let egresosHTMl=`
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.getDescripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.getValor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje_egreso)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.getId})' ></ion-icon>
            </button>
                
            </div>  
        </div>
    </div>
    `;

    return egresosHTMl;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex( ingreso =>  ingreso.id === id);
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngreso();

}

const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex( egreso =>  egreso.id === id);
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();

}

const agregarDato = ()=>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value,+valor.value));
            cargarCabecero();
            cargarIngreso();
        }else{
            egresos.push(new Egreso(descripcion.value,+valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}