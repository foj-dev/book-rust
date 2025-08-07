# Questions - If

01 - Write a program that asks the user for an integer and determines whether it's even or odd.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter a number:");

    //
    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error in the value entered!");

    //
    let num: i32 = input.trim().parse().expect("Error converting data!");

    //
    if num % 2 == 0 {
        println!("Num = {}\nEven!", num);
    } else {
        println!("Num = {}\nOdd!", num);
    }
}
```
</details>



02 - Create a program that reads a number and prints whether it's positive, negative, or zero.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter a number: ");

    //
    let mut input_num: String = String::new();
    io::stdin()
        .read_line(&mut input_num)
        .expect("Error in the value entered!");

    let num: i8 = input_num.trim().parse().expect("Error converting data!");

    //
    if num > 0 {
        println!("Num = {}!\nPositive", num);
    } else if num < 0 {
        println!("Num = {}!\nNegative", num);
    } else {
        println!("Num = {}!\nZero", num);
    }
}
```
</details>



03 - Develop a program that receives two numbers and shows which one is larger.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter a number (a):");
    let mut input_num_a: String = String::new();
    io::stdin()
        .read_line(&mut input_num_a)
        .expect("Error in the value entered!");

    //
    println!("Enter a number (b):");
    let mut input_num_b: String = String::new();
    io::stdin()
        .read_line(&mut input_num_b)
        .expect("Error in the value entered!");

    //
    let num_a: i8 = input_num_a.trim().parse().expect("Error converting data!");
    let num_b: i8 = input_num_b.trim().parse().expect("Error converting data!");

    //
    if num_a > num_b {
        println!("Num A > Num B");
    } else if num_a < num_b {
        println!("Num A < Num B");
    } else {
        println!("Num A == Num B");
    }
}
```
</details>



04 - Create a program that receives a student's grade (from 0 to 10) and reports if they passed (grade >= 7), are in recovery (grade >= 5 and < 7), or failed (grade < 5).

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter you grade for your first test:");
    let mut input_test_a: String = String::new();
    io::stdin()
        .read_line(&mut input_test_a)
        .expect("Error entering the first grade!");

    //
    println!("Enter the grade for your second test:");
    let mut input_test_b: String = String::new();
    io::stdin()
        .read_line(&mut input_test_b)
        .expect("Error entering the second grade!");

    //
    println!("Enter the grade for your third test:");
    let mut input_test_c: String = String::new();
    io::stdin()
        .read_line(&mut input_test_c)
        .expect("Error entering the third test!");

    //
    let test_a: f32 = input_test_a
        .trim()
        .parse()
        .expect("Error converting Test A!");
    let test_b: f32 = input_test_b
        .trim()
        .parse()
        .expect("Error converting Test B!");
    let test_c: f32 = input_test_c
        .trim()
        .parse()
        .expect("Error converting Test C!");

    let ava: f32 = (test_a + test_b + test_c) / 3.;

    //
    if ava < 5. {
        println!("You failed!");
    } else if ava >= 5. && ava < 7. {
        println!("You are in recovery!");
    } else {
        println!("You passed!");
    }
}
```
</details>



