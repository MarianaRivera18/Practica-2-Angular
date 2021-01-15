export class Persona {
     
    nombre:string;
    apellidos:string;
    edad:number;
    sexo:string; 


   public setNombre(nombre:string){
       this.nombre = nombre;
    }
    public setApellidos(apellidos:string){
        this.apellidos = apellidos;
    }
    public setEdad(edad:number){
        this.edad = edad;
    }
    public setSexo(sexo:string){
        this.sexo = sexo;
    }

    public getNombre(){
       return this.nombre;
     }

    public getApellidos(){
        return this.apellidos;
      }
    public getEdad(){
        return this.edad;
      }
    public getSexo(){
        return this.sexo;
      }
  
   
  


}

 



