#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main() {
    string operation;
    getline(cin, operation);
    
    stringstream ss(operation);
    char op;
    double num1, num2;
    ss >> num1 >> op >> num2;
    
    double result;
    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: cout << "Invalid operation"; return 1;
    }
    
    cout << result;
    return 0;
}
