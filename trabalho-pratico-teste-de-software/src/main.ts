import {Item} from './Item'
import {Processor} from './processor'

function main(){
	let c = 7
	let n = 4

	let itens: Item[] = []
	itens.push(new Item(5,2))
	itens.push(new Item(2,4))
	itens.push(new Item(2,2))
	itens.push(new Item(1,3))


	let proc = new Processor();

	proc.problemaMochilaForcaBrutaGulosa(itens, n, c);


	let itens2: Item[] = []
	itens2.push(new Item(5,2))
	itens2.push(new Item(2,4))
	itens2.push(new Item(2,2))
	itens2.push(new Item(1,3))

	proc.problemaMochilaDinamico(itens2, n, c);


//		String texto1 = "Maven, a Yiddish word meaning accumulator of knowledge, began as an attempt to " +
//				"simplify the build processes in the Jakarta Turbine project. There were several" +
//				" projects, each with their own Ant build files, that were all slightly different." +
//				"JARs were checked into CVS. We wanted a standard way to build the projects, a clear "+
//				"definition of what the project consisted of, an easy way to publish project information" +
//				"and a way to share JARs across several projects. The result is a tool that can now be" +
//				"used for building and managing any Java-based project. We hope that we have created " +
//				"something that will make the day-to-day work of Java developers easier and generally help " +
//				"with the comprehension of any Java-based project.";
//
//		String texto2 = "This post is not about deep learning. But it could be might as well. This is the power of " +
//				"kernels. They are universally applicable in any machine learning algorithm. Why you might" +
//				"ask? I am going to try to answer this question in this article." +
//			        "Go to the profile of Marin Vlastelica Pogančić" +
//			        "Marin Vlastelica Pogančić Jun";

	let texto1 = "Cuppertino";
	let texto2 = "Silicon Valley";

	console.log("\nDistanciamento Recursivo-> "+ proc.distanciaRecursivo(texto1, texto2, texto1.length-1, texto2.length-1));

	console.log("Iteracoes recursivo->"+ proc.it3 );
	console.log("\nDistanciamento Dinamico-> "+ proc.distanciaDinamico(texto1, texto2));

	console.log("Iteracoes dinâmico->"+ proc.it4);
}

main()

console.log('aqui')
