export interface StringValidator {
  isAcceptable(s: string): boolean;
}

/** Interfaz para todos los usuarios */
export interface CustomUser {
  name: string;
}
