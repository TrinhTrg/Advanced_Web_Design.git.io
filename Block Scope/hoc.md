# block scope ( phạm vi khối)
int a;              // biến toàn cục (global scope)
int ham1()
{
    int a1;         // biến cục bộ trong hàm ham1()
}

int ham2()
{
    int a2;         // biến cục bộ trong ham2()

    { 
        int a21;    // biến cục bộ trong block con bên trong ham2()
    }
}

void main() {
    int a3;         // biến cục bộ trong hàm main()
}
