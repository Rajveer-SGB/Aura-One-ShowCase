import * as React from "react"
import FinishButton from "https://framer.com/m/FinishButton-PN8JUl.js@AMTpdzwYJV6qnEtPGEBr"
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useReducedMotion,
} from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

const editions = [
    {
        name: "Graphite",
        color: "#3b4149",
        edge: "#11151a",
        accent: "#bef264",
        mood: "A little less noise. A lot more you.",
    },
    {
        name: "Pearl",
        color: "#e9e3d7",
        edge: "#8d877d",
        accent: "#f1c889",
        mood: "Pure sound. A softer shade.",
    },
    {
        name: "Sage",
        color: "#8a9d86",
        edge: "#3c5140",
        accent: "#b8dab0",
        mood: "Find your rhythm. Naturally.",
    },
]
const features = [
    {
        title: "Quiet, on your terms.",
        text: "Adaptive noise cancellation tunes out distractions. Tap the earcup to switch to transparency mode.",
        label: "Noise cancellation",
        x: "29%",
        y: "63%",
        number: "01",
    },
    {
        title: "Made for the long play.",
        text: "Soft memory-foam cushions and an adjustable headband keep the fit comfortable, from your first track to your last.",
        label: "All-day comfort",
        x: "51%",
        y: "19%",
        number: "02",
    },
    {
        title: "More listening. Less charging.",
        text: "Up to 40 hours of listening on one charge. A quick 10-minute charge adds another 5 hours.",
        label: "40-hour battery",
        x: "75%",
        y: "67%",
        number: "03",
    },
]
const states = {
    default: { scale: 1 },
    hover: { scale: 1.06 },
    selected: { scale: 1.04 },
}
const timing = { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }

