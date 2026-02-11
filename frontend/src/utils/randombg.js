
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

export const getAvatarName = (name) => {
    if (!name) return ""

    return name
        ?.trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}
export const formatDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
}
export const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

export const formatTimeAndDate = (date) => {
    const d = new Date(date);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;

    const formattedDate = [
        d.getFullYear(),
        (d.getMonth() + 1).toString().padStart(2, '0'),
        d.getDate().toString().padStart(2, '0')
    ].join('-');

    const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return `${formattedDate} at ${formattedTime}`;
}
