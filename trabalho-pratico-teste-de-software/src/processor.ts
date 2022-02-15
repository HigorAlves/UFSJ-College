	import {Item} from './Item'

	export class Processor {
		public it1 = 0
		public it2 = 0
		public it3 = 0
		public it4 = 0

		public problemaMochilaForcaBrutaGulosa(itens: Item[], n: number, c: number){
			let valuesOnBackPack: number[] = []
			let i: number
			let aux: number
			let todosItens = 0
			let sumValues = 0
			let sumWeight = 0
			let arValues = new Array(2)

			this.it1+= 10

			for (i = 0; i < itens.length - 1; i++){
				this.it1 += 4

				for (let j = 0; j < itens.length - 1; j++){
					this.it1+= 4
					if(itens[j].valor < itens[j + 1].valor){
						this.it1+=4;
						aux = itens[j].valor;
						itens[j].valor = itens[j+1].valor;
						itens[j+1].valor = aux;
						this.it1+=7;
						aux = itens[j].peso;
						itens[j].peso = itens[j+1].peso;
						itens[j+1].peso = aux;
						this.it1+=7;
					}
				}
			}

			while(todosItens < itens.length) {
				this.it1++;
				sumWeight = itens[todosItens].peso;
				sumValues =  itens[todosItens].valor;
				this.it1+=4;

				for(i=0; i<itens.length; i++) {
					this.it1+=4;
					if(i != todosItens ) {
						sumWeight += itens[i].peso;
						this.it1+=4;
						if( sumWeight <= c) {
							sumValues+=itens[i].valor;
							this.it1+=4;
						}else {
							sumWeight-=itens[i].peso;
							this.it1+=3;
						}
					}

				}
				arValues.push();

				sumWeight = 0;
				sumValues = 0;

				todosItens++;

				this.it1+=6;
			}

			let maior = 0;
			this.it1+=2;
			arValues.forEach(value => {
				this.it1+=3;
				if(value > maior) {
					maior = value;
					this.it1++;
				}
			})


			console.log("\nValor Máximo Força Bruta Gulosa -> " + maior);
			console.log("Iteracoes1 -> " + this.it1);

		}

		public problemaMochilaDinamico(itens: Item[], n: number, c: number){
			let maxTab = new Array(2)
			maxTab[0] = new Array(2)
			maxTab[0][0] = [n+1, c+1]
			this.it2+=5;

			for(let i = 0; i<n; i++) {
				maxTab[i] = new Array(2)
				maxTab[i][0] = 0;
				this.it2+=7;
			}

			for (let k = 0; k<c ; k++) {
				maxTab[0][k] = 0;
				this.it2+=7;
			}

			for(let i = 1; i<n ;i++) {
				this.it2+=5;
				for(let j = 1; j<c; j++) {
					this.it2+=5;
					if(itens[i].peso <= j) {
						this.it2+=2;
						maxTab[i][j] = Math.max(maxTab[i-1][j], (itens[i].valor +
							maxTab[i-1][j - itens[i].peso]));
						this.it2+=9;
					}else {
						maxTab[i][j] = maxTab[i-1][j];
						this.it2+=4;
					}
				}

			}


			console.log("\nValor máximo dinâmico -> " + maxTab[n-1][c-1]);
			console.log("Iteracoes2 dinâmico -> " + this.it2);
		}

		public distanciaRecursivo(texto:string, texto2: string, i: number, j: number): any {

			let s,inn,r,min;

			if (texto.length == 0 && texto2.length == 0)
				return 0;
			if (texto.length == 0)
				return j;
			if (texto.length == 0)
				return i;
			if (i == 0)
				return j;
			if (j == 0)
				return i;

			if (texto.charAt(i) == texto2.charAt(j)) {
				this.it3++;
				return this.distanciaRecursivo(texto, texto2, i - 1, j - 1);
			}


			s = this.distanciaRecursivo(texto, texto2, i - 1, j - 1) + 1;
			inn = this.distanciaRecursivo(texto, texto2, i, j - 1) + 1;
			r = this.distanciaRecursivo(texto, texto2, i - 1, j) + 1;
			this.it3+=10;

			min = Math.min(s, (Math.min(inn, r)));


			return min;

		}

		public distanciaDinamico(texto1:string, texto2: string) {
			let m = texto1.length;
			let custoExtra = 0;
			let n = texto2.length;
			let matriz = new Array(m)
			matriz[0] = new Array(n)

			for (let i = 1; i < m; i++) {
				matriz[i] = new Array(m)
				matriz[i][0] = (matriz[i - 1][0] + 1);
				this.it4+=10;
			}

			for (let j = 1; j < n; j++) {
				matriz[0][j] = new Array(n)
				matriz[0][j] = (matriz[0][j - 1] + 1);
				this.it4+=10;
			}

			for (let i = 1; i < m; i++) {
				this.it4+=5;
				for (let j = 1; j < n; j++) {
					this.it4+=5;
					if (texto1.charAt(i) == texto2.charAt(j)) {
						custoExtra = 0;
					} else {
						custoExtra = 1;
					}
					this.it4+=5;
					matriz[i][j] = Math.min((matriz[i - 1][j] + 1),
						Math.min((matriz[i][j - 1] + 1), (matriz[i - 1][j - 1] + custoExtra)));
					this.it4+=15;
				}
			}
			this.it4++;
			return matriz[m - 1][n - 1];
		}
	}
