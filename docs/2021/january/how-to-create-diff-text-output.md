# How to create a text side by side output in node.js (as a diff)

This actually was an interview question from [VanHack](https://vanhack.com), a platform for remote digital work.

And here i explain my initial and naive approach.

By reading multiple file `.txt`, create a text side by side that output **text column** like this.

    Matsuo Bashô: Frog Haiku        Matsuo Bashô: Frog Haiku
    Translated by Kenneth Rexroth   Translated by Tim Chilcott

    An old pond —                   ancient is the pond —
    The sound                           suddenly a frog leaps — now!
    Of a diving frog.                       the water echoes

![side by side text output](https://i.imgflip.com/4v4pfj.gif)

## Arguments

**-s** (width in character of horizontal text column ): Number

 Default:
  - longest row length per file
    
**-c** (number of column space characters): Number
 
 Default
  - 2 space characters
    
**files**:  String

## Check params

**-s** and **-c** will be follow by a positive number

**files** will be given in any order

## Algorithm 

Create a function for retrieveArguments

Function `retrieveArguments`
1) read the arguments
2) store all .txt extension filespath
3) check for numbers
4) identify previous element for *-c* & *-s*

Function `getAllFilesContentPromises`

1) readline using createReadStream from one file
2) transform line string to an arrayLine
3) append arrayLine to an object
4) add line lenght (width characters) to the object

Function `getAllFilesContentPromise`
1) process the array of Promises from `getAllFilesContentPromises`

Columnization ( Naive approach )
1) While column counter is less than maxColumnSize, 
2) Go to each column per file, 
3) Search maxCharLengthFile 
4) add the padding on columns using maxCharLengthFile  
5) add the space character between columns 
6) add the fileLine to the arrayRow 
7) go to the next file 
8) did you reach to the last file?, append it to a hashtable and look the first file again 

*only works with same column length files.

## Key concepts

### [Node.js Buffers](https://nodejs.dev/learn/nodejs-buffers)

A buffer is an area of memory.

A simple visualization of a buffer is when you are watching a YouTube video and the red line goes beyond your visualization point: you are downloading data faster than you're viewing it, and your browser buffers it.

In order words **store data** to be **process later**

### [Node.js Stream](https://nodejs.dev/learn/nodejs-streams)

Traditionally, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.
 
Using streams you read it piece by piece, processing its content without keeping it all in memory.

Streams provide two major advantages:
- Memory efficiency
- Time efficiency


### [ReadLine using CreateReadStream in Node](https://nodejs.org/docs/latest-v12.x/api/readline.html#readline_example_read_file_stream_line_by_line)

### [Know your BigO or Asymptomatic Analysis of Data Structures](https://www.bigocheatsheet.com/)


Source 
[Github code](https://github.com/eulier1/sidebyside-text-column)

      