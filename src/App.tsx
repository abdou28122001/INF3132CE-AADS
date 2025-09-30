import React from 'react';

interface ExerciseSection {
  title: string;
  description: string;
  iframePlaceholder: string;
}

const exercises: ExerciseSection[] = [
  {
    title: "Exercice 1 — Recherche du maximum (méthode incrémentale)",
    description: "On parcourt le tableau et on conserve le plus grand élément rencontré.",
    iframePlaceholder: "PASTE-IFRAME-LINK-HERE-(incremental-max)"
  },
  {
    title: "Exercice 1 — Recherche du maximum (diviser pour régner)",
    description: "On divise le tableau en deux, on cherche le max dans chaque partie et on compare.",
    iframePlaceholder: "PASTE-IFRAME-LINK-HERE-(divide-and-conquer)"
  },
  {
    title: "Exercice 2 — Recherche binaire (itérative)",
    description: "On compare à l'élément du milieu puis on cherche dans la moitié appropriée.",
    iframePlaceholder: "PASTE-IFRAME-LINK-HERE-(binary-iterative)"
  },
  {
    title: "Exercice 2 — Recherche binaire (récursive)",
    description: "La fonction s'appelle récursivement sur la moitié gauche ou droite.",
    iframePlaceholder: "PASTE-IFRAME-LINK-HERE-(binary-recursive)"
  },
  {
    title: "Exercice 3 — Tri par insertion",
    description: "On insère progressivement chaque élément à sa place correcte.",
    iframePlaceholder: "PASTE-IFRAME-LINK-HERE-(insertion-sort)"
  },
  {
    title: "Exercice 3 — Tri par fusion",
    description: "On divise le tableau, on trie chaque moitié puis on fusionne les résultats.",
    iframePlaceholder: "PASTE-IFRAME-LINK-HERE-(merge-sort)"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            TP1 — Module Algorithmes et Structures de Données
          </h1>
          <p className="text-blue-100 text-sm md:text-base">
            Visualisation interactive des exercices avec Python Tutor
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {exercises.map((exercise, index) => (
          <section 
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 transition-all duration-200 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              {exercise.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {exercise.description}
            </p>
            
            {/* Iframe container with responsive design */}
            <div className="relative w-full">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                {exercise.iframePlaceholder.startsWith('http') ? (
                  <iframe
                    src={exercise.iframePlaceholder}
                    className="w-full h-96 md:h-[500px] border-0"
                    title={`Visualisation: ${exercise.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-96 md:h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-center px-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-700 mb-2">Python Tutor à venir</h3>
                      <p className="text-sm text-gray-500 max-w-sm">
                        Remplacez <code className="bg-gray-200 px-2 py-1 rounded text-xs font-mono">
                          {exercise.iframePlaceholder}
                        </code> par l'URL de votre visualisation Python Tutor
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Instructions for adding more TPs */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
          <h3 className="font-semibold text-blue-900 mb-2">
            📝 Instructions pour ajouter TP2/TP3
          </h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            Pour ajouter de nouveaux TPs, dupliquez simplement une section dans le tableau <code className="bg-blue-100 px-2 py-1 rounded text-xs">exercises</code> 
            et remplacez le titre, la description et le lien iframe par vos nouvelles visualisations Python Tutor.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;