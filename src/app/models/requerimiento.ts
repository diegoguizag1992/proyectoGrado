export interface Requerimiento {
  id?: string;
  numero?: number;
  fecha?: string;
  asunto?: string;
  detalles_asunto?: string;
  doc_adjunto?: number;
  codigo_crearRequerimiento?: number;
  password?: string;
  tipo_requerimiento_codigo_tiporequerimiento?: number;
  empleados_codigo_empleado?: number;
  respuesta_requerimientos_codigo_resrequerimientos?: number;
}
