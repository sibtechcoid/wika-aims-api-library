import TypeInterface from "../type";
export default function Type<Extended extends TypeInterface = TypeInterface>(value: any): value is Extended;