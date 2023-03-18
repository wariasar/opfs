onmessage = async function(message) {
   
   // Get handle to draft file
   const root = await navigator.storage.getDirectory();
   const draftHandle = await root.getFileHandle("test.md", { create: true });

   const accessHandle = await draftHandle.createSyncAccessHandle();

   // Get size of the file.
   const fileSize = accessHandle.getSize();

   // Read file content to a buffer.
   const readBuffer = new ArrayBuffer(fileSize);
   const readSize = accessHandle.read(readBuffer, { "at": 0 });
   const str = new TextDecoder().decode(readBuffer);

   // Write a sentence to the end of the file.
   const encoder = new TextEncoder();
   const writeBuffer = encoder.encode(message.data);
   //const writeSize = accessHandle.write(writeBuffer, { "at" : readSize });
   const writeSize = accessHandle.write(writeBuffer, { "at" : 0 });

   // Persist changes to disk.
   accessHandle.flush();

   // Always close FileSystemSyncAccessHandle if done.
   accessHandle.close();

   if (message.data == "") 
      postMessage("r|" + str);
   else
      postMessage("w|File written, filesize: " + readSize + " Bytes");

}