05 - Write a program that reads a person's age and determines if they can vote (16 years or older).

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter your age:");

    let mut input_age: String = String::new();
    io::stdin()
        .read_line(&mut input_age)
        .expect("Error in the entered!");

    //
    let age: u8 = input_age.trim().parse().expect("Error converting age!");

    //
    if age >= 16 && age <= 59 {
        println!("You are required to vote!");
    } else if age >= 60 && age <= 100 {
        println!("Your vote is optional!");
    } else {
        println!("You cannot vote!");
    }
}
```
</details>



06 - Develop a program that asks for three numbers and determines which one is the largest.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    // a
    println!("Enter with number! A: ");
    let mut input_a: String = String::new();
    io::stdin()
        .read_line(&mut input_a)
        .expect("Error in the entered!");

    // b
    println!("Enter with number! B: ");
    let mut input_b: String = String::new();
    io::stdin()
        .read_line(&mut input_b)
        .expect("Error in the entered!");

    // c
    println!("Enter with number! C: ");
    let mut input_c: String = String::new();
    io::stdin()
        .read_line(&mut input_c)
        .expect("Error in the entered!");

    //
    let num_a: i8 = input_a.trim().parse().expect("Error converting num A!");
    let num_b: i8 = input_b.trim().parse().expect("Error converting num B!");
    let num_c: i8 = input_c.trim().parse().expect("Error converting num C!");

    //
    if num_a == num_b && num_a == num_c {
        println!("a == b == c");
    }

    if num_a == num_b && num_a > num_c {
        println!("a == b > c");
    }

    if num_a == num_b && num_a < num_c {
        println!("a == b < c");
    }

    if num_a == num_c && num_a > num_b {
        println!("a == c > b");
    }

    if num_a == num_c && num_a < num_b {
        println!("a == c < b");
    }

    if num_b == num_c && num_b > num_a {
        println!("b == c > a");
    }

    if num_b == num_c && num_b < num_a {
        println!("b == c < a");
    }

    if num_a > num_b && num_b > num_c {
        println!("a > b > c");
    }

    if num_a > num_c && num_c > num_b {
        println!("a > c > b");
    }

    if num_b > num_a && num_a > num_c {
        println!("b > a > c");
    }

    if num_c > num_a && num_a > num_b {
        println!("c > a > b");
    }

    if num_c > num_b && num_b > num_a {
        println!("c > b > a");
    }
}
```
</details>



07 - Ceate a program that converts a numerical score (0 to 100) to a letter grade, following these rules:

- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter with number (0 - 100):");
    let mut input_num: String = String::new();
    io::stdin()
        .read_line(&mut input_num)
        .expect("Error in the entered!");
    let num: u8 = input_num.trim().parse().expect("Error converting num:");

    //
    if num >= 0 && num <= 59 {
        println!("F");
    } else if num >= 60 && num <= 69 {
        println!("D");
    } else if num >= 70 && num <= 79 {
        println!("C");
    } else if num >= 80 && num <= 89 {
        println!("B");
    } else if num >= 90 && num <= 100 {
        println!("A");
    } else {
        println!("Error!");
    }
}
```
</details>


08 - Write a program that receives the lengths of the three sides of a triangle and determines if it is equilateral (all sides equal), isosceles (two sides equal), or scalene (all sides different).

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    // a
    println!("Enter the size of side A:");
    let mut input_a: String = String::new();
    io::stdin()
        .read_line(&mut input_a)
        .expect("Error in the entered!");

    // b
    println!("Enter the size of side B:");
    let mut input_b: String = String::new();
    io::stdin()
        .read_line(&mut input_b)
        .expect("Error in the entered!");

    // c
    println!("Enter the size of side C:");
    let mut input_c: String = String::new();
    io::stdin()
        .read_line(&mut input_c)
        .expect("Error in the entered!");

    //
    let a: f32 = input_a.trim().parse().expect("Error converting num A:");
    let b: f32 = input_b.trim().parse().expect("Error converting num B:");
    let c: f32 = input_c.trim().parse().expect("Error converting num C:");

    //
    if a == b && b == c {
        println!("Equilateral");
    } else if a == b || b == c {
        println!("Isosceles");
    } else {
        println!("Scalene");
    }
}
```
</details>


