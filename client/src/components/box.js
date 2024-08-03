function Box() {
  return (
    <div className="mx-auto p-8 h-auto w-1/2 bg-blue-50 shadow-lg my-8 rounded">
    
        <label for="task" className="text-lg text-purple-900 font-poppins mr-4">Add Task :</label>
        <input type="text" name="task" className="bg-transparent border-b-2 border-purple-900 w-2/3 outline-none text-purple-900 font-poppins"/>
        <input type="submit" value="add" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full ml-4 font-poppins cursor-pointer"/>
    </div>
  );
}

export default Box;