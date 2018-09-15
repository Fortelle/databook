let warriorDataArray = [
[0,0,0,[0,0],2,[65,60,65,4],1],
[1,0,0,[0,0],23,[75,70,80,6],2],
[2,0,0,[0,0],24,[80,85,100,8],3],
[3,1,1,[0,0],2,[65,60,65,4],1],
[4,1,1,[0,0],23,[75,70,80,6],2],
[5,1,1,[0,0],24,[80,85,100,8],3],
[6,2,0,[15,12],25,[89,94,92,5],1],
[7,2,0,[15,12],26,[96,100,100,8],2],
[8,3,1,[0,15],5,[48,73,90,4],1],
[9,3,1,[0,15],27,[54,83,98,5],2],
[10,4,0,[9,1],14,[66,65,78,6],1],
[11,4,0,[9,1],28,[76,88,88,7],2],
[12,4,0,[9,1],29,[80,98,98,8],3],
[13,5,0,[10,10],3,[82,81,81,6],1],
[14,5,0,[10,10],30,[90,92,91,7],2],
[15,6,1,[12,12],4,[74,68,72,5],1],
[16,6,1,[12,12],31,[84,78,82,6],2],
[17,7,0,[11,11],7,[69,90,86,7],1],
[18,7,0,[11,11],32,[79,100,96,8],2],
[19,8,0,[14,2],9,[77,82,82,5],1],
[20,8,0,[14,2],33,[88,92,92,6],2],
[21,9,0,[1,1],6,[90,63,62,6],1],
[22,9,0,[1,1],34,[98,73,72,7],2],
[23,10,1,[3,2],3,[65,78,75,5],1],
[24,10,1,[3,2],35,[75,84,85,6],2],
[25,11,0,[4,5],3,[82,96,86,7],1],
[26,11,0,[4,5],36,[92,100,96,8],2],
[27,12,0,[2,2],4,[86,82,80,7],1],
[28,12,0,[2,2],37,[96,92,90,8],2],
[29,13,0,[13,1],4,[90,66,81,7],1],
[30,13,0,[13,1],38,[99,76,91,8],2],
[31,14,0,[6,8],16,[64,72,79,5],1],
[32,14,0,[6,8],39,[75,82,88,6],2],
[33,15,0,[5,5],7,[80,78,84,7],1],
[34,15,0,[5,5],40,[90,94,94,8],2],
[35,16,1,[7,15],12,[48,74,90,5],1],
[36,16,1,[7,15],41,[54,84,97,6],2],
[37,17,0,[16,16],14,[82,78,52,5],1],
[38,17,0,[16,16],42,[92,89,62,6],2],
[39,18,0,[8,5],7,[80,84,87,8],1],
[40,18,0,[8,5],43,[88,94,97,8],2],
[41,19,0,[12,9],12,[36,90,70,5],1],
[42,19,0,[12,9],44,[42,99,80,6],2],
[43,20,0,[7,9],13,[60,90,62,5],1],
[44,20,0,[7,9],45,[70,98,70,6],2],
[45,21,0,[2,0],10,[84,68,73,6],1],
[46,21,0,[2,0],46,[94,78,83,7],2],
[47,22,1,[13,14],12,[42,63,78,5],1],
[48,22,1,[13,14],47,[52,73,87,5],2],
[49,23,0,[7,3],10,[87,77,62,5],1],
[50,23,0,[7,3],48,[94,88,72,6],2],
[51,24,1,[16,14],17,[60,63,70,5],1],
[52,24,1,[16,14],49,[70,73,80,5],2],
[53,25,0,[9,2],6,[87,78,80,6],1],
[54,25,0,[9,2],50,[95,84,90,7],2],
[55,26,0,[11,2],9,[89,79,74,6],1],
[56,26,0,[11,2],51,[95,88,84,7],2],
[57,27,0,[13,13],3,[65,88,79,7],1],
[58,27,0,[13,13],52,[75,97,89,7],2],
[59,28,1,[14,7],5,[39,71,75,5],1],
[60,28,1,[14,7],53,[49,81,86,5],2],
[61,29,1,[9,5],14,[73,62,70,5],1],
[62,29,1,[9,5],54,[83,72,80,6],2],
[63,30,1,[6,9],17,[65,63,79,3],1],
[64,30,1,[6,9],55,[75,73,88,4],2],
[65,31,0,[1,8],15,[69,72,66,4],1],
[66,31,0,[1,8],56,[79,82,76,5],2],
[67,32,0,[8,15],13,[92,68,81,6],1],
[68,32,0,[8,15],57,[100,77,89,6],2],
[69,33,1,[10,8],9,[78,56,68,5],1],
[70,33,1,[10,8],58,[88,63,79,6],2],
[71,34,0,[5,1],6,[92,40,73,6],1],
[72,34,0,[5,1],59,[100,50,86,7],2],
[73,35,0,[8,16],10,[46,85,72,5],1],
[74,35,0,[8,16],60,[55,96,84,5],2],
[75,36,0,[15,4],15,[82,64,67,5],1],
[76,36,0,[15,4],61,[92,74,77,6],2],
[77,37,0,[4,16],13,[88,37,63,5],1],
[78,37,0,[4,16],62,[97,50,73,6],2],
[91,112,0,[0,0],18,[52,95,90,7],0],
[87,108,0,[16,16],14,[70,95,79,6],0],
[82,103,0,[4,0],6,[82,70,66,6],0],
[81,102,0,[1,0],20,[88,59,82,7],0],
[80,101,0,[0,0],7,[84,84,81,7],0],
[97,118,0,[11,0],19,[73,81,82,7],0],
[93,114,1,[0,0],18,[34,69,78,2],0],
[92,113,1,[10,0],1,[33,55,75,4],0],
[93,114,1,[0,0],19,[32,55,74,4],0],
[101,122,0,[10,15],10,[79,80,65,6],0],
[80,101,0,[15,15],15,[75,73,68,5],0],
[95,116,0,[10,15],3,[74,55,61,6],0],
[97,118,0,[11,15],8,[7,5,71,2],0],
[81,102,0,[15,15],4,[79,33,66,5],0],
[108,129,0,[8,15],13,[96,21,83,6],0],
[97,118,0,[11,15],2,[70,42,73,6],0],
[87,108,0,[15,15],20,[26,79,67,5],0],
[84,105,0,[1,15],0,[79,31,75,5],0],
[92,113,1,[15,15],5,[54,72,79,2],0],
[92,113,1,[15,15],9,[48,61,72,2],0],
[83,104,0,[9,9],17,[68,78,77,5],0],
[96,117,0,[1,9],6,[75,74,69,4],0],
[89,110,0,[2,9],12,[70,87,72,6],0],
[87,108,0,[13,9],15,[72,86,64,6],0],
[98,119,0,[0,9],16,[31,72,70,6],0],
[97,118,0,[11,9],19,[68,66,75,5],0],
[84,105,0,[9,9],18,[20,26,68,3],0],
[93,114,1,[4,9],18,[34,47,70,3],0],
[89,110,0,[9,9],16,[48,51,62,5],0],
[85,106,0,[9,9],0,[68,61,63,5],0],
[88,109,0,[9,9],9,[14,42,57,2],0],
[90,111,0,[6,9],1,[23,23,23,3],0],
[107,128,1,[4,9],21,[62,54,60,4],0],
[92,113,1,[9,9],8,[50,55,50,2],0],
[93,114,1,[7,9],12,[57,73,50,3],0],
[92,113,1,[0,0],5,[30,67,67,4],0],
[105,126,1,[8,9],2,[62,55,73,3],0],
[89,110,0,[10,10],9,[79,66,70,5],0],
[82,103,0,[10,10],7,[73,78,72,6],0],
[84,105,0,[10,10],8,[77,35,83,5],0],
[85,106,0,[10,10],20,[87,21,63,4],0],
[82,103,0,[12,10],4,[78,45,52,4],0],
[89,110,0,[12,10],1,[49,80,62,5],0],
[90,111,0,[12,10],16,[16,76,28,3],0],
[100,100,0,[12,12],10,[85,86,76,7],0],
[81,102,0,[12,12],3,[90,70,66,7],0],
[87,108,0,[16,12],3,[69,78,83,6],0],
[100,121,0,[12,12],16,[38,88,80,6],0],
[97,118,0,[12,12],1,[58,40,61,4],0],
[90,111,0,[12,12],2,[56,43,45,5],0],
[93,114,1,[12,12],21,[15,13,78,3],0],
[83,104,0,[15,11],6,[92,71,80,7],0],
[86,107,0,[11,11],0,[69,90,84,7],0],
[83,104,0,[11,11],1,[41,26,82,5],0],
[95,116,0,[10,11],8,[80,66,62,5],0],
[100,121,0,[11,11],17,[6,80,68,2],0],
[90,111,0,[11,11],7,[71,72,82,6],0],
[88,109,0,[11,11],8,[48,80,68,5],0],
[83,104,0,[14,14],20,[78,44,72,5],0],
[80,101,0,[14,14],13,[68,68,68,5],0],
[82,103,0,[14,14],15,[60,36,64,3],0],
[85,106,0,[14,14],18,[65,40,58,3],0],
[88,109,0,[14,14],21,[52,55,55,3],0],
[84,105,0,[13,14],6,[76,72,78,6],0],
[108,129,0,[13,14],1,[70,85,80,6],0],
[93,114,1,[14,14],19,[38,63,66,5],0],
[80,101,0,[1,1],1,[78,56,60,5],0],
[85,106,0,[1,1],2,[73,56,70,5],0],
[100,100,0,[1,1],13,[66,87,85,7],0],
[86,107,0,[1,1],11,[71,69,60,5],0],
[85,106,0,[1,1],4,[70,48,58,4],0],
[86,107,0,[1,1],7,[30,55,57,3],0],
[91,112,0,[9,1],22,[56,65,61,4],0],
[101,122,0,[3,3],4,[87,89,34,3],0],
[101,122,0,[3,3],4,[68,47,61,3],0],
[91,112,0,[3,3],8,[42,69,53,3],0],
[102,123,0,[3,3],9,[80,62,66,5],0],
[103,124,0,[3,3],11,[60,40,43,3],0],
[83,104,0,[5,4],6,[82,56,79,6],0],
[87,108,0,[2,4],14,[41,92,69,5],0],
[81,102,0,[9,4],16,[88,66,70,6],0],
[100,100,0,[4,4],7,[70,76,70,5],0],
[82,103,0,[4,4],16,[80,50,70,5],0],
[80,101,0,[9,4],17,[74,93,74,7],0],
[100,100,0,[9,4],13,[58,94,70,6],0],
[93,114,1,[4,4],11,[32,50,50,3],0],
[104,125,1,[16,4],9,[60,67,68,4],0],
[92,113,1,[9,4],0,[65,48,69,5],0],
[87,108,0,[15,2],1,[70,90,72,6],0],
[81,102,0,[6,2],4,[85,53,66,5],0],
[100,100,0,[14,2],0,[66,69,60,4],0],
[95,116,0,[2,2],11,[48,44,56,3],0],
[85,106,0,[15,2],16,[76,53,60,5],0],
[86,107,0,[2,2],8,[71,56,63,5],0],
[104,125,1,[2,2],19,[38,76,50,4],0],
[92,113,1,[2,2],12,[58,59,50,4],0],
[81,102,0,[13,13],10,[82,71,64,6],0],
[80,101,0,[14,13],3,[81,65,73,6],0],
[83,104,0,[13,13],20,[74,76,68,5],0],
[81,102,0,[5,13],6,[90,12,59,5],0],
[84,105,0,[16,13],22,[79,44,61,5],0],
[91,112,0,[13,13],18,[55,92,74,5],0],
[85,106,0,[11,13],13,[92,2,55,4],0],
[91,112,0,[13,13],19,[37,77,61,4],0],
[92,113,1,[13,13],21,[70,57,50,5],0],
[93,114,1,[13,13],7,[27,61,48,4],0],
[108,129,0,[6,6],21,[73,89,71,7],0],
[108,129,0,[6,6],12,[6,8,62,1],0],
[100,121,0,[14,6],14,[50,92,77,6],0],
[82,103,0,[6,6],3,[44,52,62,5],0],
[83,104,0,[6,6],6,[71,58,59,6],0],
[88,109,0,[6,6],22,[18,60,55,3],0],
[88,109,0,[6,6],2,[50,58,63,4],0],
[104,125,1,[6,6],8,[48,74,50,2],0],
[100,100,0,[5,5],14,[69,93,85,7],0],
[80,101,0,[1,5],10,[90,79,76,7],0],
[100,121,0,[5,5],21,[2,83,80,5],0],
[82,103,0,[5,5],0,[63,78,79,7],0],
[84,105,0,[5,5],20,[74,70,78,7],0],
[83,104,0,[5,5],7,[77,62,73,6],0],
[86,107,0,[5,5],22,[42,35,79,4],0],
[92,113,1,[5,5],3,[62,41,62,4],0],
[92,113,1,[5,5],15,[58,50,62,3],0],
[98,119,0,[3,7],14,[73,93,82,8],0],
[81,102,0,[3,7],22,[87,75,63,5],0],
[83,104,0,[8,7],3,[70,72,70,5],0],
[86,107,0,[7,7],12,[62,52,68,6],0],
[90,111,0,[7,7],4,[46,70,66,4],0],
[93,114,1,[3,7],18,[20,60,62,5],0],
[93,114,1,[3,7],5,[57,68,50,3],0],
[103,124,0,[16,16],20,[79,81,43,3],0],
[102,123,0,[2,16],2,[79,75,48,3],0],
[103,124,0,[2,16],9,[79,89,48,3],0],
[102,123,0,[3,16],8,[80,77,57,3],0],
[102,123,0,[16,16],2,[72,68,63,3],0],
[100,100,0,[8,8],15,[72,74,71,6],0],
[81,102,0,[9,8],17,[87,72,68,6],0],
[81,102,0,[15,8],10,[83,51,70,6],0],
[87,108,0,[7,9],18,[6,95,53,3],0],
[84,105,0,[8,8],18,[18,73,75,5],0],
[87,108,0,[8,8],22,[51,78,72,5],0],
[98,119,0,[0,8],12,[2,62,71,2],0],
[100,121,0,[7,8],19,[1,91,72,2],0],
[82,103,0,[6,8],13,[90,80,66,3],0],
[105,126,1,[6,8],9,[62,73,55,4],0],
[93,114,1,[8,8],12,[44,68,50,4],0],
[101,122,0,[7,9],19,[80,76,68,4],0],
[103,124,0,[2,9],4,[81,72,70,4],0],
[105,126,1,[8,8],14,[53,48,72,4],0],
[102,123,0,[9,9],15,[81,80,62,4],0],
[92,113,1,[7,7],19,[75,43,72,4],0],
[105,126,1,[13,13],8,[66,52,61,4],0],
[95,116,0,[7,9],2,[76,48,80,4],0],
[96,117,0,[6,9],11,[84,57,79,4],0],
[96,117,0,[1,9],11,[82,53,65,4],0],
[96,117,0,[1,1],0,[80,43,65,4],0],
[108,129,0,[8,8],17,[92,45,92,6],0],
[108,129,0,[11,15],22,[14,86,80,3],0],
[80,101,0,[16,16],14,[62,92,65,6],0],
[82,103,0,[13,8],13,[91,32,50,5],0],
[80,101,0,[8,8],6,[95,42,70,5],0],
[80,101,0,[8,8],3,[95,30,50,4],0],
[105,126,1,[2,2],5,[67,51,50,3],0],
[98,119,0,[0,0],0,[52,77,50,3],0],
[99,120,1,[0,0],0,[45,57,74,1],0],
[95,116,0,[10,10],6,[83,58,40,1],0],
[96,117,0,[4,4],0,[77,44,30,1],0],
[90,111,0,[10,10],14,[77,44,30,1],0],
[96,117,0,[4,4],20,[69,10,25,1],0],
[95,116,0,[10,10],8,[69,10,25,1],0],
[85,106,0,[4,4],13,[69,10,25,1],0],
[108,129,0,[10,10],0,[50,50,50,1],0],
[108,129,0,[12,12],0,[50,50,50,1],0],

];

pmBase.util.arr2obj(
	warriorDataArray,
	["icon","id","gender","types","power","stats","rank"]
);

export default warriorDataArray;