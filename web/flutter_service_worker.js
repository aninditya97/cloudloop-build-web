'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5490dd3c7d254ff18ee1caa566f5dd1",
"assets/AssetManifest.bin.json": "921cb1a341a89945f5871aaefd868c3c",
"assets/AssetManifest.json": "18ea92d415c6da8db708769f71885526",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/images/agp_report.png": "4ffb62fc56da3aa976aac54e41c13ecf",
"assets/assets/images/bitmap/not_found.webp": "51fcc6082c275e0f0a04dd479d65ff7f",
"assets/assets/images/cloudloop_logo.png": "80bc4df5bab768efd901aacc5af1e941",
"assets/assets/images/cloudloop_vertical_logo.png": "c64899e28548f40e7cd1c51877a8e240",
"assets/assets/images/curestreamlogo.png": "d9a1d6d99737faadb17a24073f11d531",
"assets/assets/images/date_feature.png": "512eb94251c4acdf2195d3c0c3892b9c",
"assets/assets/images/flags/ad.png": "4b84f7e40338d99e21fb34fd88da5ca9",
"assets/assets/images/flags/ae.png": "8a7a175bc0e9a1172827de07b9a71e84",
"assets/assets/images/flags/af.png": "c62ae9670a849dabbe1b2357994559f4",
"assets/assets/images/flags/ag.png": "0bfee497e9be031f00c03d2083db16d3",
"assets/assets/images/flags/ai.png": "5604b0750854d28e870a7f7bb26d80d4",
"assets/assets/images/flags/al.png": "93737a621ee560f4eff2581e5ead838c",
"assets/assets/images/flags/am.png": "0fa6b2eb6c98a53c6a426f2c38e061e4",
"assets/assets/images/flags/an.png": "a3be92fa1caedca2e2c063cf4bca6dec",
"assets/assets/images/flags/ao.png": "1a57bd0cda7f1dfc1ab3a2809e326ec0",
"assets/assets/images/flags/aq.png": "1a890e13e077579b0247bdd3d63a41dc",
"assets/assets/images/flags/ar.png": "640451e33b7a861f2ef753a57f91d2f9",
"assets/assets/images/flags/as.png": "ec9a8e63fc4f8da65514eeaf49bfd24e",
"assets/assets/images/flags/at.png": "b907b2dbc62e3d5fd094da257f80541b",
"assets/assets/images/flags/au.png": "8fba4c644613b6a01e5bb9aafb6dcc21",
"assets/assets/images/flags/aw.png": "bdc99392e688610714fb2b9774995078",
"assets/assets/images/flags/ax.png": "c506a31be2ed93a189df24edf60f7f76",
"assets/assets/images/flags/az.png": "67dd2e0f61c1c132c25e0630ea146f5d",
"assets/assets/images/flags/ba.png": "1ff348b794d2049900a03398cb83e6f4",
"assets/assets/images/flags/bb.png": "076da5235bd2f053346fcc29ae9ae3ea",
"assets/assets/images/flags/bd.png": "75600e6c25a57c53cb71b169996b6d4b",
"assets/assets/images/flags/be.png": "a80d4382000a659627f9c4461647d749",
"assets/assets/images/flags/bf.png": "66b8ffe22fe473a71c1d16f94c9ddd05",
"assets/assets/images/flags/bg.png": "a5a99f00cc8457e13e16df5243cf95f8",
"assets/assets/images/flags/bh.png": "9820830e0588dc42ad7e3e910e119d54",
"assets/assets/images/flags/bi.png": "8b1a91ca364c1dcced7311449e4beb80",
"assets/assets/images/flags/bj.png": "7e6b735fa8edafeaf7fe2a681a315c2e",
"assets/assets/images/flags/bl.png": "6e743b8e6e57e5cc11f404c47196eba8",
"assets/assets/images/flags/bm.png": "e36f5d002f2e85c66a2ab7c81bf47305",
"assets/assets/images/flags/bn.png": "df7491d1e9bfd8b1cc7d1c8e891b690a",
"assets/assets/images/flags/bo.png": "e84c19a782b6710a6c1b2f8918a223f3",
"assets/assets/images/flags/bq.png": "5e276136a333eb028c57ced6b279415a",
"assets/assets/images/flags/br.png": "51fd055b302e6472f08384ad91b8ee8d",
"assets/assets/images/flags/bs.png": "0f38e9ab4a3f96c48eaafc0faadefbd7",
"assets/assets/images/flags/bt.png": "8864974fa009665af1dddc2896569b01",
"assets/assets/images/flags/bv.png": "efdb3b9257488440444acf9ef66c26eb",
"assets/assets/images/flags/bw.png": "6fe12bff8d1686b0aa46237646c2703c",
"assets/assets/images/flags/by.png": "fc37409f05199751c66407821afdf678",
"assets/assets/images/flags/bz.png": "5e256c549ed5226e56b2e8f9a6786e25",
"assets/assets/images/flags/ca.png": "1f6803147c68582175bf08a14066f00c",
"assets/assets/images/flags/cc.png": "f14c51efedcb76b340d3f4055c903747",
"assets/assets/images/flags/cd.png": "98d88fa15ad06af23c86500b80af1986",
"assets/assets/images/flags/cf.png": "bae446623cfa044e449119ec40ffdf16",
"assets/assets/images/flags/cg.png": "8047323f84d05afb6b0da10b6d1d4cc7",
"assets/assets/images/flags/ch.png": "02162114c24605694148072f1604088f",
"assets/assets/images/flags/ci.png": "10d1e0c46e2550436e92a68b92fd13a2",
"assets/assets/images/flags/ck.png": "930f56f122600282e94b1bf6d175e371",
"assets/assets/images/flags/cl.png": "f211a6d365eaba169406836df3d4971f",
"assets/assets/images/flags/cm.png": "420e3ae7fe91540b0f2fc814ca589211",
"assets/assets/images/flags/cn.png": "a4f2ea62acffe698e492b5914980dbdb",
"assets/assets/images/flags/co.png": "3898ae2b2d3f05dad8143604fa02a4ef",
"assets/assets/images/flags/cr.png": "18b22593847f4ce2c9cd0e6caa498e3a",
"assets/assets/images/flags/cu.png": "156dc5f18e7e20860104b2cb24479b66",
"assets/assets/images/flags/cv.png": "9e90696ba7670c6c94103f3c98e0055d",
"assets/assets/images/flags/cw.png": "be9e7c2e5b0bb97fd563b8b20489ecb5",
"assets/assets/images/flags/cx.png": "28e0395fca8c9ffa54c308afcd759e1f",
"assets/assets/images/flags/cy.png": "cbbe4c85ef0a4872b608793d2e5d6ed3",
"assets/assets/images/flags/cz.png": "2dbf84fd1b1791aed0640076eaf689be",
"assets/assets/images/flags/de.png": "514cbcb93d457e0fa48bdf7ba463c280",
"assets/assets/images/flags/dj.png": "dbf7624c660e631a2c68da88ea6ee758",
"assets/assets/images/flags/dk.png": "2706ae85938c444fe46f60c9fb2a1218",
"assets/assets/images/flags/dm.png": "c556d5a077bb439477c5e01cc434caa4",
"assets/assets/images/flags/do.png": "823d21b12045720916bfff6a1a4e2c19",
"assets/assets/images/flags/dz.png": "fa26ce340915c81744fce4d09722d9c9",
"assets/assets/images/flags/ec.png": "493bf05763b5ae95197bafa6252d87ae",
"assets/assets/images/flags/ee.png": "f33b52b0d18e02cf131f7a6ce3f831d0",
"assets/assets/images/flags/eg.png": "96fd132a3fc3dc1dddeeda5a6a6bfe19",
"assets/assets/images/flags/eh.png": "a3504a9de30b525f4c1ebb96a204e304",
"assets/assets/images/flags/en.png": "2c3af1d7080e6319962db81dd0fdca76",
"assets/assets/images/flags/er.png": "3cd78154da54bcdf02db49b4b5b42f3a",
"assets/assets/images/flags/es.png": "cfb51f27284d3d555c32584ad353085f",
"assets/assets/images/flags/et.png": "251e5208cde9d9e7072410a18c7c3a92",
"assets/assets/images/flags/eu.png": "85cd827ea299353ceba1eb01a3c1c775",
"assets/assets/images/flags/fi.png": "3093d18d6f46e164fd4cb5cecd7c7d27",
"assets/assets/images/flags/fj.png": "157dae284d65af3fc06bd2bd001d1ea0",
"assets/assets/images/flags/fk.png": "9b3d85e3dde1de7a4e3565f555df43e2",
"assets/assets/images/flags/fm.png": "03da88253d7900b4a891ce4a1ba34c11",
"assets/assets/images/flags/fo.png": "6da5da9f1cee3e4f969bc643fe91c52b",
"assets/assets/images/flags/fr.png": "220c3c73a965d20095e2667977e63757",
"assets/assets/images/flags/ga.png": "84a26160b15c1b5fb9f1aaebd06c8ccd",
"assets/assets/images/flags/gb-eng.png": "bc48d3fa781f3e3f869b3e7aa45e373a",
"assets/assets/images/flags/gb-nir.png": "1145a367f729534a52f58f816a2b6ef6",
"assets/assets/images/flags/gb-sct.png": "4419598a890181d37059891c99d741e6",
"assets/assets/images/flags/gb-wls.png": "a6c60c54efcab239342758fb142687fc",
"assets/assets/images/flags/gb.png": "1145a367f729534a52f58f816a2b6ef6",
"assets/assets/images/flags/gd.png": "1f9cefc954275fa99af0240ad0a50509",
"assets/assets/images/flags/ge.png": "82d000efbb8b4403b2d66a6185129736",
"assets/assets/images/flags/gf.png": "5baaaeb5b159ffbd15ec651363d0982f",
"assets/assets/images/flags/gg.png": "4f4feb6552bab022f0cdb45d2ab18511",
"assets/assets/images/flags/gh.png": "f95dfec913863770d88df663659564b4",
"assets/assets/images/flags/gi.png": "66744bc0241e3a0ad0b36ab23260fca3",
"assets/assets/images/flags/gl.png": "b7902b9c293d9080cd45468819f020e5",
"assets/assets/images/flags/gm.png": "fc5921bd59e760f8a2ad8f47dd35ea7d",
"assets/assets/images/flags/gn.png": "081af99bc9436fb144aa7dcb3326e9b4",
"assets/assets/images/flags/gp.png": "220c3c73a965d20095e2667977e63757",
"assets/assets/images/flags/gq.png": "53685e3348b5e6b1ad8fb9b6076b08f2",
"assets/assets/images/flags/gr.png": "15edf3002a048983c5855a934aa63b7b",
"assets/assets/images/flags/gs.png": "be4e3f4caca2c42107465a54e68a379c",
"assets/assets/images/flags/gt.png": "b41f3906d5e391abd0342976d1972277",
"assets/assets/images/flags/gu.png": "a45d1d6426e9c6395e92f3b90b34c07b",
"assets/assets/images/flags/gw.png": "bad812c989fd3f87ad39f8146206ec64",
"assets/assets/images/flags/gy.png": "bbd1c3c9841042f9440b7106239e3cb4",
"assets/assets/images/flags/hk.png": "87a15f9f178eb5fff399455ec59c9003",
"assets/assets/images/flags/hm.png": "2c9090eb98fd2761657d3317c9f5e7d0",
"assets/assets/images/flags/hn.png": "a2c6029e59d2509b1a37bf9e28828ed3",
"assets/assets/images/flags/hr.png": "96c6a3ad2e1d1c78991d93647dfdb73a",
"assets/assets/images/flags/ht.png": "07184cdb484c6237d75f0a8840ec658c",
"assets/assets/images/flags/hu.png": "066705e07ee5170f7f5b957b067e1a40",
"assets/assets/images/flags/id.png": "56eeb33b0523adb15d8ebd749d332122",
"assets/assets/images/flags/ie.png": "f6cc68d91a05f2c16f0e27b2bf959c6a",
"assets/assets/images/flags/il.png": "0a6c7ec7d33bccd84954a921df6cadc6",
"assets/assets/images/flags/im.png": "8e94ac2473c38f605dc4d7a9070b77b7",
"assets/assets/images/flags/in.png": "51bde227c97a62fe86363ebd876309d4",
"assets/assets/images/flags/io.png": "4b42b8f9c77af88be95c8d11520558a4",
"assets/assets/images/flags/iq.png": "c9414470b8613b95654603269dabf700",
"assets/assets/images/flags/ir.png": "eb01837113f3bd6375a8880ab0d84255",
"assets/assets/images/flags/is.png": "e7994ca6a30ab585436d242ddb6d075e",
"assets/assets/images/flags/it.png": "d582ede0bab883e24f9ca3dcca8cc062",
"assets/assets/images/flags/je.png": "585362b3b51a6eecb4a07cc1ed066832",
"assets/assets/images/flags/jm.png": "7735b02358c17c2c56a43ba2b675ffb1",
"assets/assets/images/flags/jo.png": "830f49fd8d4643b155ca5fb1729c7d6c",
"assets/assets/images/flags/jp.png": "980c16a62032467fa68eae8c75025733",
"assets/assets/images/flags/ke.png": "9607270e62ff08952c7e6663e583070a",
"assets/assets/images/flags/kg.png": "a1e6d93346735fea1777e5fdceca1d40",
"assets/assets/images/flags/kh.png": "8fcff1e63dc4c24f924b7a377c632734",
"assets/assets/images/flags/ki.png": "a977b217b1eddb7b0568486b389b4320",
"assets/assets/images/flags/km.png": "16fd26f5781fae639b41df4bed9bd43c",
"assets/assets/images/flags/kn.png": "005b4f2728dee648bb1705171d65759f",
"assets/assets/images/flags/kp.png": "518b4362eced33414922a339fb6495a5",
"assets/assets/images/flags/kr.png": "45db83f77c77f4e47523706e66f71956",
"assets/assets/images/flags/kw.png": "9489df8d38825aa7e0e66f0293fa143b",
"assets/assets/images/flags/ky.png": "973b6c2b9ea8407a2300856306377d32",
"assets/assets/images/flags/kz.png": "46cd9a68fb817d69a63f42a84c8b2243",
"assets/assets/images/flags/la.png": "ebd503d9df45463b41df30864480362a",
"assets/assets/images/flags/lb.png": "b0afc47f6dc9e27e415016219f1b0afd",
"assets/assets/images/flags/lc.png": "d1dfc0c261b2cdcd751518e5ca37297e",
"assets/assets/images/flags/li.png": "dd1e6deb704ca7cd5e0efec9b523769d",
"assets/assets/images/flags/lk.png": "790830c6d44fb5cdb1556ecfa1829ba8",
"assets/assets/images/flags/lr.png": "42877df1bae8c203cd646fbd34ac20a6",
"assets/assets/images/flags/ls.png": "e1fdd7439ff2ced233933d769cb4503e",
"assets/assets/images/flags/lt.png": "e48204fae17f435668f75e8e69b65dad",
"assets/assets/images/flags/lu.png": "5ba749615b40242c0782888788c2e196",
"assets/assets/images/flags/lv.png": "bb3f756c3e09c7e8eff44fe192ed7c96",
"assets/assets/images/flags/ly.png": "9094e37f89b1bd566d73e96bd3d8ca4f",
"assets/assets/images/flags/ma.png": "278d879a3fb42567557efa6db823c17c",
"assets/assets/images/flags/mc.png": "c84cdd7e8bf92a553bb677cfd784b7f2",
"assets/assets/images/flags/md.png": "77cc04cda69db0abbd0743639c258d40",
"assets/assets/images/flags/me.png": "aeb0de456398dd6c7ae6df16c7a2d210",
"assets/assets/images/flags/mf.png": "220c3c73a965d20095e2667977e63757",
"assets/assets/images/flags/mg.png": "9dd263e3675c5607ec62d0e112d843e5",
"assets/assets/images/flags/mh.png": "8014c47b4c6323b8f0919a802298bcca",
"assets/assets/images/flags/mk.png": "aeeced936baab31e5f12ed91aa662a1d",
"assets/assets/images/flags/ml.png": "abbf0f161dae7dc94bdef22357b5f8e3",
"assets/assets/images/flags/mm.png": "acee5a42d4bad8e872598632f47702a7",
"assets/assets/images/flags/mn.png": "762dfaf88f1cf9d89005d10cef4ae910",
"assets/assets/images/flags/mo.png": "c7088d248ef916bd29423b6d198a01c7",
"assets/assets/images/flags/mp.png": "009f43f9816eb331bb046694a50cc1ff",
"assets/assets/images/flags/mq.png": "7546bc29df3d5765196ef82089492474",
"assets/assets/images/flags/mr.png": "91c9fe5439a413d96e240a51aaf620eb",
"assets/assets/images/flags/ms.png": "c0071a41697d04c1e5c2db628a5f9d15",
"assets/assets/images/flags/mt.png": "1b134a10ad100917b5bf97d9b155f28f",
"assets/assets/images/flags/mu.png": "2d2a91cf757ac342ca07539e41ccb866",
"assets/assets/images/flags/mv.png": "06e46b520777d37b4b5860aaea1eba41",
"assets/assets/images/flags/mw.png": "19d72432a36e1c153fc42da33e45159f",
"assets/assets/images/flags/mx.png": "0f77e55b249cda5b54e218b0fc085028",
"assets/assets/images/flags/my.png": "12f39145d7247a7573b16e4793555b6d",
"assets/assets/images/flags/mz.png": "48f1c7b84db16fc9d1cc81a1ace1cfba",
"assets/assets/images/flags/na.png": "3029c88cd4aba0e4dcda49d6766c93c3",
"assets/assets/images/flags/nc.png": "598714dafe3550dc5e0fe118f51115a5",
"assets/assets/images/flags/ne.png": "f785baa8d72f7910b6413bb873b75aa8",
"assets/assets/images/flags/nf.png": "bdf87de5ea8794bdce79beda96cef807",
"assets/assets/images/flags/ng.png": "667b41df81948f24b4e0d2afa1a1fa02",
"assets/assets/images/flags/ni.png": "56be02b0d0d757144c626ca76f43eb2c",
"assets/assets/images/flags/nl.png": "5e276136a333eb028c57ced6b279415a",
"assets/assets/images/flags/no.png": "efdb3b9257488440444acf9ef66c26eb",
"assets/assets/images/flags/np.png": "e4279eb33866d09222a3237d81ab0d70",
"assets/assets/images/flags/nr.png": "16893adb1179ce794c0ee21e614c59a1",
"assets/assets/images/flags/nu.png": "05f6849f2d1606711d81d558b4b9fa7b",
"assets/assets/images/flags/nz.png": "2600dee176df78195c00ada5a11da3b6",
"assets/assets/images/flags/om.png": "061afe4f917eb9d71f816473e3f2cc4e",
"assets/assets/images/flags/pa.png": "e70012ae9737dd27832668f5186e02dd",
"assets/assets/images/flags/pe.png": "fcaa68f3974817711a16da98f53e32e9",
"assets/assets/images/flags/pf.png": "15cdfe93b2d63608dce8314659d7af4c",
"assets/assets/images/flags/pg.png": "5c47917bdf11a945a14755796522f581",
"assets/assets/images/flags/ph.png": "d5022bbfafd29b953b4ace602fc3eb72",
"assets/assets/images/flags/pk.png": "96b9fddd8b249f864e458cec0c9ffa8e",
"assets/assets/images/flags/pl.png": "a6f0bfcebd48d983eb20692ac202ea77",
"assets/assets/images/flags/pm.png": "220c3c73a965d20095e2667977e63757",
"assets/assets/images/flags/pn.png": "5b27cc57299ef23b488984231d5180dc",
"assets/assets/images/flags/pr.png": "8b18645e664f943468e42220cd321aaa",
"assets/assets/images/flags/ps.png": "e77b0016b124d7bf5ee4c2527e825b65",
"assets/assets/images/flags/pt.png": "a6babb14d526f0dc152e8109c21b3d33",
"assets/assets/images/flags/pw.png": "7b1947e729eb177ef5a65a3ff5020000",
"assets/assets/images/flags/py.png": "84d997a529863a5febf183ca87fe2da5",
"assets/assets/images/flags/qa.png": "32d2347120da21e2692cecd0804d863a",
"assets/assets/images/flags/re.png": "220c3c73a965d20095e2667977e63757",
"assets/assets/images/flags/ro.png": "0fc437dacb66db2e99f3b214f6183833",
"assets/assets/images/flags/rs.png": "f5f4ae91872fc9e580a72e586d0ecf06",
"assets/assets/images/flags/ru.png": "27cf9afcfec0c04b8d5de129546b358c",
"assets/assets/images/flags/rw.png": "08ce2197382735a6ad9a4037939005f8",
"assets/assets/images/flags/sa.png": "860694a3df260ced307a90b0d5e6878d",
"assets/assets/images/flags/sb.png": "8714bb370a79cf6edbc95dd74e3b3055",
"assets/assets/images/flags/sc.png": "a336743dbff15e2275dd68d6685fd117",
"assets/assets/images/flags/sd.png": "be31e440634b63d9a4f4004fa6c583b8",
"assets/assets/images/flags/se.png": "4c2ac96b18edd09421eee22fdd1da88b",
"assets/assets/images/flags/sg.png": "da893c34ff41f53e25cb9f1512c7f039",
"assets/assets/images/flags/sh.png": "1145a367f729534a52f58f816a2b6ef6",
"assets/assets/images/flags/si.png": "2bde4c10f5c77ea9cc8f1123fc4f5fbe",
"assets/assets/images/flags/sj.png": "efdb3b9257488440444acf9ef66c26eb",
"assets/assets/images/flags/sk.png": "27115bee65ca4ce7a7da6f8f99b0ec91",
"assets/assets/images/flags/sl.png": "5f8648b3efd5a5f9f8e78129212e05d6",
"assets/assets/images/flags/sm.png": "69fcf6746bb01504119d29321cbdf270",
"assets/assets/images/flags/sn.png": "a012d8fabd77707445ffd867dff43c2b",
"assets/assets/images/flags/so.png": "ff7f9fdaa356b7d25bdf4b9070eff79b",
"assets/assets/images/flags/sr.png": "9e305477abc612adba18d197b5996bd0",
"assets/assets/images/flags/ss.png": "6c70ac3339e9edc1b3911aa30a18701c",
"assets/assets/images/flags/st.png": "0b9334ee3acae00bf25200c87fec6be5",
"assets/assets/images/flags/sv.png": "0ca7d01691ff68b45c7d34d5e54c5afb",
"assets/assets/images/flags/sx.png": "f7b30f832437369138196a02b9fe8b56",
"assets/assets/images/flags/sy.png": "afcd55e3669baeed7ee9e9b526554993",
"assets/assets/images/flags/sz.png": "b78256571f3a34729e5d479f1d2ec150",
"assets/assets/images/flags/tc.png": "e7d72e3c9180661460aef679825924e2",
"assets/assets/images/flags/td.png": "08158e39899df4bd6ccc185caffacd23",
"assets/assets/images/flags/tf.png": "94c749de11bd0c7fa91072d7be57da56",
"assets/assets/images/flags/tg.png": "1b1e6a2c28102945823f99e13094d0ba",
"assets/assets/images/flags/th.png": "cfd86a8c5594a6feb52295bba0790700",
"assets/assets/images/flags/tj.png": "5b99711d44825440ed774e58a3356ce3",
"assets/assets/images/flags/tk.png": "eb748a86bffd9d60bdff6ae49723ef50",
"assets/assets/images/flags/tl.png": "c89439b702f4b93daa6ba1e2188f995c",
"assets/assets/images/flags/tm.png": "3977a849ab599e54c1338660d347a4ee",
"assets/assets/images/flags/tn.png": "152a45a909759a1564d0de899a9560c0",
"assets/assets/images/flags/to.png": "57836418826190bc5286fe886506e655",
"assets/assets/images/flags/tr.png": "051d3797641cbd93373960297e1642c4",
"assets/assets/images/flags/tt.png": "14a1291534d3e788ea16734454b42836",
"assets/assets/images/flags/tv.png": "9de9f036565fcae6d2c779de3d9dd100",
"assets/assets/images/flags/tw.png": "46b921600360f73b0f1596b3ae9db740",
"assets/assets/images/flags/tz.png": "07b296093082631834b2c26be17696ce",
"assets/assets/images/flags/ua.png": "b63b98d132301de4ffef3fa077abe62a",
"assets/assets/images/flags/ug.png": "a07488f9e5de09b3c7bb43523c79d02f",
"assets/assets/images/flags/um.png": "0ac3c99801768b399c8da0c79af5aef4",
"assets/assets/images/flags/us.png": "6736eb8e1596527ba259f45fd536c141",
"assets/assets/images/flags/uy.png": "d67113236b0b30b08ac7076a08f1e999",
"assets/assets/images/flags/uz.png": "44020938dfeaff17ece1221c9c1eeb7f",
"assets/assets/images/flags/va.png": "a5546f48cbc3875081d66a730c425b3e",
"assets/assets/images/flags/vc.png": "5e9c206722d4815e860cae2ad1f6bc57",
"assets/assets/images/flags/ve.png": "bb30514547cbfbcbb8df400f58f34178",
"assets/assets/images/flags/vg.png": "a41aa99364b55bc554ef6345a7a9a2c8",
"assets/assets/images/flags/vi.png": "fc23d97ed2ae8a59750033e6b269d2ee",
"assets/assets/images/flags/vn.png": "5ff173253f93259d60d70ad3b62afb6d",
"assets/assets/images/flags/vu.png": "ebc83c58a122978eaf9a395304623ff1",
"assets/assets/images/flags/wf.png": "e7dff37743d38a357c9c42f281066741",
"assets/assets/images/flags/ws.png": "4cc98d5fc02d65a6bbb288fe7f0254ef",
"assets/assets/images/flags/xk.png": "bd72a77d46f934a3c926a936d3a98b54",
"assets/assets/images/flags/ye.png": "657946e352e3339251769c6d92bf07c5",
"assets/assets/images/flags/yt.png": "220c3c73a965d20095e2667977e63757",
"assets/assets/images/flags/za.png": "59ab5fdc1e791b08d48c70a4303e1dec",
"assets/assets/images/flags/zm.png": "07116c4016398baf591d89b334310681",
"assets/assets/images/flags/zw.png": "ddcba133e6d52664d4cdc467964a6651",
"assets/assets/images/icons/battery_icon.png": "7cc1adf251edc96c15c4f03f4c2800c2",
"assets/assets/images/icons/blood_drop.png": "067f043fad903e1567a5aafde5c17878",
"assets/assets/images/icons/blood_drop_danger.png": "be9f0bd1f7f3b3973787a0aa8590b6f7",
"assets/assets/images/icons/blood_drop_warning.png": "38d0906ba918dcebc218a82c19d66afc",
"assets/assets/images/icons/bread_icon.png": "21f554ffd10e15a58a6005812b040d4b",
"assets/assets/images/icons/double_down_arrow.png": "4e0cb1a36c700d31ee80ac8427b3cd3c",
"assets/assets/images/icons/double_up_arrow.png": "925366785f0c4e6ec1cf776b4a493050",
"assets/assets/images/icons/family_menu_icon.png": "cedfd0b03e99272861ca54ece341d1e7",
"assets/assets/images/icons/flat_arrow.png": "ad4e53fd3731208a118fc0a7a7f8adaa",
"assets/assets/images/icons/food_toast.png": "af012c60e54e6f0365dda8f85c79001d",
"assets/assets/images/icons/forty_five_down_arrow.png": "5d2419984ec773a2257be30d6f1ab2ad",
"assets/assets/images/icons/forty_five_up_arrow.png": "4629e053902e40b7bb366c591a4e5db3",
"assets/assets/images/icons/google_icon.png": "6a5f505f55353af50064481b4a268f92",
"assets/assets/images/icons/home_menu_icon.png": "ef447196ce1f9c237502502960b82db9",
"assets/assets/images/icons/ic_curestream.png": "b0e6ef93cbe16e2bd95718f3c7cae03c",
"assets/assets/images/icons/jar_icon.png": "1e3d664c60840bb5ea5ee59b33280598",
"assets/assets/images/icons/lollipop_icon.png": "79a452b85d7c6becf424be08c5f851bc",
"assets/assets/images/icons/nut_icon.png": "087c550956dd5e7c6132e085c4b818f7",
"assets/assets/images/icons/settings_menu_icon.png": "f114962ab81584f687a0557134c987f1",
"assets/assets/images/icons/single_down_arrow.png": "219d0a1150551205b67164c519a3aa6b",
"assets/assets/images/icons/single_up_arrow.png": "3224a1ffd0420476fc9597c902fb8c95",
"assets/assets/images/icons/status_icon.png": "5f650e11dbb4f24fc2fa49e47f76d2f4",
"assets/assets/images/icons/status_icon2.png": "a5704c1eaa8b759020c90462b8f29e70",
"assets/assets/images/icons/summary_menu_icon.png": "e17988c94a08a93e98ba5af87fb9ae5e",
"assets/assets/images/icons/syringe.png": "8cb8b64d71c2ad9fac04bb2663125752",
"assets/assets/images/illustration/no_connected_family_member.png": "9a92812bb7e68cfa7dd8a2b09ac94823",
"assets/assets/images/illustration/no_user_with_name.png": "5d7f4737121ed917bc98fcbb97969beb",
"assets/assets/images/illustration/search_family_member.png": "9b25f3e5c4a10dde505ecf9bb7a4400a",
"assets/assets/images/illustration/set_up_completed.png": "8a5a1959b89336d59991f92d2570ec50",
"assets/assets/images/illustration/welcome_illustration.png": "77fa579d82237b2a26d5f11e6518bdd8",
"assets/assets/images/illustration/you_have_connected_family.png": "d0fa1657b1c70203fa3a347ce0b843b7",
"assets/assets/images/logo_horizontal.png": "b30f3c1407ffaa93bd495c8c8edb1b52",
"assets/assets/images/logo_only.png": "648bc16b353636c516a3c0e92a742a89",
"assets/assets/images/logo_vertical.png": "a3bb79a77d1d7cd3dc2fa95ef020b087",
"assets/assets/images/pending_invitation.png": "eff1fb228dcfbe16d3e3cadf28985dcf",
"assets/assets/images/profile1.png": "827f93109ac4dedd112c3d57ef9d006c",
"assets/assets/images/profile2.png": "0456034b713995e0885dbc02dd62604d",
"assets/assets/images/profile3.png": "5b92ebb8b4a9ae805b6ff8bd1e1bd03a",
"assets/assets/images/profile4.png": "357d1af1885eb916a0285cd13e87d13d",
"assets/assets/images/profile_pic.png": "d7808aa9f83b72c2ec306a213d588476",
"assets/assets/images/search_device.gif": "cf152bdd591a5f5d5fe951536f0a858f",
"assets/assets/sound/bleep_sound.mp3": "f4d9279db193f6585d9cd53523bf1218",
"assets/assets/sound/low_battery_sound.mp3": "c0346594f35454b03d6cecc58f02e8e0",
"assets/FontManifest.json": "09ea4d9d7ba918ec338e05f07f4baed3",
"assets/fonts/MaterialIcons-Regular.otf": "0cc670574b853ea49c046ef80adf7902",
"assets/NOTICES": "73e38d40fa58d073b43db90f9d128f16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d1193b3f07a4c9f21e2fb8784810b7e7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/favicon.png": "d1193b3f07a4c9f21e2fb8784810b7e7",
"icons/Icon-192.png": "7ec3da63764ced662c87b767536bbfec",
"icons/Icon-512.png": "189b2ee2617db9f5fa5fd239e4042d2e",
"index.html": "fdb6b963a0a9060484ce447fc0877eb3",
"/": "fdb6b963a0a9060484ce447fc0877eb3",
"main.dart.js": "88b3e77c07e145ecdf664cb7a609d4f6",
"manifest.json": "b6d3b62dd1507b25aa842dee1d35e1d7",
"version.json": "4190af4710f243702fcbbf52222de538"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
