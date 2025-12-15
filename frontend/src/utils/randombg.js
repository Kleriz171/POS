
export function getRandomBg() {
    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-yellow-500",
        "bg-indigo-500",
        "bg-teal-500",
        "bg-orange-500",

        // Blues (very popular)
        "bg-blue-500",
        "bg-blue-600",
        "bg-sky-500",
        "bg-indigo-500",

        // Greens (success / positive)
        "bg-emerald-500",
        "bg-emerald-600",
        "bg-green-500",
        "bg-teal-500",

        // Purples (modern / SaaS)
        "bg-violet-500",
        "bg-purple-500",
        "bg-indigo-600",

        // Warm / accent
        "bg-amber-400",
        "bg-yellow-400",
        "bg-orange-500",

        // Reds (errors / attention)
        "bg-rose-500",
        "bg-red-500",

        // Neutrals (cards / UI)
        "bg-slate-800",
        "bg-slate-700",
        "bg-gray-800",
        "bg-neutral-800"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}