// Native Framer component: Label and Select Finish are verified export properties.
// Use the primary variant until Framer exports the corrected Selected label binding.
function VariantButton({ edition, selected, onClick }: any) {
    return (
        <div
            className={`aura-native-finish ${selected ? "is-selected" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`Select ${edition.name}`}
            aria-pressed={selected}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onClick()
                }
            }}
        >
            <FinishButton
                label={edition.name}
                variant="Variant 1"
                selectFinish={onClick}
                aria-hidden={true}
                style={{
                    width: "100%",
                    height: 44,
                    ...(selected
                        ? {
                              backgroundColor: "#26331D",
                              "--border-color": "#BEF264",
                          }
                        : {}),
                }}
            />
        </div>
    )
}
function Hotspot({ feature, selected, onClick, panelId }: any) {
    return (
        <motion.button
            type="button"
            className="aura-hotspot"
            style={{ left: feature.x, top: feature.y }}
            variants={states}
            animate={selected ? "selected" : "default"}
            whileHover="hover"
            whileTap={{ scale: 0.92 }}
            onClick={onClick}
            aria-label={feature.label}
            aria-expanded={selected}
            aria-controls={panelId}
        >
            {selected ? "−" : "+"}
        </motion.button>
    )
}
function Headphones({ edition, id }: any) {
    return (
        <svg
            viewBox="0 0 600 570"
            className="aura-headphones"
            role="img"
            aria-label={`AURA One headphones in ${edition.name}`}
        >
            <defs>
                <linearGradient id={`${id}-shell`} x1="0" x2="1">
                    <stop stopColor={edition.edge} />
                    <stop offset=".28" stopColor={edition.color} />
                    <stop offset=".62" stopColor={edition.color} />
                    <stop offset="1" stopColor={edition.edge} />
                </linearGradient>
                <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#d5dad7" />
                    <stop offset=".4" stopColor="#6f7774" />
                    <stop offset=".7" stopColor="#c0c6c2" />
                    <stop offset="1" stopColor="#444c49" />
                </linearGradient>
                <linearGradient id={`${id}-pad`}>
                    <stop stopColor="#0d1011" />
                    <stop offset=".55" stopColor="#303436" />
                    <stop offset="1" stopColor="#090b0c" />
                </linearGradient>
                <filter
                    id={`${id}-shadow`}
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feDropShadow
                        dx="0"
                        dy="22"
                        stdDeviation="14"
                        floodOpacity=".35"
                    />
                </filter>
            </defs>
            <g filter={`url(#${id}-shadow)`} transform="rotate(-12 300 280)">
                <path
                    d="M145 320V212C145 22 455 22 455 212V320"
                    fill="none"
                    stroke={edition.edge}
                    strokeWidth="45"
                    strokeLinecap="round"
                />
                <path
                    d="M145 298V212C145 31 455 31 455 212V298"
                    fill="none"
                    stroke={`url(#${id}-shell)`}
                    strokeWidth="32"
                    strokeLinecap="round"
                />
                <path
                    d="M175 203C175 58 425 58 425 203"
                    fill="none"
                    stroke="#202523"
                    strokeWidth="19"
                    strokeLinecap="round"
                />
                <path
                    d="M145 265V366M455 265V366"
                    stroke={`url(#${id}-metal)`}
                    strokeWidth="14"
                    strokeLinecap="round"
                />
                <g transform="rotate(8 169 377)">
                    <rect
                        x="115"
                        y="282"
                        width="103"
                        height="211"
                        rx="50"
                        fill={`url(#${id}-pad)`}
                    />
                    <rect
                        x="106"
                        y="281"
                        width="87"
                        height="207"
                        rx="43"
                        fill={`url(#${id}-shell)`}
                    />
                    <rect
                        x="118"
                        y="294"
                        width="58"
                        height="176"
                        rx="28"
                        fill="none"
                        stroke="white"
                        strokeOpacity=".10"
                    />
                    <path
                        d="M149 326v47m-7-40v33m14-24v14"
                        stroke={edition.accent}
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </g>
                <g transform="rotate(-8 431 377)">
                    <rect
                        x="389"
                        y="282"
                        width="103"
                        height="211"
                        rx="50"
                        fill={`url(#${id}-pad)`}
                    />
                    <rect
                        x="412"
                        y="281"
                        width="87"
                        height="207"
                        rx="43"
                        fill={`url(#${id}-shell)`}
                    />
                    <rect
                        x="429"
                        y="294"
                        width="58"
                        height="176"
                        rx="28"
                        fill="none"
                        stroke="white"
                        strokeOpacity=".12"
                    />
                    <text
                        x="455"
                        y="389"
                        fill={edition.accent}
                        fontFamily="Arial,sans-serif"
                        fontSize="12"
                        letterSpacing="4"
                        textAnchor="middle"
                        transform="rotate(90 455 389)"
                    >
                        AURA
                    </text>
                    <rect
                        x="446"
                        y="460"
                        width="19"
                        height="4"
                        rx="2"
                        fill="#151a17"
                    />
                </g>
            </g>
        </svg>
    )
}

/** @framerSupportedLayoutWidth any */
/** @framerSupportedLayoutHeight auto */
export default function AuraShowcase({
    productName = "AURA One",
    price = "₹12,999",
    ctaLabel = "Explore your edition",
    initialEdition = "Graphite",
    style,
}: any) {
    const [variant, setVariant] = React.useState(
        Math.max(
            0,
            editions.findIndex((v) => v.name === initialEdition)
        )
    )
    const [feature, setFeature] = React.useState<number | null>(0)
    const [summary, setSummary] = React.useState(false)
    const [lightMode, setLightMode] = React.useState(false)
    const closeRef = React.useRef<HTMLButtonElement>(null)
    const ctaRef = React.useRef<HTMLButtonElement>(null)
    const root = React.useRef<HTMLElement>(null)
    const productScrollRef = React.useRef<HTMLDivElement>(null)
    const id = React.useId().replace(/:/g, "")
    const reduced = useReducedMotion()
    // Track the product panel, so scrolling drives the tilt while it is visible on mobile.
    const { scrollYProgress } = useScroll({
        target: productScrollRef,
        offset: ["start end", "end start"],
    })
    const productY = useTransform(
        scrollYProgress,
        [0, 1],
        reduced ? [0, 0] : [35, -45]
    )
    const productRotate = useTransform(
        scrollYProgress,
        [0, 1],
        reduced ? [0, 0] : [-10, 14]
    )
    const edition = editions[variant]
    React.useEffect(() => {
        if (summary) closeRef.current?.focus()
    }, [summary])
    const close = () => {
        setSummary(false)
        requestAnimationFrame(() => ctaRef.current?.focus())
    }
    return (
        <section
            ref={root}
            className="aura-root"
            data-theme={lightMode ? "light" : "dark"}
            style={
                {
                    ...style,
                    "--aura-accent": edition.accent,
                } as React.CSSProperties
            }
            aria-label={`${productName} interactive product showcase`}
        >
            <style>{css}</style>
            <div className="aura-shell">
                <header className="aura-header">
                    <a
                        href={`#${id}-product`}
                        className="aura-logo"
                        aria-label="AURA product"
                    >
                        aura<span>®</span>
                    </a>
                    <span className="aura-header-note">
                        DESIGNED TO DISAPPEAR. BUILT TO FEEL.
                    </span>
                    <div className="aura-header-controls">
                        <span className="aura-pill">
                            <i /> SOUND, REIMAGINED
                        </span>
                        <button
                            type="button"
                            className="aura-theme-toggle"
                            onClick={() => setLightMode(!lightMode)}
                            aria-label={
                                lightMode
                                    ? "Switch to dark mode"
                                    : "Switch to light mode"
                            }
                            aria-pressed={lightMode}
                        >
                            <span aria-hidden="true">
                                {lightMode ? "☾" : "☀"}
                            </span>
                            <span>{lightMode ? "Dark" : "Light"}</span>
                        </button>
                    </div>
                </header>
                <main id={`${id}-product`} className="aura-grid">
                    <motion.div
                        className="aura-copy"
                        initial={reduced ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={timing}
                    >
                        <div className="aura-eyebrow">
                            <span /> WIRELESS OVER-EAR HEADPHONES
                        </div>
                        <h1>
                            Your world.
                            <br />
                            On <em>mute.</em>
                        </h1>
                        <div className="aura-product-name">
                            {productName} <span> / 001</span>
                        </div>
                        <p className="aura-description">
                            Immersive sound. Effortless comfort.
                            <br />A quieter space for whatever moves you.
                        </p>
                        <div className="aura-edition-heading">
                            CHOOSE YOUR FINISH{" "}
                            <span aria-live="polite">{edition.name}</span>
                        </div>
                        <div className="aura-swatches">
                            {editions.map((v, index) => (
                                <VariantButton
                                    key={v.name}
                                    edition={v}
                                    selected={variant === index}
                                    onClick={() => setVariant(index)}
                                />
                            ))}
                        </div>
                        <div className="aura-purchase">
                            <motion.button
                                ref={ctaRef}
                                type="button"
                                className="aura-cta"
                                whileHover={reduced ? {} : { y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSummary(true)}
                            >
                                {ctaLabel}
                                <span>↗</span>
                            </motion.button>
                            <div className="aura-price">
                                {price}
                                <small>Concept product · demo</small>
                            </div>
                        </div>
                        <div className="aura-bottom-note">
                            ↓ SCROLL TO SHIFT YOUR PERSPECTIVE
                        </div>
                    </motion.div>
                    <div ref={productScrollRef} className="aura-stage">
                        <div className="aura-orbit aura-orbit-one" />
                        <div className="aura-orbit aura-orbit-two" />
                        <span className="aura-stage-label">
                            FORM MEETS FREQUENCY
                        </span>
                        <motion.div
                            className="aura-product-wrapper"
                            style={{ y: productY, rotate: productRotate }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={edition.name}
                                    className="aura-product-visual"
                                    initial={{
                                        opacity: 0,
                                        y: reduced ? 0 : 14,
                                        scale: reduced ? 1 : 0.96,
                                    }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: reduced ? 0 : -10 }}
                                    transition={{
                                        duration: reduced ? 0.01 : 0.24,
                                    }}
                                >
                                    <Headphones edition={edition} id={id} />
                                </motion.div>
                            </AnimatePresence>
                            {features.map((f, index) => (
                                <Hotspot
                                    key={f.number}
                                    panelId={`${id}-feature-panel`}
                                    feature={f}
                                    selected={feature === index}
                                    onClick={() =>
                                        setFeature(
                                            feature === index ? null : index
                                        )
                                    }
                                />
                            ))}
                        </motion.div>
                        <div className="aura-stage-footer">
                            <span>
                                0{variant + 1}{" "}
                                <span className="aura-muted">/ 03</span>
                            </span>
                            <span aria-live="polite">{edition.mood}</span>
                            <span className="aura-muted">TAP + TO EXPLORE</span>
                        </div>
                    </div>
                </main>
                <div className="aura-feature-row">
                    <div
                        className="aura-feature-tabs"
                        aria-label="Product features"
                    >
                        {features.map((f, index) => (
                            <button
                                type="button"
                                key={f.number}
                                aria-expanded={feature === index}
                                aria-controls={`${id}-feature-panel`}
                                onClick={() =>
                                    setFeature(feature === index ? null : index)
                                }
                                className={feature === index ? "active" : ""}
                            >
                                <span>{f.number}</span>
                                {f.label}
                                <span className="aura-tab-arrow">↗</span>
                            </button>
                        ))}
                    </div>
                    <div
                        id={`${id}-feature-panel`}
                        className="aura-feature-panel"
                        aria-live="polite"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={feature ?? "empty"}
                                initial={{ opacity: 0, y: reduced ? 0 : 7 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: reduced ? 0.01 : 0.2 }}
                            >
                                <strong>
                                    {feature === null
                                        ? "The details make the difference."
                                        : features[feature].title}
                                </strong>
                                <p>
                                    {feature === null
                                        ? "Select a feature or tap a point on the headphones to take a closer look."
                                        : features[feature].text}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <footer className="aura-footer">
                    <span>A CONCEPT IN SOUND</span>
                    <span>LESS DISTRACTION. MORE CONNECTION.</span>
                    <span>AURA © 2026</span>
                </footer>
            </div>
            <AnimatePresence>
                {summary && (
                    <motion.div
                        className="aura-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={`${id}-dialog-title`}
                            className="aura-modal"
                            initial={{ y: reduced ? 0 : 20 }}
                            animate={{ y: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") close()
                                if (e.key === "Tab") {
                                    e.preventDefault()
                                    closeRef.current?.focus()
                                }
                            }}
                        >
                            <div className="aura-eyebrow">
                                YOUR SELECTED EDITION
                            </div>
                            <h2 id={`${id}-dialog-title`}>
                                {productName}
                                <br />
                                <em>{edition.name}</em>
                            </h2>
                            <p>{edition.mood}</p>
                            <p className="aura-modal-price">{price}</p>
                            <p>
                                This is a fictional product showcase. No order
                                is placed and no payment is collected.
                            </p>
                            <button
                                type="button"
                                ref={closeRef}
                                className="aura-cta"
                                onClick={close}
                            >
                                Keep exploring <span>↗</span>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
addPropertyControls(AuraShowcase, {
    productName: {
        type: ControlType.String,
        title: "Product",
        defaultValue: "AURA One",
    },
    price: {
        type: ControlType.String,
        title: "Price",
        defaultValue: "₹12,999",
    },
    ctaLabel: {
        type: ControlType.String,
        title: "Button",
        defaultValue: "Explore your edition",
    },
    initialEdition: {
        type: ControlType.Enum,
        title: "Finish",
        options: ["Graphite", "Pearl", "Sage"],
        defaultValue: "Graphite",
    },
})
const css = `
.aura-root{width:100%;min-height:1100px;background:#141916;color:#f2f3ec;font-family:Arial,Helvetica,sans-serif;position:relative;isolation:isolate;box-sizing:border-box;scroll-margin-top:20px}.aura-root *{box-sizing:border-box}.aura-root button,.aura-root a{-webkit-tap-highlight-color:transparent}.aura-root button{font:inherit;cursor:pointer}.aura-root button:focus-visible,.aura-root a:focus-visible{outline:3px solid var(--aura-accent);outline-offset:5px}.aura-shell{max-width:1480px;margin:auto;padding:0 56px}.aura-header{height:112px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffffff17;gap:20px}.aura-logo{font-size:42px;font-weight:700;letter-spacing:-4px;color:#f2f3ec;text-decoration:none}.aura-logo span{font-size:12px;vertical-align:top;letter-spacing:0;margin-left:5px}.aura-header-note,.aura-pill,.aura-eyebrow,.aura-bottom-note,.aura-stage-label,.aura-footer,.aura-edition-heading{font-size:10px;letter-spacing:1.7px}.aura-header-note{color:#8e9b92}.aura-pill{border:1px solid #ffffff25;border-radius:30px;padding:12px 15px;font-size:9px;display:flex;align-items:center;gap:8px}.aura-pill i,.aura-eyebrow>span{width:6px;height:6px;background:var(--aura-accent);border-radius:50%;display:inline-block}.aura-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:30px;padding-top:64px;padding-bottom:58px;align-items:center}.aura-eyebrow{color:#aab5ad;display:flex;align-items:center;gap:9px}.aura-copy h1{font-size:clamp(66px,6.7vw,103px);font-weight:500;letter-spacing:-6px;line-height:1.03;margin:30px 0 27px}.aura-copy em,.aura-modal em{font-family:Georgia,serif;font-weight:400;color:var(--aura-accent)}.aura-product-name{font-size:20px;letter-spacing:-.5px}.aura-product-name span{color:#6d7a71;font-size:12px;margin-left:14px;letter-spacing:2px}.aura-description{font-size:15px;line-height:1.8;color:#9aa79e;margin:18px 0 32px}.aura-edition-heading{color:#85958a;display:flex;gap:20px;align-items:center;margin-bottom:14px;font-size:9px}.aura-edition-heading span{color:#e5e9e2;letter-spacing:0;font-size:12px}.aura-swatches{display:flex;gap:8px;flex-wrap:wrap}.aura-native-finish{width:110px;max-width:100%;border-radius:7px;cursor:pointer}.aura-native-finish:focus-visible{outline:3px solid var(--aura-accent);outline-offset:5px}.aura-native-finish.is-selected p{color:#BEF264!important}.aura-swatch{background:transparent;color:#e7eae3;border:1px solid;border-radius:7px;padding:11px 12px;display:flex;align-items:center;gap:8px;font-size:11px!important;min-height:44px}.aura-swatch>span:first-child{height:17px;width:17px;border:1px solid #ffffff25;border-radius:50%}.aura-check{font-size:11px;color:var(--aura-accent)}.aura-purchase{display:flex;align-items:center;gap:22px;margin-top:29px}.aura-cta{border:0;border-radius:7px;background:var(--aura-accent);padding:18px 19px;color:#152010;display:flex;align-items:center;justify-content:space-between;gap:28px;font-size:12px!important;font-weight:600!important;min-height:48px}.aura-cta>span{font-size:19px}.aura-price{font-size:18px;white-space:nowrap}.aura-price small{display:block;margin-top:7px;color:#819086;font-size:9px}.aura-bottom-note{color:#7c8b81;margin-top:43px;font-size:8px}.aura-stage{min-width:0;position:relative;height:590px;border-radius:20px;background:radial-gradient(ellipse at 50% 46%,#334136 0%,#1d2821 48%,#1a231d 75%);overflow:hidden;border:1px solid #ffffff08}.aura-stage-label{position:absolute;top:26px;left:27px;color:#7c8f81;font-size:8px}.aura-orbit{position:absolute;border:1px solid #bed2be13;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);width:85%;aspect-ratio:1}.aura-orbit-two{width:115%}.aura-product-wrapper{position:absolute;inset:30px 4px 45px}.aura-product-visual{height:100%;width:100%}.aura-headphones{width:100%;height:100%;display:block}.aura-hotspot{position:absolute;transform:translate(-50%,-50%);height:44px;width:44px;border:1px solid #ffffff5c;border-radius:50%;background:#172219bc;backdrop-filter:blur(8px);color:var(--aura-accent);font-size:22px!important;box-shadow:0 0 0 6px #ffffff06}.aura-hotspot[aria-expanded=true]{background:var(--aura-accent);color:#142015}.aura-stage-footer{position:absolute;bottom:23px;left:25px;right:25px;display:flex;align-items:center;justify-content:space-between;gap:15px;font-size:9px;color:#c0cec3}.aura-stage-footer>span:first-child{font-size:14px;white-space:nowrap}.aura-stage-footer>span:last-child{font-size:7px;letter-spacing:1px}.aura-muted{color:#6c8072}.aura-feature-row{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #ffffff1a;border-bottom:1px solid #ffffff1a;padding:24px 0;gap:42px}.aura-feature-tabs{display:flex;align-items:center;gap:18px}.aura-feature-tabs button{background:none;border:0;color:#9aaba0;display:flex;flex:1;align-items:center;gap:9px;text-align:left;font-size:11px;line-height:1.5;min-height:60px;padding:8px 0}.aura-feature-tabs button>span:first-child{font-size:9px;color:#53675a;align-self:flex-start;margin-top:10px}.aura-feature-tabs button.active{color:var(--aura-accent)}.aura-tab-arrow{font-size:15px}.aura-feature-panel{min-height:89px}.aura-feature-panel strong{font-size:14px;font-weight:500}.aura-feature-panel p{color:#8a9e90;font-size:12px;line-height:1.7;margin:9px 0 0;max-width:440px}.aura-footer{display:flex;justify-content:space-between;gap:20px;padding:28px 0 85px;color:#5b7262;font-size:8px}.aura-modal-backdrop{position:fixed;inset:0;background:#07100bc9;backdrop-filter:blur(10px);z-index:999;display:grid;place-items:center;padding:24px}.aura-modal{max-width:440px;width:100%;max-height:90vh;overflow:auto;background:#1c2820;border:1px solid #ffffff26;padding:34px;border-radius:20px}.aura-modal h2{font-size:42px;letter-spacing:-2px;margin:22px 0}.aura-modal p{color:#a5b7aa;font-size:13px;line-height:1.8}.aura-modal .aura-modal-price{font-size:25px;color:#e6efe7}.aura-modal .aura-cta{width:100%;margin-top:24px}
.aura-header-controls{display:flex;align-items:center;gap:12px}.aura-theme-toggle{display:flex;align-items:center;justify-content:center;gap:8px;min-height:44px;min-width:78px;border:1px solid #ffffff30;border-radius:30px;padding:10px 14px;background:#202a22;color:#edf2e9;font-size:11px!important}.aura-theme-toggle:hover{border-color:var(--aura-accent)}.aura-theme-toggle>span:first-child{font-size:18px}.aura-root[data-theme=light]{background:#f3f4eb;color:#17281b;--aura-light-accent:#396020}.aura-root[data-theme=light] button:focus-visible,.aura-root[data-theme=light] a:focus-visible,.aura-root[data-theme=light] .aura-native-finish:focus-visible{outline-color:#396020}.aura-root[data-theme=light] .aura-header{border-color:#18301b24}.aura-root[data-theme=light] .aura-logo{color:#17281b}.aura-root[data-theme=light] .aura-copy em,.aura-root[data-theme=light] .aura-modal em{color:#396020}.aura-root[data-theme=light] .aura-header-note,.aura-root[data-theme=light] .aura-description,.aura-root[data-theme=light] .aura-eyebrow,.aura-root[data-theme=light] .aura-edition-heading,.aura-root[data-theme=light] .aura-bottom-note,.aura-root[data-theme=light] .aura-price small{color:#596c5c}.aura-root[data-theme=light] .aura-pill{border-color:#18301b35;color:#425547}.aura-root[data-theme=light] .aura-pill i,.aura-root[data-theme=light] .aura-eyebrow>span{background:#396020}.aura-root[data-theme=light] .aura-edition-heading span,.aura-root[data-theme=light] .aura-product-name span{color:#3c5342}.aura-root[data-theme=light] .aura-cta{background:#2e4e26;color:#fff}.aura-root[data-theme=light] .aura-stage{background:radial-gradient(ellipse at 50% 46%,#e2ead6 0%,#d3dfc8 48%,#c7d6bd 85%);border-color:#17351c18}.aura-root[data-theme=light] .aura-orbit{border-color:#27472e20}.aura-root[data-theme=light] .aura-stage-label,.aura-root[data-theme=light] .aura-stage-footer{color:#395440}.aura-root[data-theme=light] .aura-muted{color:#617b67}.aura-root[data-theme=light] .aura-hotspot{background:#f8fcf3de;color:#2d5027;border-color:#50714980}.aura-root[data-theme=light] .aura-hotspot[aria-expanded=true]{background:#2e4e26;color:white}.aura-root[data-theme=light] .aura-feature-row{border-color:#18301b24}.aura-root[data-theme=light] .aura-feature-tabs button{color:#516456}.aura-root[data-theme=light] .aura-feature-tabs button.active{color:#244b21;font-weight:600}.aura-root[data-theme=light] .aura-feature-tabs button>span:first-child{color:#748676}.aura-root[data-theme=light] .aura-feature-panel p,.aura-root[data-theme=light] .aura-footer{color:#586e5c}.aura-root[data-theme=light] .aura-theme-toggle{background:#e4eadb;border-color:#18301b35;color:#24432b}.aura-root[data-theme=light] .aura-native-finish>div{background-color:#eef1e7!important;--border-color:#93a68b!important}.aura-root[data-theme=light] .aura-native-finish p{color:#233e28!important}.aura-root[data-theme=light] .aura-native-finish:hover>div{--border-color:#365f2a!important}.aura-root[data-theme=light] .aura-native-finish.is-selected>div{background-color:#d5e6c7!important;--border-color:#365f2a!important}.aura-root[data-theme=light] .aura-native-finish.is-selected p{color:#264d20!important}.aura-root[data-theme=light] .aura-modal-backdrop{background:#1d302ba3}.aura-root[data-theme=light] .aura-modal{background:#f3f4eb;border-color:#546f5140;color:#17281b}.aura-root[data-theme=light] .aura-modal p{color:#506753}.aura-root[data-theme=light] .aura-modal .aura-modal-price{color:#193d22}
@media(max-width:700px){.aura-header-controls{gap:8px}.aura-header-controls .aura-pill{display:none}.aura-theme-toggle{min-width:78px}}
@media(min-width:1600px){.aura-copy h1{font-size:103px}}
@media(max-width:1000px){.aura-shell{padding:0 30px}.aura-header-note{display:none}.aura-grid{gap:20px;padding-top:44px}.aura-copy h1{font-size:72px;letter-spacing:-4px}.aura-stage{height:520px}.aura-purchase{gap:14px;flex-wrap:wrap}.aura-stage-footer>span:last-child{display:none}.aura-feature-row{gap:25px}.aura-feature-tabs{gap:12px}}
@media(max-width:700px){.aura-root{min-height:1400px}.aura-shell{padding:0 22px}.aura-header{height:86px}.aura-logo{font-size:35px}.aura-pill{font-size:7px;padding:10px;letter-spacing:1px}.aura-grid{grid-template-columns:1fr;padding-top:35px;gap:34px;padding-bottom:28px}.aura-copy h1{font-size:68px;letter-spacing:-4px;margin:23px 0}.aura-description{margin:15px 0 24px;font-size:14px}.aura-eyebrow{font-size:8px;letter-spacing:1.2px}.aura-bottom-note{margin-top:25px}.aura-stage{height:440px}.aura-stage-footer{left:19px;right:19px;font-size:8px}.aura-feature-row{grid-template-columns:1fr;gap:17px;padding:16px 0 24px}.aura-feature-tabs{gap:15px}.aura-feature-tabs button{font-size:10px}.aura-feature-panel{min-height:92px}.aura-footer{font-size:7px;letter-spacing:1px;padding-bottom:60px}.aura-footer>span:nth-child(2){display:none}}
@media(max-width:360px){.aura-shell{padding:0 16px}.aura-copy h1{font-size:58px}.aura-stage{height:365px}.aura-swatch{padding:9px}.aura-feature-tabs{gap:9px}.aura-stage-footer>span:nth-child(2){max-width:180px;text-align:right}}
@media(prefers-reduced-motion:reduce){.aura-root *{scroll-behavior:auto!important}}
`