09 - Write a program that receives a number from 1 to 7 and prints the corresponding day of the week (1 for Sunday, 2 for Monday, etc.), also indicating if it's a "Weekday" or "Weekend."use std::io;

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter a number from 1 to 7:");
    let mut input_day: String = String::new();
    io::stdin()
        .read_line(&mut input_day)
        .expect("Error in the entered!");
    let day: u8 = input_day.trim().parse().expect("Error converting day!");

    //
    if day == 1 || day == 7 {
        if day == 1 {
            println!("Sunday - Weekend!");
        } else {
            println!("Saturday - Weekend!");
        }
    } else if day == 2 {
        println!("Monday - Weekday!");
    } else if day == 3 {
        println!("Tuesday - Weekday!");
    } else if day == 4 {
        println!("Wednesday - Weekday!");
    } else if day == 5 {
        println!("Thursday - Weekday!");
    } else if day == 6 {
        println!("Friday - Weekday!");
    } else {
        println!("Error!");
    }
}
```
</details>


10 - Write a program that reads a person's age and classifies them into the following categories:

- Child: 0-12 years
- Teenager: 13-17 years
- Adult: 18-59 years
- Elderly: 60 years or more

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter you age:");
    let mut input_age: String = String::new();
    io::stdin()
        .read_line(&mut input_age)
        .expect("Error in the entered!");
    let age: u8 = input_age.trim().parse().expect("Error converting age!");

    //
    if age >= 1 && age <= 12 {
        println!("Child!");
    } else if age >= 13 && age <= 17 {
        println!("Teenager!");
    } else if age >= 18 && age <= 59 {
        println!("Adult");
    } else if age >= 60 && age <= 112 {
        println!("Elderly!");
    } else {
        println!("Error: Age > 112!");
    }
}
```
</details>

11 - Create a program that functions as a calculator. It should receive two numbers and an operator (+, -, *, /). The program should perform the corresponding operation and show the result. Also, handle division by zero.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter the first number:");
    let mut input_first_number: String = String::new();
    io::stdin()
        .read_line(&mut input_first_number)
        .expect("Error receiving first number!");

    //
    println!("Enter the second number:");
    let mut input_second_number: String = String::new();
    io::stdin()
        .read_line(&mut input_second_number)
        .expect("Error receiving first number!");

    //
    println!("Insert the mathematical operator:");
    let mut input_operator: String = String::new();
    io::stdin()
        .read_line(&mut input_operator)
        .expect("Error receiving mathematical operator!");

    //
    let first_number: f32 = input_first_number
        .trim()
        .parse()
        .expect("Error converting first number!");

    //
    let second_number: f32 = input_second_number
        .trim()
        .parse()
        .expect("Error converting second number!");

    //
    let operator: char = input_operator
        .trim()
        .parse()
        .expect("Error converting mathematical operator!");

    //
    if operator == '+' {
        println!(
            "{} {} {} = {}",
            first_number,
            operator,
            second_number,
            first_number + second_number
        );
    } else if operator == '-' {
        println!(
            "{} {} {} = {}",
            first_number,
            operator,
            second_number,
            first_number - second_number
        );
    } else if operator == '*' {
        println!(
            "{} {} {} = {}",
            first_number,
            operator,
            second_number,
            first_number * second_number
        );
    } else if operator == '/' {
        if second_number == 0. {
            println!("[Error] Second number equal 0.");
        } else {
            println!(
                "{} {} {} = {}",
                first_number,
                operator,
                second_number,
                first_number / second_number
            );
        }
    } else {
        println!("[Error] Mathematical operator not allowed!");
    }
}
```
</details>


12 - Develop a program that calculates a discount based on the purchase amount:

- Purchases below R$ 100: no discount;
- Purchases from R$ 100 to R$ 500: 10% discount;
- Purchases above R$ 500: 20% discount.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter the value:");
    let mut input_value: String = String::new();
    io::stdin()
        .read_line(&mut input_value)
        .expect("Error receiving value!");
    let value: f32 = input_value.trim().parse().expect("Error converting value!");

    //
    if value < 100. {
        println!("Value: {} - No discount!", value);
    } else if value >= 100. && value <= 500. {
        let discount = value - ((value * 10.) / 100.);
        println!("Value: {} - Discount 10%\nNew value: {}", value, discount);
    } else if value > 500. {
        let discount = value - ((value * 20.) / 100.);
        println!("Value: {} - Discount 20%\nNew value: {}", value, discount);
    } else {
        println!("Error!");
    }
}
```
</details>


13 - Write a program that calculates a person's BMI (weight / height²) and classifies the result:

