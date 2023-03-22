# OPFS
This is just a test for the OPFS feature in Webbrowsers.
It is a kind of editor for the poor. 
You can use it to place text files on your local filesystem using opfs.

Firefox places the files in this path:

~/.mozilla/firefox/\<yourprofile\>/storage/default/\<domain\>/fs/

A subdirectory is created there, which contains a file composed of 52 digits (letters and numbers).
It's just a Hash of the original Filname.
This file contains the original content as it was entered via the webapplication.
However, this file cannot be made executable by the creator.  
A sqlight database is also created in this path, which contains the metadata.

In Firefox this feature was introduced with version 111.

![Abbildung: Timer](https://github.com/wariasar/opfs/blob/master/screenshot.png)

You can Test it [here: ](https://v22018096896673253.goodsrv.de/opfs/)

