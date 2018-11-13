using Jint;
using System;
using System.Collections;
using System.Collections.Generic;

namespace TestJint
{
    class Program
    {
        static void Main(string[] args)
        {
            Engine engine = new Engine();
            engine.SetValue("AAA", new List<int> { 11, 22, 33 });
            engine.SetValue("log", new Action<object>(Log));

            engine.Execute("log(\"ok\"); var BBB = [444,555,666]; for (a of BBB) { log(a); }");


            Console.ReadLine();
        }

        static void Log(object o)
        {
            Console.WriteLine(o?.ToString() ?? string.Empty);
        }

    }


    public class AAA : IEnumerable
    {
        public IEnumerator GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
