import React from 'react';

interface ExerciseSection {
  title: string;
  description: string;
  enonce?: string;
  travailDemande?: string;
  iframeUrl: string;
}

const exercises: ExerciseSection[] = [
  {
    title: "Exercice 1 — Recherche du maximum (méthode incrémentale)",
    description: "On parcourt le tableau et on conserve le plus grand élément rencontré.",
    enonce: "Implémenter l'algorithme permettant de chercher le maximum dans un tableau de n éléments entiers en utilisant la méthode incrémentale.",
    travailDemande: "Tracer les courbes expérimentales en utilisant : rand() (données aléatoires) et clock() (bibl. time). Comparer avec les coûts théoriques : O(n) et O(n) (Excel).",
    iframeUrl: "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%0Aint%20incremental_max%28int%20t%5B%5D,%20int%20n%29%7B%0A%20%20%20%20int%20max%20%3D%20t%5B0%5D%3B%0A%20%20%20%20for%20%28int%20i%20%3D%201%3B%20i%20%3C%20n%3B%20i%2B%2B%29%0A%20%20%20%20%20%20%20%20if%20%28t%5Bi%5D%20%3E%20max%29%20max%20%3D%20t%5Bi%5D%3B%0A%20%20%20%20return%20max%3B%0A%7D%0A%0Aint%20main%28void%29%7B%0A%20%20%20%20int%20t%5B%5D%20%3D%20%7B3,%209,%201,%207,%204%7D%3B%0A%20%20%20%20int%20n%20%3D%20sizeof%20t%20/%20sizeof%20t%5B0%5D%3B%0A%20%20%20%20int%20m%20%3D%20incremental_max%28t,%20n%29%3B%0A%20%20%20%20printf%28%22max%20%3D%20%25d%5Cn%22,%20m%29%3B%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"
  },
  {
    title: "Exercice 1 — Recherche du maximum (diviser pour régner)",
    description: "On divise le tableau en deux, on cherche le max dans chaque partie et on compare.",
    enonce: "Implémenter l'algorithme permettant de chercher le maximum dans un tableau de n éléments entiers en utilisant la méthode « diviser pour régner ».",
    travailDemande: "Tracer les courbes expérimentales en utilisant : rand() (données aléatoires) et clock() (bibl. time). Comparer avec les coûts théoriques : O(n) et O(n) (Excel).",
    iframeUrl: "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%0Aint%20d_p_r%28int%20t%5B%5D,%20int%20d,%20int%20f%29%7B%0A%20%20%20%20if%20%28d%20%3D%3D%20f%20-%201%29%20return%20t%5Bd%5D%3B%0A%20%20%20%20int%20m%20%3D%20%28d%20%2B%20f%29%20/%202%3B%0A%20%20%20%20int%20a%20%3D%20d_p_r%28t,%20d,%20m%29%3B%0A%20%20%20%20int%20b%20%3D%20d_p_r%28t,%20m,%20f%29%3B%0A%20%20%20%20return%20%28a%20%3E%20b%29%20%3F%20a%20%3A%20b%3B%0A%7D%0A%0Aint%20main%28void%29%7B%0A%20%20%20%20int%20t%5B%5D%20%3D%20%7B3,%209,%201,%207,%204%7D%3B%0A%20%20%20%20int%20m%20%3D%20d_p_r%28t,%200,%205%29%3B%0A%20%20%20%20printf%28%22max%20%3D%20%25d%5Cn%22,%20m%29%3B%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"
  },
  {
    title: "Exercice 2 — Recherche binaire (itérative)",
    description: "On compare à l'élément du milieu puis on cherche dans la moitié appropriée.",
    enonce: "Soient un tableau A[1..n] et une valeur v donnée. Trouver l'indice i dans le tableau sachant que v = A[i]. Si v n'apparaît pas dans le tableau, retourner 0. Si A est trié, on peut utiliser le principe de la recherche binaire : on compare v avec le milieu du tableau et on répète la recherche sur une des moitiés du tableau en éliminant l'autre moitié. Dans cet exercice, on considérera n comme une puissance de 2.",
    travailDemande: "— Donner l'algorithme en version itérative et calculer sont coût. — Implémenter les deux algorithmes en langage C. — Comparer le temps d'exécution avec la complexité théorique respectifs.",
    iframeUrl: "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%0Aint%20Recherche_binaire%28int%20t%5B%5D,%20int%20v,%20int%20n%29%7B%0A%20%20%20%20int%20g%20%3D%200,%20d%20%3D%20n%20-%201%3B%0A%20%20%20%20while%20%28g%20%3C%3D%20d%29%7B%0A%20%20%20%20%20%20%20%20int%20m%20%3D%20%28g%20%2B%20d%29%20/%202%3B%0A%20%20%20%20%20%20%20%20if%20%28t%5Bm%5D%20%3D%3D%20v%29%20return%20m%3B%0A%20%20%20%20%20%20%20%20else%20if%20%28t%5Bm%5D%20%3E%20v%29%20d%20%3D%20m%20-%201%3B%0A%20%20%20%20%20%20%20%20else%20g%20%3D%20m%20%2B%201%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20-1%3B%0A%7D%0A%0Aint%20main%28void%29%7B%0A%20%20%20%20int%20n%20%3D%2010,%20v%20%3D%207,%20tab%5B10%5D%3B%0A%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20n%3B%20i%2B%2B%29%20tab%5Bi%5D%20%3D%20i%3B%0A%20%20%20%20int%20res%20%3D%20Recherche_binaire%28tab,%20v,%20n%29%3B%0A%20%20%20%20if%20%28res%20%3C%200%29%20printf%28%22absent%5Cn%22%29%3B%0A%20%20%20%20else%20printf%28%22trouve%20a%20l'indice%20%25d%5Cn%22,%20res%29%3B%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"
  },
  {
    title: "Exercice 2 — Recherche binaire (récursive)",
    description: "La fonction s'appelle récursivement sur la moitié gauche ou droite.",
    enonce: "Soient un tableau A[1..n] et une valeur v donnée. Trouver l'indice i dans le tableau sachant que v = A[i]. Si v n'apparaît pas dans le tableau, retourner 0. Si A est trié, on peut utiliser le principe de la recherche binaire : on compare v avec le milieu du tableau et on répète la recherche sur une des moitiés du tableau en éliminant l'autre moitié. Dans cet exercice, on considérera n comme une puissance de 2.",
    travailDemande: "— Donner l'algorithme en version récursive et calculer sont coût. — Implémenter les deux algorithmes en langage C. — Comparer le temps d'exécution avec la complexité théorique respectifs.",
    iframeUrl: "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%0Aint%20Recherche_binaire%28int%20T%5B%5D,%20int%20d,%20int%20f,%20int%20v%29%7B%0A%20%20%20%20if%20%28d%20%3E%20f%29%20return%20-1%3B%0A%20%20%20%20int%20m%20%3D%20%28d%20%2B%20f%29%20/%202%3B%0A%20%20%20%20if%20%28T%5Bm%5D%20%3D%3D%20v%29%20return%20m%3B%0A%20%20%20%20else%20if%20%28T%5Bm%5D%20%3E%20v%29%20return%20Recherche_binaire%28T,%20d,%20m%20-%201,%20v%29%3B%0A%20%20%20%20else%20return%20Recherche_binaire%28T,%20m%20%2B%201,%20f,%20v%29%3B%0A%7D%0A%0Aint%20main%28void%29%7B%0A%20%20%20%20int%20tab%5B%5D%20%3D%20%7B0,1,2,3,4,5,6,7,8,9%7D%3B%0A%20%20%20%20int%20v%20%3D%207%3B%0A%20%20%20%20int%20res%20%3D%20Recherche_binaire%28tab,%200,%209,%20v%29%3B%0A%20%20%20%20if%20%28res%20%3C%200%29%20printf%28%22Nop%5Cn%22%29%3B%0A%20%20%20%20else%20printf%28%22la%20valeur%20existe,%20indice%20%3D%20%25d%5Cn%22,%20res%29%3B%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"
  },
  {
    title: "Exercice 3 — Tri par insertion",
    description: "On insère progressivement chaque élément à sa place correcte.",
    enonce: "Tri par insertion : on avance progressivement dans le tableau en laissant derrière un sous tableau déjà trié. Plus précisément, je prends le premier élément du reste du tableau non encore trié et je l'insère au bon endroit dans le sous tableau déjà trié.",
    travailDemande: "— Implanter différents algorithmes de Tri (Tri par insertion et Tri par fusion). — Donner les courbes expérimentales correspondantes aux coûts des différentes versions sur des tableaux de données aléatoires. — Comparer ces courbes avec les courbes des coûts théoriques respectifs O(n²) et O(nlogn) (sous Excel).",
    iframeUrl: "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%0Avoid%20insertion%28int%20a%5B%5D,%20int%20n%29%7B%0A%20%20%20%20for%20%28int%20i%20%3D%201%3B%20i%20%3C%20n%3B%20i%2B%2B%29%7B%0A%20%20%20%20%20%20%20%20int%20key%20%3D%20a%5Bi%5D,%20j%20%3D%20i%20-%201%3B%0A%20%20%20%20%20%20%20%20while%20%28j%20%3E%3D%200%20%26%26%20a%5Bj%5D%20%3E%20key%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20a%5Bj%20%2B%201%5D%20%3D%20a%5Bj%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20j--%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20a%5Bj%20%2B%201%5D%20%3D%20key%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aint%20main%28void%29%7B%0A%20%20%20%20int%20a%5B%5D%20%3D%20%7B5,2,9,1,6,3%7D%3B%0A%20%20%20%20int%20n%20%3D%20sizeof%20a%20/%20sizeof%20a%5B0%5D%3B%0A%20%20%20%20insertion%28a,%20n%29%3B%0A%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20n%3B%20i%2B%2B%29%20printf%28%22%25d%20%22,%20a%5Bi%5D%29%3B%0A%20%20%20%20printf%28%22%5Cn%22%29%3B%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"
  },
  {
    title: "Exercice 3 — Tri par fusion",
    description: "On divise le tableau, on trie chaque moitié puis on fusionne les résultats.",
    enonce: "Tri rapide : on divise le tableau en sous tableaux d'une manière récursive jusqu'à obtenir des tableaux de taille 1, on recombine ensuite les sous tableaux tout en triant jusqu'à obtenir le tableau entier trié.",
    travailDemande: "— Implanter différents algorithmes de Tri (Tri par insertion et Tri par fusion). — Donner les courbes expérimentales correspondantes aux coûts des différentes versions sur des tableaux de données aléatoires. — Comparer ces courbes avec les courbes des coûts théoriques respectifs O(n²) et O(nlogn) (sous Excel).",
    iframeUrl: "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%23include%20%3Cstdlib.h%3E%0A%0Avoid%20merge%28int%20a%5B%5D,%20int%20l,%20int%20m,%20int%20r%29%7B%0A%20%20%20%20int%20n1%20%3D%20m%20-%20l%20%2B%201,%20n2%20%3D%20r%20-%20m%3B%0A%20%20%20%20int%20*L%20%3D%20malloc%28n1*sizeof%28int%29%29,%20*R%20%3D%20malloc%28n2*sizeof%28int%29%29%3B%0A%20%20%20%20for%20%28int%20i%3D0%3Bi%3Cn1%3Bi%2B%2B%29%20L%5Bi%5D%20%3D%20a%5Bl%2Bi%5D%3B%0A%20%20%20%20for%20%28int%20j%3D0%3Bj%3Cn2%3Bj%2B%2B%29%20R%5Bj%5D%20%3D%20a%5Bm%2B1%2Bj%5D%3B%0A%20%20%20%20int%20i%3D0,j%3D0,k%3Dl%3B%0A%20%20%20%20while%20%28i%3Cn1%20%26%26%20j%3Cn2%29%20a%5Bk%2B%2B%5D%20%3D%20%28L%5Bi%5D%20%3C%3D%20R%5Bj%5D%29%20%3F%20L%5Bi%2B%2B%5D%20%3A%20R%5Bj%2B%2B%5D%3B%0A%20%20%20%20while%20%28i%3Cn1%29%20a%5Bk%2B%2B%5D%20%3D%20L%5Bi%2B%2B%5D%3B%0A%20%20%20%20while%20%28j%3Cn2%29%20a%5Bk%2B%2B%5D%20%3D%20R%5Bj%2B%2B%5D%3B%0A%20%20%20%20free%28L%29%3B%20free%28R%29%3B%0A%7D%0Avoid%20mergesort%28int%20a%5B%5D,%20int%20l,%20int%20r%29%7B%0A%20%20%20%20if%20%28l%20%3E%3D%20r%29%20return%3B%0A%20%20%20%20int%20m%20%3D%20%28l%20%2B%20r%29%20/%202%3B%0A%20%20%20%20mergesort%28a,%20l,%20m%29%3B%0A%20%20%20%20mergesort%28a,%20m%20%2B%201,%20r%29%3B%0A%20%20%20%20merge%28a,%20l,%20m,%20r%29%3B%0A%7D%0A%0Aint%20main%28void%29%7B%0A%20%20%20%20int%20a%5B%5D%20%3D%20%7B5,2,9,1,6,3%7D%3B%0A%20%20%20%20int%20n%20%3D%20sizeof%20a%20/%20sizeof%20a%5B0%5D%3B%0A%20%20%20%20mergesort%28a,%200,%20n%20-%201%29%3B%0A%20%20%20%20for%20%28int%20i%3D0%3Bi%3Cn%3Bi%2B%2B%29%20printf%28%22%25d%20%22,%20a%5Bi%5D%29%3B%0A%20%20%20%20printf%28%22%5Cn%22%29%3B%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              TP1 — Algorithmes et Structures de Données Avancés
            </h1>
            <p className="text-indigo-200 text-lg mb-2">
              Séances 1 & 2 — Exercices 1, 2 et 3
            </p>
            <p className="text-indigo-300 text-sm">
              Visualisation interactive des exercices avec Python Tutor
            </p>
          </div>
          
          {/* Institution info */}
          <div className="bg-indigo-800 bg-opacity-50 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-indigo-200 mb-2">
              École Supérieure d'Informatique et du Numérique
            </p>
            <p className="text-xs text-indigo-300">
              COLLEGE OF ENGINEERING & ARCHITECTURE
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {exercises.map((exercise, index) => (
          <section 
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8 transition-all duration-200 hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              {exercise.title}
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                {exercise.description}
              </p>
              
              {exercise.enonce && (
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4 rounded-r-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">📋 Énoncé</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    {exercise.enonce}
                  </p>
                </div>
              )}
              
              {exercise.travailDemande && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">🎯 Travail demandé</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {exercise.travailDemande}
                  </p>
                </div>
              )}
            </div>
            
            {/* Python Tutor iframe container */}
            <div className="relative w-full">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Visualisation Python Tutor - Code C
                  </h4>
                </div>
                <iframe
                  src={exercise.iframeUrl}
                  className="w-full h-96 md:h-[500px] border-0"
                  title={`Visualisation: ${exercise.title}`}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ))}

        {/* Instructions for adding more TPs */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-8 mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-3">
              📚 Extension pour TP2/TP3
            </h3>
            <div className="w-16 h-1 bg-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Ajouter de nouveaux exercices
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pour ajouter TP2/TP3, dupliquez une entrée dans le tableau <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">exercises</code> 
                et remplacez le titre, la description, l'énoncé, le travail demandé et l'URL iframe par vos nouvelles visualisations Python Tutor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Structure modulaire
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Chaque exercice est défini par un objet avec titre, description, énoncé, travail demandé et URL iframe. 
                Cette structure permet une extension facile et maintient la cohérence visuelle.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with instructor info */}
        <footer className="bg-white border-t border-gray-200 rounded-xl p-6 mt-8">
          <div className="text-center">
            <h4 className="font-semibold text-gray-800 mb-3">👨‍🏫 Intervenants</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-600">
              <div>M. BAKHOUYA : <span className="font-mono text-xs">mohamed.bakhouya@uir.ac.ma</span></div>
              <div>A. ELAMRANI : <span className="font-mono text-xs">abderrahmane.elamrani@uir.ac.ma</span></div>
              <div>A. AQACHTOUL : <span className="font-mono text-xs">abderrahmane.aqachtoul@uir.ac.ma</span></div>
              <div>I. EN-NAJJARI : <span className="font-mono text-xs">ikram.en-najjari@uir.ac.ma</span></div>
              <div>S. NOUFEL : <span className="font-mono text-xs">saad.noufel@uir.ac.ma</span></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;