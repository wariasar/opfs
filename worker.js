onmessage = async function(message) {
   
   // Get handle to draft file
   const root = await navigator.storage.getDirectory();
   const draftHandle = await root.getFileHandle(message.data[2], { create: true });

   const accessHandle = await draftHandle.createSyncAccessHandle();

   // Get size of the file.
   const fileSize = accessHandle.getSize();

   if (message.data[0] == "r") {
      // Read file content to a buffer.
      const readBuffer = new ArrayBuffer(fileSize);
      const readSize = accessHandle.read(readBuffer, { "at": 0 });
      const str = new TextDecoder().decode(readBuffer);
      postMessage(["r", str, fileSize]);
   }

   if (message.data[0] == "w") {
      // Write to the file.
      accessHandle.truncate(0);
      const encoder = new TextEncoder();
      const writeBuffer = encoder.encode(message.data[1]);
      const writeSize = accessHandle.write(writeBuffer, { "at" : 0 });
      postMessage(["w", "File written", writeSize]);
   }

   // Persist changes to disk.
   accessHandle.flush();

   // Always close FileSystemSyncAccessHandle if done.
   accessHandle.close();
}

