1. Simple Types
   - ba kiểu nguyên thủy : number, string , boolean
   kiểu bigint - như float trong c++
   kiểu symbol - tạo giá trị duy nhất
   - khi tạo biến ts có 2 cách để gán kiểu như liệu cho biến: explicit (rõ ràng) implicit(ngầm định)
ex: + let age = 20; ngầm định age : number
    - lỗi khi gán loại: 
    /đối với kiểu explicit như sau
    let age : number = 20;
    age = "abc"
    /đối với kiểu implicit cũng không ngoại lệ
    let age = 20;
    age = "abc"
- có trường hợp ts không thể suy đoán ra type của biến
    vd: const json = JSON.pase('123');
    console.log(typeof json);
    // return number
    nên nó sẽ đặt thành any
2. TypeScript Special Types
   - type : any vô hiệu hóa checking type và cho sử dụng tất cả các type
   - Type: unknown sử dụng khi chưa biết loại dữ liệu được nhập
    - Type: undefined & null
3. TypeScript Arrays
    - readonly ngăn chặn thay đổi mảng
    ex: 
        const names: readonly string[] = ["Dylan"];
        names.push("Jack");
        // push does not exist readonly
    - Type Inference
    const numbers = [1, 2, 3]; // inferred to type number[]
    numbers.push(4); // no error
    numbers.push("2"); // Error: Argument of type 'string'
4. TypeScript Tuples
    tuples là 1 mảng được xác định trước độ dài và kiểu dữ liệu
    let tuples = [number, string, boolean]
    nếu gán dữ liệu sai thứ tự => lỗi
    tuples = ["abc",1,true] => eror
5. TypeScript Object Types
    ex: 
    const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
    };
    - trong object type cũng có kiểu suy luận
    ex: 
    const car = {
    type: "Toyota",
    }; => suy luận type : string
    - Optional Properties (?)
    ex : 
    const car: { type: string, mileage?: number } = {
    type: "Toyota"
    };
    car.mileage = 2000;
    - Index Signatures (chỉ mục)
    const nameAgeMap: { [index: string]: number } = {};
    nameAgeMap.Jack = 25;
6. Enums
    -Numeric enums
    mỗi 1 phần tử trong enum được liên kết với các giá trị số nguyên, nếu không được chỉ định rõ nó sẽ tự động tăng dần
    ex: enum CardinalDirections {
    North,
    East,
    South,
    West
    }
    CardinalDirections.north = 0, CardinalDirections.east = 1,... 
    - string enums như numeric enums
    ex: enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
    };
7. Union type (|)
    string | number  // là string hoặc number
8. TypeScript Functions
    function getTime(): number {
    return new Date().getTime();
    }=> return đúng giá trị, ở đây là number
    type : void không return
9. TypeScript Casting
    - sử dụng as để gán kiểu dữ liệu cho biến nhưng ko làm thay đổi kiểu dữ liệu giá trị của biến
    ex: 
    let x: unknown = 'hello';
    console.log((x as string).length);
10. TypeScript Classes
    3 mức độ : public , private, proteced
    public dùng ở mọi nơi, private chỉ dùng trong class,
    proteced dùng cho những class được extend và có thể mở rộng
    ex: 
    class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
    }

    const person = new Person("Jane");
    console.log(person.getName()); // log thành công
    console.log(person.name); // log ko thành công do private
- implements sape là triển khai intercafe sape , sape cung cấp phương thức gì thì class implements sẽ dùng phương thức đó nếu ko thì cảnh báo
    ex:
     interface Shape {
    getArea: () => number;
    }

    class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
    }

    class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
    }
- override ghi đè 1 phương thức trong lớp con đã được triển khai ở lớp cha
11. Utility Types
required bắt buộc
ex : 
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // phải có vì đã required
};
- Record<string, number> => key type = string, value type = number
- omit loại bỏ thuộc tính của kiểu dữ liệu cũ để tạo kiểu dữ liệu mới
ex: 
interface Person {
  name: string;
  age: number;
  location?: string;
}

    const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    };
- pick ngược lại omit
- Exclude nhỏ hơn omit, omit xóa đi key còn Exclude xóa đi value
