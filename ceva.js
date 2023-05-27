var t;
t = parseInt(readline());

while(t--) {
	var v = [];
	var n;

	n = parseInt(readline());

	v = readline();

	var j = 0;
	const mapa = new Map();
	while (j < n - 1) {
		var ceva = v[j] + v[j + 1];
		
		if (mapa.get(ceva) === undefined) {
			mapa.set(ceva, 1);
		} else {
			var cnt;

			cnt = mapa.get(ceva)
			mapa.set(ceva, cnt);
		}

		j++;
	}

	print(mapa.size + '\n');
	mapa.clear();
}