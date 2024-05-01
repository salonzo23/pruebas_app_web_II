//Definir un objeto por cada entidad asignada (3 entidades)
const auto: IAutos = {
  id: 1,
  descripcion: "Corolla",
  placa: "ABC123",
  color: "rojo"
};

const concepto: IConcepto = {
  id: 1,
  descripcion: "cambio de frenos"
};

const mantenimiento: IMantenimiento = {
  id: 1,
  Id_auto: 1,
  Id_Concepto: [],
  Fecha_mantenimiento: new Date()
};
 