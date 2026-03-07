<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Auditium | AI Website Governance Platform</title>

    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <style>
        /* ================= GLOBAL ================= */

        /* ================= REPORT TOGGLE ================= */



        #loginPopup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(8, 16, 40, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .login-box {
            position: relative;
            background: linear-gradient(135deg, rgba(16, 24, 40, 0.95), rgba(8, 12, 25, 0.98));
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            padding: 50px 40px 40px 40px;
            border-radius: 24px;
            width: 400px;
            text-align: center;
            border: 1px solid rgba(56, 189, 248, 0.4);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.2);
            box-sizing: border-box;
        }

        .login-box .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: transparent;
            border: none;
            color: #94a3b8;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: auto;
            margin: 0;
            box-shadow: none;
        }

        .login-box .close-btn:hover {
            color: #ffffff;
            transform: none;
            box-shadow: none;
            background: transparent;
        }

        .login-box h2 {
            color: #ffffff;
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 10px rgba(56, 189, 248, 0.3);
        }

        .login-box .input-group {
            position: relative;
            margin-bottom: 20px;
        }

        .login-box .input-group i {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #cbd5e1;
            font-size: 16px;
        }

        .login-box input {
            width: 100%;
            padding: 14px 14px 14px 44px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            transition: all 0.3s ease;
            font-size: 15px;
            font-weight: 500;
            box-sizing: border-box;
        }

        .login-box input::placeholder {
            color: #cbd5e1;
            opacity: 1;
        }

        .login-box input:focus {
            outline: none;
            border-color: #38bdf8;
            background: rgba(0, 0, 0, 0.4);
            box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
        }

        .login-box button {
            width: 100%;
            padding: 14px;
            margin-bottom: 15px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(90deg, #38bdf8, #8b5cf6);
            color: #ffffff;
            font-weight: 800;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
        }

        .login-box button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(139, 92, 246, 0.5);
            filter: brightness(1.1);
        }

        .login-box .divider {
            display: flex;
            align-items: center;
            margin: 25px 0;
            color: #64748b;
            font-size: 13px;
            font-weight: 500;
        }

        .login-box .divider::before,
        .login-box .divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
        }

        .login-box .divider span {
            padding: 0 15px;
        }

        .login-box .google-btn {
            background: #ffffff;
            color: #0f172a;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            border: none;
            font-weight: 700;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 0px;
        }

        .login-box .google-btn:hover {
            background: #f8fafc;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
        }

        #profilePopup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(8, 16, 40, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }

        .profile-box {
            position: relative;
            background: linear-gradient(135deg, rgba(16, 24, 40, 0.98), rgba(8, 12, 25, 1));
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            padding: 30px;
            border-radius: 20px;
            width: 380px;
            text-align: center;
            border: 1px solid rgba(56, 189, 248, 0.3);
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.9);
            box-sizing: border-box;
        }

        .profile-avatar-large {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #38bdf8, #8b5cf6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            margin: 0 auto 20px auto;
            position: relative;
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }



        .profile-box .input-wrap {
            text-align: left;
            margin-bottom: 20px;
        }

        .profile-box label {
            display: block;
            color: #94a3b8;
            font-size: 13px;
            margin-bottom: 8px;
            margin-left: 5px;
        }

        .profile-box input {
            width: 100%;
            padding: 14px 18px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: #ffffff;
            font-size: 15px;
            box-sizing: border-box;
        }

        .profile-box .actions {
            display: flex;
            gap: 12px;
            margin-top: 30px;
        }

        .profile-box .btn-cancel {
            flex: 1;
            padding: 14px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: transparent;
            color: #ffffff;
            font-weight: 600;
            cursor: pointer;
        }

        .profile-box .btn-save {
            flex: 1;
            padding: 14px;
            border-radius: 12px;
            border: none;
            background: #ffffff;
            color: #0f172a;
            font-weight: 700;
            cursor: pointer;
        }

        #about {
            padding: 80px 0 80px;
            /* vertical space */
        }

        #about p {
            max-width: 800px;
            margin: 20px auto 0 auto;
            /* center it */

            padding: 0 40px;
            /* space from borders */

            line-height: 1.6;

            font-size: 16px;
            text-align: center;
        }

        .main {
            display: flex;
            flex-direction: column;
            gap: 35px;
        }

        .chart-box {
            transition: all 0.25s ease;
        }

        .chart-box:hover {
            transform: translateY(-4px);
            box-shadow:
                0 20px 40px rgba(0, 0, 0, 0.12),
                0 8px 18px rgba(0, 0, 0, 0.08);
        }

        .chart-box {
            transition: 0.3s;
        }

        .chart-box:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
        }

        .chart-title {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: 0.2px;
            text-align: center;
            margin-bottom: 20px;
        }

        .chart-box {
            flex: 1;
            min-width: 300px;

            background: #020617;

            padding: 30px;

            border-radius: 14px;

            border: 1px solid #334155;

            height: 420px;

            box-shadow:
                0 12px 30px rgba(0, 0, 0, 0.4);

            transition: 0.25s;
        }

        .chart-box:hover {
            transform: translateY(-4px);
            box-shadow:
                0 20px 50px rgba(0, 0, 0, 0.5),
                0 0 20px rgba(56, 189, 248, 0.15);
        }

        .chart-box {
            flex: 1;
            min-width: 300px;

            background: #020617;

            padding: 30px;

            border-radius: 14px;

            border: 1px solid #334155;

            height: 420px;

            box-shadow:
                0 12px 30px rgba(0, 0, 0, 0.4);

            transition: 0.25s;
        }

        .chart-box:hover {
            transform: translateY(-4px);
            box-shadow:
                0 20px 50px rgba(0, 0, 0, 0.5),
                0 0 20px rgba(56, 189, 248, 0.15);
        }

        .download-btn:hover {
            opacity: 0.9;
        }

        .scan-status {
            margin-top: 20px;
            padding: 20px;
            background: #020617;
            border: 1px solid #334155;
            border-radius: 10px;
            text-align: center;
        }

        .scan-text {
            margin-bottom: 10px;
            color: #38bdf8;
            font-weight: 600;
        }

        .scan-bar {
            width: 100%;
            height: 8px;
            background: #111827;
            border-radius: 10px;
            overflow: hidden;
        }

        #scanProgress {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #2563eb, #38bdf8);
            transition: width 0.6s;
        }


        .summary-box {
            margin-top: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
        }

        .findings-box {
            margin-top: 15px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
        }

        .report-toggle {
            margin-top: 15px;
            padding: 12px 20px;
            display: inline-block;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .report-toggle:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        #fullReport {
            margin-top: 20px;
            line-height: 1.7;
        }

        .collapsed {
            display: none;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Outfit', sans-serif;
        }

        body {
            background: #081028;
            color: #e2e8f0;
            line-height: 1.6;
            overflow-x: hidden;
            position: relative;
        }

        .ambient-glow {
            position: absolute;
            width: 800px;
            height: 800px;
            border-radius: 50%;
            filter: blur(140px);
            z-index: -1;
            pointer-events: none;
            opacity: 0.25;
            mix-blend-mode: screen;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
        }

        section {
            padding: 90px 0;
        }

        h1,
        h2,
        h3 {
            margin-bottom: 20px;
        }

        p {

            color: #ffffff;
        }

        /* ================= NAVBAR ================= */

        nav {
            position: sticky;
            top: 0;
            z-index: 1000;

            display: flex;
            justify-content: flex-end;
            align-items: center;

            padding: 15px 5%;
            /* Provide padding to match container 90% */

            background: rgba(8, 16, 40, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }

        .logo {
            font-weight: 700;
            font-size: 30px;
            color: #38bdf8;
            letter-spacing: 0.5px;
            cursor: pointer;
        }

        nav ul {
            display: flex;
            gap: 28px;
        }

        nav ul li {
            list-style: none;
        }

        nav ul li a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 700;
            position: relative;
            transition: color 0.25s ease;
        }

        nav ul li a:hover {
            color: #38bdf8;
        }

        nav ul li a:visited {
            color: #ffffff;
        }

        nav ul li a:visited:hover {
            color: #38bdf8;
        }

        nav ul li a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0%;
            height: 2px;
            background: #38bdf8;
            transition: width 0.3s ease;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        /* ================= HERO ================= */

        .hero {
            text-align: center;
            padding-top: 60px;
            position: relative;
            overflow: visible;
        }

        /* PARTICLE CANVAS */

        #particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.4;
        }

        /* GLOW BACKGROUND */

        .hero-glow {
            position: absolute;
            top: -200px;
            left: 50%;
            transform: translateX(-50%);
            width: 1000px;
            height: 700px;

            background: radial-gradient(circle at center,
                    rgba(56, 189, 248, 0.5),
                    rgba(139, 92, 246, 0.4),
                    transparent 70%);

            filter: blur(120px);

            animation: heroGlowMove 12s ease-in-out infinite alternate;

            z-index: 0;
        }

        @keyframes heroGlowMove {

            0% {
                transform: translateX(-50%) translateY(0px) scale(1);
            }

            50% {
                transform: translateX(-50%) translateY(40px) scale(1.05);
            }

            100% {
                transform: translateX(-50%) translateY(-40px) scale(1.1);
            }

        }

        /* HERO TEXT */

        .hero h1 {
            font-size: 64px;
            font-weight: 800;
            letter-spacing: -1px;
            line-height: 1.1;
            margin-bottom: 25px;

            background: linear-gradient(135deg, #ffffff 20%, #93c5fd 60%, #a855f7 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;

            position: relative;
            z-index: 2;
        }

        .hero p {
            max-width: 750px;
            margin: auto;
            margin-bottom: 30px;

            font-size: 22px;
            /* bigger text */
            line-height: 1.7;

            color: #ffffff;
            /* keep text white */
        }

        .btn {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            padding: 16px 36px;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            font-size: 18px;
            display: inline-block;
            position: relative;
            z-index: 2;
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2);
            transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 15px 35px rgba(139, 92, 246, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.3);
        }

        /* ================= FEATURES ================= */

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-top: 40px;
        }

        .card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            padding: 30px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card:hover {
            transform: translateY(-6px);
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(56, 189, 248, 0.5);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.2);
        }

        .card h3 {
            color: #38bdf8;
            margin-bottom: 10px;
        }

        /* ================= AUDIT SECTION ================= */

        .audit-section {
            background: #081028;
            /* Match body blue */
            padding: 100px 0;
            position: relative;
            overflow: hidden;
        }

        .audit-glow {
            position: absolute;
            bottom: -250px;
            left: 50%;
            transform: translateX(-50%);
            width: 1000px;
            height: 700px;

            background: radial-gradient(circle at center,
                    rgba(139, 92, 246, 0.4),
                    rgba(56, 189, 248, 0.25),
                    transparent 75%);

            filter: blur(120px);
            z-index: 0;
            pointer-events: none;
            animation: auditGlowPulse 15s ease-in-out infinite alternate;
        }

        @keyframes auditGlowPulse {
            0% {
                transform: scale(1);
                opacity: 0.6;
            }

            100% {
                transform: scale(1.15);
                opacity: 0.8;
            }
        }

        .audit-section h2 {
            font-size: 48px;
            font-weight: 800;
            letter-spacing: -0.5px;
            margin-bottom: 40px;
            background: linear-gradient(135deg, #ffffff 20%, #93c5fd 60%, #a855f7 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            z-index: 2;
        }

        .dashboard-glass {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(255, 255, 255, 0.02));
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border-radius: 40px;
            padding: 80px;
            border: 1px solid rgba(139, 92, 246, 0.3);
            /* Purple highlighted border */
            box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.7),
                inset 0 0 20px rgba(139, 92, 246, 0.1);
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            text-align: center;
        }

        .dashboard-glass h2 {
            margin-bottom: 50px !important;
        }

        .form-section {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 50px;
        }


        .form-section input {
            padding: 16px 20px;
            width: 380px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            background: rgba(255, 255, 255, 0.03);
            color: #ffffff;

            font-weight: 500;
            transition: all 0.3s ease;
        }

        .form-section input::placeholder {
            color: #ffffff;
            opacity: 0.6;
        }

        .form-section input:focus {
            outline: none;
            border-color: #8b5cf6;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }

        button {
            padding: 14px 28px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            background: linear-gradient(90deg, #487ff7, #38bdf8);
            color: white;
            font-weight: 600;
            cursor: pointer;
        }

        button:hover {
            opacity: 0.9;
        }

        /* ================= MODULES ================= */

        .modules {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;

            margin-top: 20px;
            margin-bottom: 50px;
            /* more space before cards */
        }

        .modules input {
            display: none;
        }

        .pill {
            padding: 12px 24px;
            border-radius: 12px;

            background: rgba(255, 255, 255, 0.03);
            color: #cbd5e1;

            font-weight: 600;

            border: 1.5px solid rgba(255, 255, 255, 0.15);

            cursor: pointer;
            transition: all 0.3s ease;

            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .pill:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
        }

        .modules input:checked+.pill {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            color: white;
            border-color: transparent;
            box-shadow: 0 6px 15px rgba(139, 92, 246, 0.4);
        }

        /* ================= SUMMARY ================= */

        .summary-cards {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 50px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .summary-cards .card {
            min-width: 220px;
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1.5px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .summary-cards h2 {
            color: #38bdf8;
            font-size: 36px;
            margin-top: 10px;
        }

        .summary-cards span {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #94a3b8;
            font-weight: 700;
        }

        /* ================= CHARTS ================= */


        .dashboard-divider {
            height: 1px;
            background: #1e293b;
            margin: 40px 0;
        }

        .charts {
            display: grid;

            grid-template-columns: repeat(2, 1fr);

            gap: 30px;
            /* matched the gap of summary-cards */

            margin-top: 40px;

            width: 100%;
            max-width: 1200px;
        }

        .chart-box {
            flex: 1;
            background: #ffffff;
            padding: 50px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            height: 400px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chart-box:hover {
            transform: translateY(-6px);
            border: 1px solid rgba(56, 189, 248, 0.5);
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3), 0 0 20px rgba(56, 189, 248, 0.1);
        }

        #report {
            margin-top: 50px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(16px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* ================= FOOTER ================= */

        footer {
            background: #020617;
            text-align: center;
            padding: 40px 0 40px 200px;
            color: #64748b;
            margin-top: 60px;
        }

        /* ================= SCROLL REVEAL ================= */

        .reveal {
            opacity: 0;
            transform: translateY(60px);
            transition: all 0.8s ease;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }



        /* SIDEBAR */

        .sidebar {
            width: 220px;
            background: rgba(8, 16, 40, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 15px 20px 30px 20px;



            /* Fixed to viewport instead of sticky inside a container */
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 1000;
            overflow-y: auto;

            display: flex;
            flex-direction: column;
        }

        .sidebar-logo {
            font-size: 42px;
            font-weight: 800;
            color: #38bdf8;
            margin-bottom: 30px;
            cursor: pointer;
        }

        .sidebar ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            flex: 1;
            /* Allow the list to take remaining height */
        }

        .sidebar>ul>li:last-child {
            margin-top: auto;
            margin-bottom: 0;
            /* Pushes the settings group to the bottom */
        }

        .sidebar li {
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 8px;
            cursor: pointer;

            color: #cbd5f5;

            transition: 0.2s;
        }

        .sidebar li:hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateX(4px);
        }

        /* NESTED DROPDOWNS */
        .sidebar .nav-group {
            padding: 0 !important;
            background: transparent !important;
            transform: none !important;
            margin-bottom: 10px;
            cursor: default;
        }

        .sidebar .nav-group:hover {
            background: transparent !important;
            transform: none !important;
        }

        .sidebar .nav-item-header {
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s;
        }

        .sidebar .nav-item-header:hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateX(4px);
        }

        .sidebar .nav-submenu {
            padding-left: 0 !important;
            margin-top: 4px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .sidebar .nav-submenu li {
            margin-bottom: 0 !important;
            padding-left: 42px !important;
            background: rgba(0, 0, 0, 0.15);
        }

        .sidebar .user-info {
            cursor: default;
            padding: 0;
            margin-bottom: 10px;
            pointer-events: none;
        }

        .sidebar .user-info:hover {
            background: transparent;
            transform: none;
        }

        .sidebar .user-profile-card {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            width: 100%;
            box-sizing: border-box;
            pointer-events: auto;
            /* Re-enable pointer logic internally */
        }

        .sidebar .user-avatar {
            width: 38px;
            height: 38px;
            background: linear-gradient(135deg, #38bdf8, #8b5cf6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            flex-shrink: 0;
            box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
        }

        .sidebar .user-details {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            text-align: left;
        }

        .sidebar .user-name {
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 2px;
        }

        .sidebar .user-email {
            color: #94a3b8;
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sidebar .active {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            color: white;
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }

        /* MAIN CONTENT */

        .main-wrapper {
            /* Offset the main wrapper by the sidebar's width */
            margin-left: 220px;
            width: calc(100% - 220px);
        }

        .main {
            padding: 40px;

            max-width: 1300px;
            /* wider main content area */
            margin: auto;
            /* centers content */
        }

        .main h2 {
            margin-bottom: 30px;
        }

        /* DASHBOARD CARDS */
        .summary-cards {

            display: grid;

            grid-template-columns: repeat(3, 1fr);

            gap: 30px;

            max-width: 1200px;

            margin: 0 auto 40px auto;

        }

        .summary-cards .card {
            flex: 1;
            text-align: center;

            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15);

            padding: 30px;
            border-radius: 16px;

            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .summary-cards .card:hover {
            transform: translateY(-6px);
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(139, 92, 246, 0.5);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.2);
        }


        #about h2 {
            font-size: 38px;
            font-weight: 800;
            margin-bottom: 25px;
        }

        #about p {
            max-width: 800px;
            margin: 30px auto 0 auto;
            line-height: 1.8;
            font-size: 20px;
            font-weight: 600;
        }

        /* ================= LIGHT MODE ================= */
        body.light-mode {
            background: #f8fafc;
            color: #0f172a;
        }

        body.light-mode p {
            color: #334155;
        }

        body.light-mode nav {
            background: rgba(255, 255, 255, 0.85);
        }

        body.light-mode nav ul li a {
            color: #0f172a;
        }

        body.light-mode nav ul li a:hover {
            color: #2563eb;
        }

        body.light-mode .hero h1 {
            -webkit-text-fill-color: #0f172a;
        }

        body.light-mode .hero-glow {
            background: radial-gradient(circle at center,
                    rgba(56, 189, 248, 0.8),
                    rgba(139, 92, 246, 0.8),
                    transparent 70%);
            mix-blend-mode: multiply;
        }

        body.light-mode .hero p,
        body.light-mode #about p {
            color: #334155;
        }

        body.light-mode .card,
        body.light-mode .audit-box,
        body.light-mode .summary-cards .card {
            background: #ffffff;
            border: 1.5px solid #3b82f6;
            /* Highlighted blue border in light mode */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        body.light-mode .card:hover,
        body.light-mode .summary-cards .card:hover {
            background: #f8fafc;
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        body.light-mode .card h3,
        body.light-mode .summary-cards h2 {
            color: #2563eb;
        }

        body.light-mode .summary-cards .card span {
            color: #0f172a;
            font-weight: 600;
        }

        body.light-mode .sidebar {
            background: rgba(255, 255, 255, 0.85);
        }

        body.light-mode .sidebar li {
            color: #0f172a;
            font-weight: 500;
        }

        body.light-mode .sidebar li:hover,
        body.light-mode .sidebar .nav-item-header:hover {
            background: #e2e8f0;
            color: #0f172a;
        }

        body.light-mode .sidebar .nav-submenu li {
            background: rgba(0, 0, 0, 0.04);
        }

        body.light-mode .sidebar .user-profile-card {
            background: rgba(0, 0, 0, 0.03);
            border-color: rgba(0, 0, 0, 0.05);
        }

        body.light-mode .sidebar .user-name {
            color: #0f172a;
        }

        body.light-mode .sidebar .user-email {
            color: #64748b;
        }

        body.light-mode .sidebar .active {
            background: #2563eb;
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        body.light-mode .sidebar .active:hover {
            background: #2563eb;
            color: #ffffff;
        }

        body.light-mode .form-section input,
        body.light-mode .report-toggle,
        body.light-mode #report {
            background: #ffffff;
            border-color: #cbd5e1;
            color: #0f172a;
        }

        body.light-mode .form-section input {
            color: #0f172a;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        body.light-mode .form-section input:focus {
            background: #ffffff;
            border-color: #60a5fa;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        body.light-mode .form-section input::placeholder {
            color: #0f172a;
        }

        body.light-mode .dashboard-glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid #e2e8f0;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        body.light-mode .audit-section h2 {
            -webkit-text-fill-color: #0f172a;
        }

        body.light-mode .audit-glow {
            display: block;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            bottom: -150px;
            background: radial-gradient(circle at center,
                    rgba(139, 92, 246, 0.15),
                    rgba(56, 189, 248, 0.1),
                    transparent 75%);
        }

        body.light-mode .audit-section,
        body.light-mode footer {
            background: #f1f5f9;
        }

        body.light-mode .summary-box,
        body.light-mode .findings-box {
            background: #ffffff;
            border-color: #cbd5e1;
            color: #0f172a;
        }

        body.light-mode .pill {
            background: #ffffff;
            border: 1.5px solid #3b82f6;
            color: #0f172a;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        body.light-mode .pill:hover {
            background: #f8fafc;
            color: #2563eb;
            border-color: #cbd5e1;
        }

        body.light-mode .modules input:checked+.pill {
            background: #2563eb;
            border-color: #2563eb;
            color: white;
        }

        body.light-mode #authBtn.auth-logout {
            color: #dc2626 !important;
        }

        body.light-mode .ambient-glow {
            opacity: 0.9;
            /* Intensified for Light Mode */
            mix-blend-mode: multiply;
            /* Better for light backgrounds */
        }
    </style>

</head>

<body class="light-mode">
    <!-- Ambient Background Glows -->
    <div class="ambient-glow"
        style="top: 5%; right: -10%; background: radial-gradient(circle, rgba(168, 96, 226, 0.8), transparent 70%);">
    </div>
    <div class="ambient-glow"
        style="top: 25%; left: -5%; background: radial-gradient(circle, rgba(56, 189, 248, 0.6), transparent 70%);">
    </div>
    <div class="ambient-glow"
        style="top: 50%; right: -15%; background: radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(56, 189, 248, 0.4), transparent 70%);">
    </div>
    <div class="ambient-glow"
        style="bottom: 20%; left: -10%; background: radial-gradient(circle, rgba(139, 92, 246, 0.7), transparent 70%);">
    </div>
    <div class="ambient-glow"
        style="bottom: -5%; right: -5%; background: radial-gradient(circle, rgba(56, 189, 248, 0.65), transparent 70%);">
    </div>

    <!-- SIDEBAR (Moved out globally) -->
    <div class="sidebar">

        <div class="sidebar-logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Auditium</div>

        <ul>
            <li class="active" onclick="document.getElementById('audit').scrollIntoView({behavior: 'smooth'})"><i
                    class="fa-solid fa-chart-bar"></i> Dashboard</li>
            <li onclick="document.getElementById('report').scrollIntoView({behavior: 'smooth'})"><i
                    class="fa-solid fa-file-lines"></i> Reports</li>
            <li id="settingsContainer" class="nav-group">
                <div class="nav-item-header" onclick="toggleSettingsMenu(event)"><i class="fa-solid fa-gear"></i>
                    Settings ▼</div>
                <ul id="settingsMenu" class="nav-submenu" style="display: none;">
                    <li id="themeToggleBtn" onclick="toggleExplicitTheme()"><i class="fa-solid fa-moon"></i> Dark Mode
                    </li>
                </ul>
            </li>
            <li id="userInfo" class="user-info" style="display: none;"></li>
            <li id="authBtn"></li>
        </ul>

    </div>

    <!-- MAIN WRAPPER FOR EVERYTHING ELSE -->
    <div class="main-wrapper">

        <nav>

            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#why">Why Auditium</a></li>
                <li><a href="#audit">Run Audit</a></li>
                <li><a href="#about">About</a></li>
            </ul>

        </nav>

        <div class="container">

            <section class="hero">

                <canvas id="particles"></canvas>
                <div class="hero-glow"></div>

                <h1>Enterprise-Grade Website Audits Powered by AI</h1>

                <p>
                    Instant compliance intelligence for performance, accessibility, security,
                    governance and ISO controls.
                </p>

                <a href="#audit" class="btn">Run Free Audit</a>

            </section>

            <section id="features" class="reveal">

                <h2 style="text-align:center;">Core Capabilities</h2>

                <div class="grid">

                    <div class="card">
                        <h3><i class="fa-solid fa-bolt"></i> Performance Intelligence</h3>
                        <p>Advanced performance and optimization analysis.</p>
                    </div>

                    <div class="card">
                        <h3><i class="fa-solid fa-shield-halved"></i> Security & Risk</h3>
                        <p>Identify vulnerabilities and misconfigurations.</p>
                    </div>

                    <div class="card">
                        <h3><i class="fa-solid fa-globe"></i> Accessibility (WCAG)</h3>
                        <p>Ensure inclusive and compliant digital access.</p>
                    </div>

                    <div class="card">
                        <h3><i class="fa-solid fa-clipboard-list"></i> Governance & ISO</h3>
                        <p>Control mapping and compliance validation.</p>
                    </div>

                </div>

            </section>

            <section id="why" class="reveal">

                <h2 style="text-align:center;">Why Choose Auditium?</h2>

                <div class="grid">

                    <div class="card">
                        <h3><i class="fa-solid fa-robot"></i> Automated AI Analysis</h3>
                        <p>No manual auditing required.</p>
                    </div>

                    <div class="card">
                        <h3><i class="fa-solid fa-chart-pie"></i> Enterprise Reporting</h3>
                        <p>Structured dashboards & charts.</p>
                    </div>

                    <div class="card">
                        <h3><i class="fa-solid fa-puzzle-piece"></i> Modular Architecture</h3>
                        <p>Select specific compliance modules.</p>
                    </div>

                    <div class="card">
                        <h3><i class="fa-solid fa-lightbulb"></i> Actionable Insights</h3>
                        <p>Clear improvement recommendations.</p>
                    </div>

                </div>

            </section>

        </div>

        <section id="audit" class="audit-section reveal" style="position: relative;">

            <!-- Extra Ambient Glows for Dashboard -->
            <div class="ambient-glow"
                style="top: 10%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(168, 96, 226, 0.6), transparent 70%);">
            </div>
            <div class="ambient-glow"
                style="bottom: 10%; right: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(56, 189, 248, 0.5), transparent 70%);">
            </div>

            <div class="audit-glow"></div>

            <!-- Removed the local sidebar from here -->

            <!-- MAIN CONTENT -->

            <div class="main">

                <div class="dashboard-glass">

                    <h2>AI Compliance Dashboard</h2>

                    <div id="auditError"
                        style="display: none; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; padding: 14px 20px; border-radius: 12px; margin-bottom: 25px; text-align: left; font-weight: 500; font-size: 15px; max-width: 800px; margin-left: auto; margin-right: auto;">
                    </div>

                    <div class="form-section">

                        <input type="text" id="url" placeholder="Enter Website URL" />
                        <input type="email" id="email" placeholder="Enter Email for Report" />

                        <button id="auditBtn" onclick="runAudit()">Run Audit</button>

                    </div>

                    <h3>Select Audit Modules</h3>

                    <div class="modules">

                        <input type="checkbox" id="accessibility" value="accessibility">
                        <label for="accessibility" class="pill">🌐 Accessibility</label>

                        <input type="checkbox" id="security" value="security">
                        <label for="security" class="pill">🔐 Security</label>

                        <input type="checkbox" id="privacy" value="privacy">
                        <label for="privacy" class="pill">🔒 Privacy</label>

                        <input type="checkbox" id="governance" value="governance">
                        <label for="governance" class="pill">📊 Governance</label>

                        <input type="checkbox" id="performance" value="performance">
                        <label for="performance" class="pill">⚡ Performance</label>

                        <input type="checkbox" id="iso27001" value="iso27001">
                        <label for="iso27001" class="pill">🛡 ISO 27001</label>

                    </div>

                    <!-- SCORE CARDS -->

                    <div class="summary-cards">

                        <div class="card">
                            <span>Overall Score</span>
                            <h2 id="overallScore">--%</h2>
                        </div>

                        <div class="card">
                            <span>Grade</span>
                            <h2 id="grade">--</h2>
                        </div>

                        <div class="card">
                            <span>Risk</span>
                            <h2 id="risk">--</h2>
                        </div>

                    </div>

                </div> <!-- End Dashboard Glass -->

                <!-- CHARTS -->

                <div class="charts">

                    <div class="chart-box">
                        <h3 class="chart-title">Module Compliance Scores</h3>
                        <canvas id="chart"></canvas>
                    </div>

                    <div class="chart-box">
                        <h3 class="chart-title">Overall Compliance Score</h3>
                        <canvas id="overallDonut"></canvas>
                    </div>

                </div>

                <!-- REPORT -->

                <div id="report">

                    <h3>Audit Report</h3>

                    <button class="download-btn" onclick="downloadPDF()">
                        Download Full Report (PDF)
                    </button>

                    <div id="summaryBox" class="summary-box">
                        Executive summary will appear here after the audit.
                    </div>

                    <div class="report-toggle" onclick="toggleReport()">
                        View Full Technical Report ▼
                    </div>

                    <div id="fullReport" class="collapsed">
                        This is a test report.
                    </div>

                    <div id="fullReport" class="collapsed"></div>

                    <script>
                        //toggle button dropdown for full report
                        function toggleReport() {

                            const report = document.getElementById("fullReport");
                            const toggle = document.querySelector(".report-toggle");

                            if (report.classList.contains("collapsed")) {
                                report.classList.remove("collapsed");
                                toggle.innerHTML = "Hide Detailed Report ▲";
                            } else {
                                report.classList.add("collapsed");
                                toggle.innerHTML = "View Detailed Report ▼";
                            }

                        }

                    </script>


        </section>



    </div>

    </section>

    <section id="about" class="reveal">

        <div style="text-align:center; transform: translateX(100px);">

            <h2>About Auditium</h2>

            <p>
                Auditium is an AI-driven web governance platform built to simplify enterprise-level
                compliance, security validation and performance optimization through intelligent automation.
            </p>

        </div>
    </section>

    </div>

    <footer>
        © 2026 Auditium. All rights reserved.
    </footer>

    </div> <!-- Close main-wrapper -->

    <script>

        /* PARTICLES */

        const canvas = document.getElementById("particles");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = 500;

        let particles = [];

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5
            });
        }

        function animateParticles() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {

                p.y -= p.speed;

                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(56,189,248,0.7)";
                ctx.fill();

            });

            requestAnimationFrame(animateParticles);

        }

        animateParticles();

        /* SCROLL REVEAL */

        function revealOnScroll() {

            const reveals = document.querySelectorAll(".reveal");

            for (let i = 0; i < reveals.length; i++) {

                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const visiblePoint = 120;

                if (elementTop < windowHeight - visiblePoint) {
                    reveals[i].classList.add("active");
                }

            }

        }

        window.addEventListener("scroll", revealOnScroll);

    </script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <script src="project.js"></script>


    <script>
        function toggleSettingsMenu(event) {
            if (event) event.stopPropagation();
            const menu = document.getElementById('settingsMenu');
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        }

        window.addEventListener('click', function (e) {
            const settingsContainer = document.getElementById('settingsContainer');
            const menu = document.getElementById('settingsMenu');
            if (settingsContainer && !settingsContainer.contains(e.target)) {
                if (menu && menu.style.display === 'block') {
                    menu.style.display = 'none';
                }
            }
        });

        function toggleExplicitTheme() {
            const isLightMode = document.body.classList.toggle('light-mode');
            const btn = document.getElementById('themeToggleBtn');
            if (isLightMode) {
                btn.innerHTML = '🌙 Dark Mode';
            } else {
                btn.innerHTML = '☀️ Light Mode';
            }
        }
    </script>

    <script type="module">

        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

        import {
            getAuth,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            signOut,
            onAuthStateChanged,
            GoogleAuthProvider,
            signInWithPopup
        } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

        import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


        const firebaseConfig = {
            apiKey: "AIzaSyAhUJG5-8ahWcuiMxOCZrxvYm9cZUeoEsw",
            authDomain: "auditium-9f511.firebaseapp.com",
            projectId: "auditium-9f511",
            storageBucket: "auditium-9f511.firebasestorage.app",
            messagingSenderId: "443195417001",
            appId: "1:443195417001:web:2fcf543c843c382339e4b8"
        };


        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        window.db = db;
