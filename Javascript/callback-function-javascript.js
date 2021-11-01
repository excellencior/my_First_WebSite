function print(name, property, task_name) {
    console.log("Hello ", name);
    console.log("You are ", property);
    task_name();
}

function pilot() {
    console.log("Flying airplanes throughout the world");
}

function teacher() {
    console.log("Maker of a nation");
}

function engineer() {
    console.log("Technological Magician");
}

function doctor() {
    console.log("Power of touching human soul");
}

print("Johnson", "a pilot", pilot)
print("Sushmita", "a engineer", engineer);
print("Kobir", "a teacher", teacher);
print("Md. Khalek", "a doctor", doctor);