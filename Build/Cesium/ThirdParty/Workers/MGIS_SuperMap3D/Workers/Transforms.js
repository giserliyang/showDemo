var _0x5920b9=_0x16a2;(function(_0x14dad3,_0x36d50d){var _0x56069f=_0x16a2,_0x1300f1=_0x14dad3();while(!![]){try{var _0x1c128d=-parseInt(_0x56069f(0x107))/0x1+parseInt(_0x56069f(0x110))/0x2+parseInt(_0x56069f(0x117))/0x3+-parseInt(_0x56069f(0x11d))/0x4+-parseInt(_0x56069f(0x104))/0x5*(parseInt(_0x56069f(0x10b))/0x6)+parseInt(_0x56069f(0x116))/0x7+parseInt(_0x56069f(0x111))/0x8;if(_0x1c128d===_0x36d50d)break;else _0x1300f1['push'](_0x1300f1['shift']());}catch(_0x458148){_0x1300f1['push'](_0x1300f1['shift']());}}}(_0x1e8a,0x1cd88),importScripts(_0x5920b9(0x11c),'./defaultValue.js','./defined.js',_0x5920b9(0x118),'./Math.js','./Ellipsoid.js',_0x5920b9(0x10a)));function _0x16a2(_0x4a429e,_0x18c438){var _0x1e8aeb=_0x1e8a();return _0x16a2=function(_0x16a209,_0xeb04fc){_0x16a209=_0x16a209-0x101;var _0x2fb762=_0x1e8aeb[_0x16a209];return _0x2fb762;},_0x16a2(_0x4a429e,_0x18c438);}var Transforms={},vectorProductLocalFrame={'up':{'south':_0x5920b9(0x109),'north':_0x5920b9(0x10d),'west':'south','east':_0x5920b9(0x11b)},'down':{'south':_0x5920b9(0x10d),'north':_0x5920b9(0x109),'west':_0x5920b9(0x11b),'east':'south'},'south':{'up':_0x5920b9(0x10d),'down':_0x5920b9(0x109),'west':_0x5920b9(0x11a),'east':'up'},'north':{'up':'east','down':_0x5920b9(0x10d),'west':'up','east':_0x5920b9(0x11a)},'west':{'up':_0x5920b9(0x11b),'down':_0x5920b9(0x113),'north':_0x5920b9(0x11a),'south':'up'},'east':{'up':_0x5920b9(0x113),'down':_0x5920b9(0x11b),'north':'up','south':'down'}},degeneratePositionLocalFrame={'north':[-0x1,0x0,0x0],'east':[0x0,0x1,0x0],'up':[0x0,0x0,0x1],'south':[0x1,0x0,0x0],'west':[0x0,-0x1,0x0],'down':[0x0,0x0,-0x1]},localFrameToFixedFrameCache={},scratchCalculateCartesian={'east':new Cartesian3(),'north':new Cartesian3(),'up':new Cartesian3(),'west':new Cartesian3(),'south':new Cartesian3(),'down':new Cartesian3()},scratchFirstCartesian=new Cartesian3(),scratchSecondCartesian=new Cartesian3(),scratchThirdCartesian=new Cartesian3();Transforms[_0x5920b9(0x119)]=function(_0x422f73,_0x5505ff){var _0x8ca908=_0x5920b9;if(!vectorProductLocalFrame[_0x8ca908(0x115)](_0x422f73)||!vectorProductLocalFrame[_0x422f73][_0x8ca908(0x115)](_0x5505ff))throw new DeveloperError('firstAxis\x20and\x20secondAxis\x20must\x20be\x20east,\x20north,\x20up,\x20west,\x20south\x20or\x20down.');var _0x74cc74=vectorProductLocalFrame[_0x422f73][_0x5505ff],_0x342c68,_0x45f4c9=_0x422f73+_0x5505ff;return defined(localFrameToFixedFrameCache[_0x45f4c9])?_0x342c68=localFrameToFixedFrameCache[_0x45f4c9]:(_0x342c68=function(_0x53eaed,_0x28c4c8,_0x22341f){var _0x48f536=_0x8ca908;if(!defined(_0x53eaed))throw new DeveloperError(_0x48f536(0x10f));!defined(_0x22341f)&&(_0x22341f=new Matrix4());if(Cartesian3[_0x48f536(0x114)](_0x53eaed,Cartesian3['ZERO'],CesiumMath[_0x48f536(0x101)]))Cartesian3['unpack'](degeneratePositionLocalFrame[_0x422f73],0x0,scratchFirstCartesian),Cartesian3[_0x48f536(0x102)](degeneratePositionLocalFrame[_0x5505ff],0x0,scratchSecondCartesian),Cartesian3[_0x48f536(0x102)](degeneratePositionLocalFrame[_0x74cc74],0x0,scratchThirdCartesian);else{if(CesiumMath[_0x48f536(0x114)](_0x53eaed['x'],0x0,CesiumMath[_0x48f536(0x101)])&&CesiumMath[_0x48f536(0x114)](_0x53eaed['y'],0x0,CesiumMath['EPSILON14'])){var _0x10423f=CesiumMath[_0x48f536(0x10e)](_0x53eaed['z']);Cartesian3['unpack'](degeneratePositionLocalFrame[_0x422f73],0x0,scratchFirstCartesian),_0x422f73!==_0x48f536(0x109)&&_0x422f73!==_0x48f536(0x10d)&&Cartesian3[_0x48f536(0x103)](scratchFirstCartesian,_0x10423f,scratchFirstCartesian),Cartesian3['unpack'](degeneratePositionLocalFrame[_0x5505ff],0x0,scratchSecondCartesian),_0x5505ff!==_0x48f536(0x109)&&_0x5505ff!=='west'&&Cartesian3[_0x48f536(0x103)](scratchSecondCartesian,_0x10423f,scratchSecondCartesian),Cartesian3[_0x48f536(0x102)](degeneratePositionLocalFrame[_0x74cc74],0x0,scratchThirdCartesian),_0x74cc74!==_0x48f536(0x109)&&_0x74cc74!=='west'&&Cartesian3['multiplyByScalar'](scratchThirdCartesian,_0x10423f,scratchThirdCartesian);}else{_0x28c4c8=defaultValue(_0x28c4c8,Ellipsoid[_0x48f536(0x105)]),_0x28c4c8[_0x48f536(0x112)](_0x53eaed,scratchCalculateCartesian['up']);var _0x5f2b21=scratchCalculateCartesian['up'],_0x36f7c0=scratchCalculateCartesian['east'];_0x36f7c0['x']=-_0x53eaed['y'],_0x36f7c0['y']=_0x53eaed['x'],_0x36f7c0['z']=0x0,Cartesian3['normalize'](_0x36f7c0,scratchCalculateCartesian[_0x48f536(0x109)]),Cartesian3[_0x48f536(0x106)](_0x5f2b21,_0x36f7c0,scratchCalculateCartesian[_0x48f536(0x11b)]),Cartesian3[_0x48f536(0x103)](scratchCalculateCartesian['up'],-0x1,scratchCalculateCartesian[_0x48f536(0x11a)]),Cartesian3[_0x48f536(0x103)](scratchCalculateCartesian[_0x48f536(0x109)],-0x1,scratchCalculateCartesian[_0x48f536(0x10d)]),Cartesian3[_0x48f536(0x103)](scratchCalculateCartesian[_0x48f536(0x11b)],-0x1,scratchCalculateCartesian[_0x48f536(0x113)]),scratchFirstCartesian=scratchCalculateCartesian[_0x422f73],scratchSecondCartesian=scratchCalculateCartesian[_0x5505ff],scratchThirdCartesian=scratchCalculateCartesian[_0x74cc74];}}return _0x22341f[0x0]=scratchFirstCartesian['x'],_0x22341f[0x1]=scratchFirstCartesian['y'],_0x22341f[0x2]=scratchFirstCartesian['z'],_0x22341f[0x3]=0x0,_0x22341f[0x4]=scratchSecondCartesian['x'],_0x22341f[0x5]=scratchSecondCartesian['y'],_0x22341f[0x6]=scratchSecondCartesian['z'],_0x22341f[0x7]=0x0,_0x22341f[0x8]=scratchThirdCartesian['x'],_0x22341f[0x9]=scratchThirdCartesian['y'],_0x22341f[0xa]=scratchThirdCartesian['z'],_0x22341f[0xb]=0x0,_0x22341f[0xc]=_0x53eaed['x'],_0x22341f[0xd]=_0x53eaed['y'],_0x22341f[0xe]=_0x53eaed['z'],_0x22341f[0xf]=0x1,_0x22341f;},localFrameToFixedFrameCache[_0x45f4c9]=_0x342c68),_0x342c68;},Transforms['eastNorthUpToFixedFrame']=Transforms['localFrameToFixedFrameGenerator'](_0x5920b9(0x109),_0x5920b9(0x11b)),Transforms['northEastDownToFixedFrame']=Transforms[_0x5920b9(0x119)](_0x5920b9(0x11b),_0x5920b9(0x109)),Transforms[_0x5920b9(0x108)]=Transforms['localFrameToFixedFrameGenerator'](_0x5920b9(0x11b),'up'),Transforms[_0x5920b9(0x10c)]=Transforms[_0x5920b9(0x119)](_0x5920b9(0x11b),'west');function _0x1e8a(){var _0xfe9b35=['./Matrix4.js','180QPxqMo','northWestUpToFixedFrame','west','sign','origin\x20is\x20required.','164638ZGPgTP','2439104wMjekv','geodeticSurfaceNormal','south','equalsEpsilon','hasOwnProperty','123998IWexcB','502083EJnIUD','./DeveloperError.js','localFrameToFixedFrameGenerator','down','north','./Cartesian3.js','393204NjdXZR','EPSILON14','unpack','multiplyByScalar','22210glIZYa','WGS84','cross','222569EFwGEx','northUpEastToFixedFrame','east'];_0x1e8a=function(){return _0xfe9b35;};return _0x1e8a();}