- Below 18.5: Underweight
- 18.5 - 24.9: Normal weight
- 25.0 - 29.9: Overweight
- 30.0 or more: Obesity

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    const ERROR_INPUT: &str = "Error receiving valeu!";
    const ERROR_CONVERTING: &str = "Error converting value!";

    //
    println!("Enter the Weight:");
    let mut input_weight: String = String::new();
    io::stdin().read_line(&mut input_weight).expect(ERROR_INPUT);
    let weight: f32 = input_weight.trim().parse().expect(ERROR_CONVERTING);

    //
    println!("Enter the Height:");
    let mut input_height: String = String::new();
    io::stdin().read_line(&mut input_height).expect(ERROR_INPUT);
    let height: f32 = input_height.trim().parse().expect(ERROR_CONVERTING);

    //
    let bmi: f32 = weight / (height * height);

    if bmi <= 18.5 {
        println!("Underweight!");
    } else if bmi > 18.5 && bmi <= 24.9 {
        println!("Normal weight!");
    } else if bmi >= 25. && bmi <= 29.0 {
        println!("Overweight!");
    } else if bmi >= 30.0 {
        println!("Obesity!");
    } else {
        println!("Error calculating BMI or invalid range!");
    }
}
```
</details>



14 - Create a program that asks for a username and a password. If the username is "admin" and the password is "1234", display "Access granted". Otherwise, display "Access denied".

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

const ERROR_INPUT: &str = "Data entry error!";

fn main() {
    //
    println!("Username:");
    let mut input_username: String = String::new();
    io::stdin()
        .read_line(&mut input_username)
        .expect(ERROR_INPUT);
    let username: &str = input_username.trim();

    //
    println!("Password:");
    let mut input_password: String = String::new();
    io::stdin()
        .read_line(&mut input_password)
        .expect(ERROR_INPUT);
    let password: &str = input_password.trim();

    //
    if username == "admin" && password == "12345" {
        println!("Access Granted!");
    } else {
        println!("Access Denied!");
    }
}
```
</details>



15 - Create the game "Rock, Paper, Scissors." Ask for the choices of two players and determine the winner based on the classic rules.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;
use std::time::{SystemTime, UNIX_EPOCH};

fn main() {
    //
    println!("--- Start ---");
    println!("Player 1");
    println!("Computer");
    println!("");

    //
    println!("-- Select --");
    println!("  Player 1  ");
    println!("");
    println!("[1] Rock");
    println!("[2] Paper");
    println!("[3] Scissors");
    println!("");
    println!("1 | 2 | 3");

    //
    let mut input_player1: String = String::new();
    io::stdin()
        .read_line(&mut input_player1)
        .expect("Data entry error!");
    let mut player1: &str = input_player1.trim();

    //
    if player1 == "1" {
        player1 = "Rock";
    } else if player1 == "2" {
        player1 = "Paper";
    } else {
        player1 = "Scissors";
    }

    //
    println!("");
    println!("-- Select --");
    println!("  Player 2  ");
    println!("");
    println!("-- Raffling --");
    println!("[1] Rock");
    println!("[2] Paper");
    println!("[3] Scissors");
    println!("");

    //
    let nanos = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Error")
        .as_nanos();

    let nano_computer = (nanos % 3 + 1) as u8;
    let computer: &str;

    if nano_computer == 1 {
        computer = "Rock";
    } else if nano_computer == 2 {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }

    //
    if player1 == computer {
        println!("Player 1: {} and Computer: {}", player1, computer);
        println!("The game is a draw!");
    } else if player1 == "Rock" {
        if computer == "Paper" {
            println!("Player 1: {} and Computer: {}", player1, computer);
            println!("Player 1: You Loser!");
        }
        if computer == "Scissors" {
            println!("Player 1: {} and Computer: {}", player1, computer);
            println!("Player 1: You Win!");
        }
    } else if player1 == "Paper" {
        if computer == "Rock" {
            println!("Player 1: {} and Computer: {}", player1, computer);
            println!("Player 1: You Win!");
        }
        if computer == "Scissors" {
            println!("Player 1: {} and Computer: {}", player1, computer);
            println!("Player 1: You Loser!");
        }
    } else {
        if computer == "Rock" {
            println!("Player 1: {} and Computer: {}", player1, computer);
            println!("Player 1: You Loser!");
        }
        if computer == "Paper" {
            println!("Player 1: {} and Computer: {}", player1, computer);
            println!("Player 1: You Win!");
        }
    }
}
```
</details>


