class Person{
     		constructor(name, age, greet='Hi'){
                 
            this.name = name;
     		this.age = age;
     		this.greeting = greet;

     		};
     		
     	getGreeting(){
     		return `${this.greeting} ${this.name}! Welcome`;
     	};
      
      };

     	let p1 = new Person("Maxwell",20);
        let p2 = new Person("Lenina",21,"Yup");

        class Employee extends Person{
             constructor(name,age,greet = "Hi",salary){
                super(name,age,greet);
                this.salary = salary;
             }; 
             getGreeting(){
                return super.getGreeting() + " Don't forget to record your time";
             };
             getSalary(){
                return this.salary
             };
        }

        let e1 = new Employee("Ajith",21,"Hello",50000);

     	document.getElementById("demo").innerHTML = e1.getGreeting();
