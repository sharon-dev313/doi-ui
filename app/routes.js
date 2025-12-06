import { index, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/layout.jsx", [
        index("routes/home.jsx"),
        route("doi-token", "routes/doi-token.jsx"),
        route("doi-gold-member", "routes/doi-gold-member.jsx"),
    ]),    
];
