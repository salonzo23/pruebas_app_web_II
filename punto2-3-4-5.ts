//2.Definir una interfaz por cada objeto y asignarla como tipo de objeto.
 interface IAutos {
    id: number;
    descripcion: string;
    placa: string;
    color: string;
  }
  
   interface IConcepto {
    id: number;
    descripcion: string;
  }
  
   interface IMantenimiento {
    id: number;
    Id_auto: number;
    Id_Concepto: IConcepto[];
    Fecha_mantenimiento: Date;
  }

  //3.Crear un arreglo de objetos basándose en la entidad transaccional con por lo menos 3
//elementos.

const mantenimientos: IMantenimiento[] = [
  {
    id: 1,
    Id_auto: 1,
    Fecha_mantenimiento: new Date('2024-04-30'),
    Id_Concepto:[
        {
          id: 1,
          descripcion: "Cambio de aceite"
        },
        {
          id: 2,
          descripcion: "Cambio de puertas"
        },
    ],

  },
  {
    id: 12,
    Id_auto: 2,
    Fecha_mantenimiento: new Date('2024-02-23'),
    Id_Concepto:[
        {
          id: 1,
          descripcion: "Cambio de llaves"
        },
        {
          id: 2,
          descripcion: "Cambio de asientos"
        },
    ],

  },
  {
    id: 14,
    Id_auto: 3,
    Fecha_mantenimiento: new Date('2024-01-03'),
    Id_Concepto:[
        {
          id: 1,
          descripcion: "Cambio de ruedas"
        },
        {
          id: 2,
          descripcion: "Cambio de bateria"
        },
    ],

  }
]


//4.Crear una función que reciba el arreglo del punto anterior y un ID (u otro atributo que
//no se repita) y proceder a eliminar el elemento del arreglo.

function eliminarMantenimiento(mantenimientos: IMantenimiento[], id: number): void {
  for (let i = mantenimientos.length - 1; i >= 0; i--) {
    const mantenimiento = mantenimientos[i];
       if (mantenimiento.id === id) {
       mantenimientos.splice(i, 1);
       break;
    }
  }
}

//5.Agregar a la función anterior un Callback que le permita acceder por última vez a los
//datos del elemento eliminado y mostrarlo por consola.

function eliminarMantenimiento1(
  mantenimientos: IMantenimiento[],
  id: number,
  callback: (mantenimientoEliminado: IMantenimiento) => void
): void {
  for (let i = mantenimientos.length - 1; i >= 0; i--) {
    const mantenimiento = mantenimientos[i];

    if (mantenimiento.id === id) {
      callback(mantenimiento);
      mantenimientos.splice(i, 1);
      break;
    }
  }
  const eliminarElemento = (mantenimientoEliminado: IMantenimiento) => {
    console.log(`Elemento eliminado: ${mantenimientoEliminado.id}`);
    console.log(`Otros datos del elemento: `, mantenimientoEliminado); 
  };
}


