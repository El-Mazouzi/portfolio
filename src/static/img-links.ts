//cspell:disable

import { log } from 'node_modules/astro/dist/core/logger/core'

const ROOT_URL =
	'https://res.cloudinary.com/riyadh-main-cloud/image/upload/f_webp/q_auto:best/portfolio'

const NEW_ROOT_URL =
	'https://res.cloudinary.com/delz15h3e/image/upload/v1727067665/portfolio'

const imageSources = {
	logo: `${NEW_ROOT_URL}/op2xiwryaoylg9flijmb.jpg`,
	projects: {
		Yassir: {
			logo: `${NEW_ROOT_URL}/Yassir/pzvxn5dbt4s8pntkrjst.png`,
			images: [
				`${NEW_ROOT_URL}/Yassir/zfmm8kpenaloabceelag.png`,
				`${NEW_ROOT_URL}/Yassir/qqo6c0bxnxvjgopufs1i.png`,
				`${NEW_ROOT_URL}/Yassir/yshi6pcn3w9yg1dladau.png`,
				`${NEW_ROOT_URL}/Yassir/tcb1swn8a374nbksgevu.png`,
				`${NEW_ROOT_URL}/Yassir/taszqnpmxxuqylxxquqj.png`,
				`${NEW_ROOT_URL}/Yassir/m6rofwvl2svqrzobpndc.png`,
				`${NEW_ROOT_URL}/Yassir/ytnmqioe5y8dgcaips4k.png`,
				`${NEW_ROOT_URL}/Yassir/ojuhai6sjm9bqaw7tc45.png`,
				`${NEW_ROOT_URL}/Yassir/fas5frjxetlfd9c2v23x.png`,
				`${NEW_ROOT_URL}/Yassir/wsr5yiozi3xautm9tyo5.png`,
				`${NEW_ROOT_URL}/Yassir/v9o4gjwmnbk7chycjtlw.png`,
				`${NEW_ROOT_URL}/Yassir/qdhcu0nlthj8j3kwo9yi.png`,
				`${NEW_ROOT_URL}/Yassir/wjefqsmib3fznekccslm.png`,
				`${NEW_ROOT_URL}/Yassir/moh7xcx1yaiom1nvf5ni.png`,
				`${NEW_ROOT_URL}/Yassir/jmun2tfnbotogyb39ezr.png`,
				`${NEW_ROOT_URL}/Yassir/ymgkhgsis2vw528eqp4w.png`,
				`${NEW_ROOT_URL}/Yassir/ay5wijr8z30bxrl8vhtk.png`,
				// `${NEW_ROOT_URL}/Yassir/g4dayyf0babjysgcnvz5.png`,
				`${NEW_ROOT_URL}/Yassir/dkt5uczg9sdsdfalg0gt.png	`,
				`${NEW_ROOT_URL}/Yassir/gfds1nkzwfec7znxhkkn.png`,
				`${NEW_ROOT_URL}/Yassir/wfcp41l9skdqwlnujv2f.png`,
				`${NEW_ROOT_URL}/Yassir/ccvloa3kzwed6a1miryn.png`,
				`${NEW_ROOT_URL}/Yassir/koehr9bb96sbwiw5wyzr.png`,
				`${NEW_ROOT_URL}/Yassir/evthy0ukuakuzgdt3hua.png`,
			],
		},
		'Hisba-Go': {
			logo: `${NEW_ROOT_URL}/Hisba-Go/zfcgqwyjpyheyzvsmrn5.png`,
			images: [
				`${NEW_ROOT_URL}/Hisba-Go/drs7jeoybdl5qlptug4r.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/n58e7r37bgudb0tsdgte.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/i0z2cabz4n0ycsmlyy0v.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/a01kyneamdbs2ozinrco.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/hbzrqp16eesteqwptuyc.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/bq5aznbccp1apfjcjvpy.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/urgvkmeyzri9l1ychypc.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/edlss2nw9snyzkf7vay7.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/fbnf1w0zfhedr2binh7c.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/jcumxasdnusluvoe46pa.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/dtqhs4lr1qqyiyyrm0jg.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/d5fhnrqzdkrczz9jjfmb.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/dccn0la1zadplptansuy.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/pp4pbxmasfos8khtbcai.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/i43c86lopxsfrlqbp2ec.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/jdjsxdwjhcpjnjnolqqq.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/a880b7hh9don15xx8ev9.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/fcskkjgpelg1ugpsqxlw.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/qvvskhqmfvndqtlvq5vx.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/zuwaobllzsr80xzvznjo.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/rn0gjsfszgetihjoxqmw.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/ehfzv7eshxfb7iy4i0yt.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/epay9b2zwq37nlatiujj.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/yinrsol4twjq0g6ilq5a.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/ncmqaelarxhao4t1valo.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/xvlauzvkq59gos6mjrhy.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/si0pjrwwacr8plnepxh6.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/ixbuzjh5elqxxspw2gmn.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/rddrfyo8lcy5aw3xo3fy.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/qix6nay2npxwwfmyki1y.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/a9wej8ilofuwp41igyna.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/dwwx7qu5z6p7iejl0t1e.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/pu2ql3kkn9jqr6bj4bsv.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/yhvklatqgysadvznglhl.jpg`,
				`${NEW_ROOT_URL}/Hisba-Go/sfvjbf1prohlp7qea1vo.jpg`,
			],
		},
		doctorek: {
			logo: `${NEW_ROOT_URL}/Doctorek/mldgqypums4ngahgrqor.png`,
			images: [
				`${NEW_ROOT_URL}/Doctorek/awlypmjx279crjmbmhhy.png`,
				`${NEW_ROOT_URL}/Doctorek/ybhxoxihucv2dikkazpa.png`,
				`${NEW_ROOT_URL}/Doctorek/bn8g7apg45e88sn77lwq.png`,
				`${NEW_ROOT_URL}/Doctorek/dot7ovbjrvtvvethzafe.png`,
				`${NEW_ROOT_URL}/Doctorek/ctua214mjttn2ksov9nw.png`,
				`${NEW_ROOT_URL}/Doctorek/zrcrytalpbhuzzhi4xdb.png`,
				`${NEW_ROOT_URL}/Doctorek/ihpqjeg9tlc5ofhhzadx.png`,
				`${NEW_ROOT_URL}/Doctorek/wcnj2497j4ypupznoyms.png`,
				`${NEW_ROOT_URL}/Doctorek/llphn3nedjqmvzsfewxu.png`,
				`${NEW_ROOT_URL}/Doctorek/dzzjlhccecu3auy2zy2p.png`,
				`${NEW_ROOT_URL}/Doctorek/opj9vmdbirrk3pnjjeau.png`,
				`${NEW_ROOT_URL}/Doctorek/qstwji00pfjapgfxxgjg.png`,
				`${NEW_ROOT_URL}/Doctorek/ndptqzwngv3mxdcnxr52.png`,
				`${NEW_ROOT_URL}/Doctorek/vhec7hx5tiyatx2ywoex.png`,
				`${NEW_ROOT_URL}/Doctorek/tgzroadegcvkw0z0lsjn.png`,
				`${NEW_ROOT_URL}/Doctorek/ahitfy04ppifyv5y5vcx.png`,
				`${NEW_ROOT_URL}/Doctorek/pq5re8zsqz71tkz6pys7.png`,
				`${NEW_ROOT_URL}/Doctorek/dxzwbm6swfccir3db6iu.png`,
				`${NEW_ROOT_URL}/Doctorek/nffew1ochba0sem5q6hp.png`,
				`${NEW_ROOT_URL}/Doctorek/thpzkqaihl4k0sbsugkc.png`,
				`${NEW_ROOT_URL}/Doctorek/tqzfzpalhbyxfv4r9x0x.png`,
				`${NEW_ROOT_URL}/Doctorek/l96xc6rjli3wgga9olef.png`,
				`${NEW_ROOT_URL}/Doctorek/kmczqskfvuhows7h7dt5.png`,
				`${NEW_ROOT_URL}/Doctorek/ihxstvlszzdtkhklhaok.png`,
				`${NEW_ROOT_URL}/Doctorek/crm3mm6vw9wrwgxyv7qa.png`,
				`${NEW_ROOT_URL}/Doctorek/aboebp1rxx8z7bpwlirl.png`,
				`${NEW_ROOT_URL}/Doctorek/jb4sclvqhf5iqn7enzgg.png`,
				`${NEW_ROOT_URL}/Doctorek/cbvjdierblyxirl9twyp.png`,
				`${NEW_ROOT_URL}/Doctorek/vzljtwhzmevfdz8tkroh.png`,
				`${NEW_ROOT_URL}/Doctorek/btl87vs4ih6eo8go6ycb.png`,
				`${NEW_ROOT_URL}/Doctorek/v64qqcqjbaatooigefzb.png`,
				`${NEW_ROOT_URL}/Doctorek/hpcpwsjxiuvzuonylscy.png`,
				`${NEW_ROOT_URL}/Doctorek/ed8l4xotlsqaea3rnsot.png`,
			],
		},
		'Honest-Inn': {
			logo: `${NEW_ROOT_URL}/Honest-Inn/moekawyyfx5a5usmb6h6.png`,
			images: [
				`${NEW_ROOT_URL}/Honest-Inn/itfg3ndaub2xods3ilmb.png`,
				`${NEW_ROOT_URL}/Honest-Inn/r6f5c4jaystrydmfazec.png`,
				`${NEW_ROOT_URL}/Honest-Inn/ckuipzmqkxharxgajye4.png`,
				`${NEW_ROOT_URL}/Honest-Inn/rt4qtqsm270ernmaiu81.jpg`,
				`${NEW_ROOT_URL}/Honest-Inn/vqo5rrgbqrjq1aoauvin.png`,
				`${NEW_ROOT_URL}/Honest-Inn/j6qxx2k4o4icavok7npr.png`,
				`${NEW_ROOT_URL}/Honest-Inn/jfzn7u0u5ravayvr0xkn.png`,
				`${NEW_ROOT_URL}/Honest-Inn/tbi2eyybimkkvnykxzjj.png`,
			],
		},
		'Hisba-Makhzoun': {
			logo: `${NEW_ROOT_URL}/Hisba-Makhzoun/ewqw5ina5qo7x1ebtcmn.png`,
			images: [
				`${NEW_ROOT_URL}/Hisba-Makhzoun/gwzinnbodwyuqz04ucrz.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/tmpdt9ar2qzm4pth0spp.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/u3fl5w02frmb1uheqn5w.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/bw85qcjj6quqzuxhorfr.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/vktg20gyhl7wug65ic7w.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/atuymfirwfzfjt1ujd3d.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/afelyd7rocclkp7vtdly.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/zvkfkxorunhccrzvfhcs.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/eioywjbqhcaazititntz.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/pwbiganzvbnv3ihecpsw.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/dsbpogoxxhmkwesrxxqg.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/ra5jxcrs7379b4h4j6sc.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/vwvxxxey7qhpvj4fp1fw.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/to1uamd8nt4cnztpjrtz.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/uzqvs98aud3047heyou4.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/rfuxosl0yejwq6aesbvx.jpg`,
				`${NEW_ROOT_URL}/Hisba-Makhzoun/hk3hmis4oi7ebssxcdjq.jpg`,
			],
		},
		'Mbio-Manager': {
			logo: `${NEW_ROOT_URL}/Logistix-Admin/hg1sdse56glv23bsdurt.png`,
			images: [
				`${NEW_ROOT_URL}/Logistix-Admin/fo4raknmsfd0ounqehoh.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/lsfxnmjgyxo4ebhizkty.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/vfrnmegzlq6r3sxpvorz.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/qmeyhooul6plpmzbc7hg.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/yqah1wlgiebbbkrv7cta.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/rqxzxvxr62hltsaitici.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/ai4qgwdrhmahoe9ba8mz.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/f5b8fpjmzaqj3ajbkkbg.png`,
				`${NEW_ROOT_URL}/Logistix-Admin/xp7xhlv2az9hoiypnhjr.jpg`,
				`${NEW_ROOT_URL}/Logistix-Admin/wj9pjbyuqpwkziio9v8q.jpg`,
				// `${NEW_ROOT_URL}/Logistix-Admin/t3udv08rvrjnhbhwogld.png`,
				// `${NEW_ROOT_URL}/Logistix-Admin/hg1sdse56glv23bsdurt.png`,
			],
		},
		'Logistix-Driver': {
			logo: `${NEW_ROOT_URL}/Logistix-Driver/sibgath4ujb6wdquti3l.png`,
			images: [
				`${NEW_ROOT_URL}/Logistix-Driver/kgttjcnbo64zbyp2jgsa.jpg`,
				`${NEW_ROOT_URL}/Logistix-Driver/swgi32ebx1pfuw8gswil.png`,
				`${NEW_ROOT_URL}/Logistix-Driver/b41tjciyih5mffef67zt.png`,
				`${NEW_ROOT_URL}/Logistix-Driver/chrusmmb9bols1moci9r.png`,
				`${NEW_ROOT_URL}/Logistix-Driver/d42gmkql2txpxzho8upn.png`,
				`${NEW_ROOT_URL}/Logistix-Driver/igasovpwfjm2fr74djip.png`,
				// `${NEW_ROOT_URL}/Logistix-Driver/sibgath4ujb6wdquti3l.png`,
				`${NEW_ROOT_URL}/Logistix-Driver/teboiuaoa3i9p10vn4mb.jpg`,
				`${NEW_ROOT_URL}/Logistix-Driver/f52oaafs5q59ox0omsip.png`,
				`${NEW_ROOT_URL}/Logistix-Driver/bdbonoiijlblzq8z0lzb.jpg`,
			],
		},
		'Mbio-Logistic': {
			logo: `${NEW_ROOT_URL}/Mbiologistic-Mobile/k4evib8jyy9hc6dwabza.png`,
			images: [
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/s8h7qfhm0ytyfvf0fphc.jpg`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/fnge8w33xv3nmdz8pwng.jpg`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/gvezroobdfi1qnzy6k4q.png`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/osmfpkceiltkjytz1hpp.png`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/tpwyzvrbmwxdvqipj537.png`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/mptbzmbgjumoq4uu2gir.png`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/sfudrj3stmiwcdkbcxtc.png`,
				// `${NEW_ROOT_URL}/Mbiologistic-Mobile/k4evib8jyy9hc6dwabza.png`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/cju8ozpwpdoxebhdzp8v.png`,
				`${NEW_ROOT_URL}/Mbiologistic-Mobile/wffhvarkc2emhqsjg3av.jpg`,
			],
		},
		'Mantoudj-Bladi': {
			logo: `${NEW_ROOT_URL}/Mantoudj-Bladi/tgv5driai35ejh2wszds.png`,
			images: [
				`${NEW_ROOT_URL}/Mantoudj-Bladi/ep8ili1gxkbexs2wsqva.jpg`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/n0ihagqaettqubuez9yt.jpg`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/sivepsy7osf8sjg4sc0r.jpg`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/dxucck3w9i7dduqohlfz.jpg`,
				// `${NEW_ROOT_URL}/Mantoudj-Bladi/tgv5driai35ejh2wszds.png`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/gqulj2wk41gzyvjbm4i9.jpg`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/yxb39gkpzgecaqipommc.jpg`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/hciit7zvfl8t3pbnhedw.jpg`,
				`${NEW_ROOT_URL}/Mantoudj-Bladi/eackcekhz0jiubyhbheh.jpg`,
			],
		},
		'Hisba-Inventory': {
			logo: `${NEW_ROOT_URL}/Hisba-Invetery/xqvoy9hip04t9mkcy1xt.png`,
			images: [
				`${NEW_ROOT_URL}/Hisba-Invetery/tzikwhqxp0fueegxilcf.jpg`,
				`${NEW_ROOT_URL}/Hisba-Invetery/zv05ptpghxcv35i9jqgh.jpg`,
				`${NEW_ROOT_URL}/Hisba-Invetery/iolqycblg7ajvafwb0ga.jpg`,
				`${NEW_ROOT_URL}/Hisba-Invetery/wijedczbuuxk12dyclcc.jpg`,
			],
		},

		'Online Store': {
			logo: `${NEW_ROOT_URL}/Renault-Trucks-Store/d2qqef6izwt5lmtxfckb.png`,
			images: [
				`${NEW_ROOT_URL}/Renault-Trucks-Store/xo7sp1mboet2agkaa8fv.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/ay5xx1869jm8fg53fwph.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/nmbvzzucdaaut8b1sxka.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/payk4bjnfikllkvtrhen.jpg`,
				// `${NEW_ROOT_URL}/Renault-Trucks-Store/ie4zzcyaebem56pmscrn.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/smcsphd1hwyw5iegbllb.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/clxrixgandkyimqnxf57.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/xognhurjuwdarka4c4go.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/tocrxm3qtd7jimrvuwll.jpg`,
				`${NEW_ROOT_URL}/Renault-Trucks-Store/jkxezmgmr2nyqgut8cvx.jpg`,
			],
		},
	},
}

export default imageSources