window.collection = collection;
window.addDoc = addDoc;

        window.currentUser = null;

        onAuthStateChanged(auth, (user) => {
            window.currentUser = user;
            const authBtn = document.getElementById('authBtn');
            const userInfo = document.getElementById('userInfo');

            if (user) {
                userInfo.style.display = 'block';
                userInfo.style.marginTop = 'auto';
                userInfo.innerHTML = `
                    <div class="user-profile-card" onclick="showProfilePopup()" style="cursor: pointer; pointer-events: auto;">
                        <div class="user-avatar"><i class="fa-solid fa-user"></i></div>
                        <div class="user-details">
                            <span class="user-name" id="displayUserName">Workspace Admin</span>
                            <span class="user-email">${user.email}</span>
                        </div>
                    </div>
                `;

                authBtn.className = 'auth-logout';
                authBtn.style.color = '#fca5a5';
                authBtn.style.marginTop = '0px';
                authBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> Logout';
                authBtn.onclick = logoutUser;
            } else {
                userInfo.style.display = 'none';
                userInfo.style.marginTop = '0px';

                authBtn.className = 'auth-login';
                authBtn.style.color = '';
                authBtn.style.marginTop = 'auto';
                authBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Login';
                authBtn.onclick = () => { document.getElementById('loginPopup').style.display = 'flex'; };
            }
        });


        window.loginUser = function () {

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const errorEl = document.getElementById("loginError");
            errorEl.style.display = "none";

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    document.getElementById("loginPopup").style.display = "none";

                })
                .catch((error) => {
                    errorEl.style.display = "block";
                    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        errorEl.innerText = "Invalid credentials. Please try again.";
                    } else if (error.code === 'auth/invalid-email') {
                        errorEl.innerText = "Invalid email format.";
                    } else {
                        let parsedError = error.message.split(' (')[0].replace('Firebase: ', '');
                        errorEl.innerText = parsedError === "Error" ? "Login failed. Please try again." : parsedError;
                    }
                });

        }


        window.signupUser = function () {

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const errorEl = document.getElementById("loginError");
            errorEl.style.display = "none";

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    document.getElementById("loginPopup").style.display = "none";

                })
                .catch((error) => {
                    errorEl.style.display = "block";
                    if (error.code === 'auth/email-already-in-use') {
                        errorEl.innerText = "This email is already registered.";
                    } else if (error.code === 'auth/weak-password') {
                        errorEl.innerText = "Password must be at least 6 characters.";
                    } else if (error.code === 'auth/invalid-email') {
                        errorEl.innerText = "Invalid email format.";
                    } else if (error.code === 'auth/missing-password') {
                        errorEl.innerText = "Password is required.";
                    } else {
                        let parsedError = error.message.split(' (')[0].replace('Firebase: ', '');
                        errorEl.innerText = parsedError === "Error" ? "Sign up failed. Please check your details." : parsedError;
                    }
                });

        }
        window.googleLogin = function () {

            const provider = new GoogleAuthProvider();
            const errorEl = document.getElementById("loginError");
            errorEl.style.display = "none";

            signInWithPopup(auth, provider)
                .then((result) => {

                    document.getElementById("loginPopup").style.display = "none";

                })
                .catch((error) => {
                    errorEl.style.display = "block";
                    errorEl.innerText = "Google Sign-In failed or was cancelled.";
                });

        }
        window.logoutUser = function () {
            signOut(auth).then(() => {
                window.location.reload();
            }).catch((error) => {
                alert(error.message);
            });
        }

        window.isSignupMode = false;
        window.toggleAuthMode = function () {
            window.isSignupMode = !window.isSignupMode;
            const title = document.getElementById("authTitle");
            const btn = document.getElementById("mainAuthBtn");
            const toggleText = document.getElementById("authToggleText");
            const errorEl = document.getElementById("loginError");

            errorEl.style.display = "none";

            if (window.isSignupMode) {
                title.innerText = "Create an Account";
                btn.innerText = "Sign Up";
                btn.onclick = signupUser;
                toggleText.innerHTML = 'Already have an account? <span onclick="toggleAuthMode()" style="color: #38bdf8; cursor: pointer; font-weight: 600;">Login</span>';
            } else {
                title.innerText = "Welcome Back";
                btn.innerText = "Login";
                btn.onclick = loginUser;
                toggleText.innerHTML = 'New to Auditium? <span onclick="toggleAuthMode()" style="color: #38bdf8; cursor: pointer; font-weight: 600;">Sign Up</span>';
            }
        }

        window.showProfilePopup = function () {
            if (window.currentUser) {
                document.getElementById('profileEmail').value = window.currentUser.email;
                document.getElementById('profilePopup').style.display = 'flex';
            }
        }

        window.closeProfilePopup = function () {
            document.getElementById('profilePopup').style.display = 'none';
        }

        window.saveProfileName = function () {
            const newName = document.getElementById('profileName').value;
            if (newName.trim()) {
                document.getElementById('displayUserName').innerText = newName;
                closeProfilePopup();
            }
        }
    </script>

    <div id="loginPopup">

        <div class="login-box">
            <button class="close-btn" onclick="document.getElementById('loginPopup').style.display='none'"><i
                    class="fa-solid fa-xmark"></i></button>

            <i class="fa-solid fa-user-lock" style="font-size: 40px; color: #38bdf8; margin-bottom: 20px;"></i>
            <h2 id="authTitle">Welcome Back</h2>

            <div id="loginError"
                style="display: none; color: #ef4444; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 12px; margin-bottom: 20px; font-size: 14px; font-weight: 600;">
            </div>

            <div class="input-group">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" id="loginEmail" placeholder="Email Address">
            </div>

            <div class="input-group">
                <i class="fa-solid fa-lock"></i>
                <input type="password" id="loginPassword" placeholder="Password">
            </div>

            <button id="mainAuthBtn" onclick="loginUser()">Login</button>

            <p id="authToggleText" style="color: #94a3b8; font-size: 14px; margin-top: 15px; margin-bottom: 0px;">New to
                Auditium? <span onclick="toggleAuthMode()"
                    style="color: #38bdf8; cursor: pointer; font-weight: 600;">Sign Up</span></p>

            <div class="divider">
                <span>OR</span>
            </div>

            <button class="google-btn" onclick="googleLogin()">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px">
                    <path fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                    </path>
                    <path fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                    </path>
                    <path fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                    </path>
                    <path fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                    </path>
                </svg> Continue with Google
            </button>

        </div>

    </div>
    <div id="profilePopup">
        <div class="profile-box">
            <button class="close-btn" onclick="closeProfilePopup()"
                style="position: absolute; top: 20px; right: 20px; background: transparent; border: none; color: #94a3b8; font-size: 20px; cursor: pointer;"><i
                    class="fa-solid fa-xmark"></i></button>
            <h2 style="text-align: left; font-size: 22px; margin-bottom: 30px;">Edit profile</h2>

            <div class="profile-avatar-large">
                <i class="fa-solid fa-user"></i>

            </div>

            <div class="input-wrap" style="margin-bottom: 15px;">
                <label>Display name</label>
                <input type="text" id="profileName" placeholder="Enter name" value="Workspace Admin">
            </div>

            <div class="input-wrap">
                <label>Email Address</label>
                <input type="text" id="profileEmail" readonly style="opacity: 0.6; cursor: not-allowed;">
            </div>

            <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin-top: 20px;">
                Update your profile information to personalize your Auditium experience.
            </p>

            <div class="actions">
                <button class="btn-cancel" onclick="closeProfilePopup()">Cancel</button>
                <button class="btn-save" onclick="saveProfileName()">Save</button>
            </div>
        </div>
    </div>
</body>
<script src="project.js"></script>

</html>
