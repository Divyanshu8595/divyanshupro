import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.graphics.shapes import Drawing, Line

def generate_pdf():
    pdf_path = "public/resume.pdf"
    
    # 35 pt left/right margins, 25 pt top/bottom margins
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=35,
        rightMargin=35,
        topMargin=25,
        bottomMargin=25
    )
    
    styles = getSampleStyleSheet()
    
    # Hex colors matching docx
    name_color = colors.HexColor("#1a1a1a")
    accent_color = colors.HexColor("#2c2c2c")
    grey_color = colors.HexColor("#555555")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=17,
        leading=21,
        alignment=1, # Centered
        textColor=name_color
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1, # Centered
        textColor=name_color
    )
    
    links_style = ParagraphStyle(
        'DocLinks',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1, # Centered
        textColor=grey_color
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=accent_color,
        spaceBefore=9,
        spaceAfter=4,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=name_color,
        spaceAfter=3
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=name_color,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=2.5
    )
    
    story = []
    
    # Header Section
    story.append(Paragraph("DIVYANSHU TIWARI", title_style))
    story.append(Spacer(1, 2))
    
    story.append(Paragraph("Greater Noida, India  |  +91-8595126184  |  divyanshucloud@gmail.com", subtitle_style))
    story.append(Spacer(1, 2))
    
    # Clickable links
    links_html = (
        "<a href='https://www.linkedin.com/in/divyanshu-tiwari-43151a20b/' color='#2563eb'>LinkedIn</a>  |  "
        "<a href='https://github.com/Divyanshu8595' color='#2563eb'>GitHub</a>  |  "
        "<a href='https://www.kaggle.com/divyanshucloud' color='#2563eb'>Kaggle</a>  |  "
        "<a href='https://leetcode.com/u/divyanshucloud' color='#2563eb'>LeetCode</a>  |  "
        "<a href='https://www.hackerearth.com/@divyanshucloud/' color='#2563eb'>HackerEarth</a>"
    )
    story.append(Paragraph(links_html, links_style))
    story.append(Spacer(1, 6))
    
    # Width = letter width (612) - leftMargin(35) - rightMargin(35) = 542
    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_title_style))
        # Draw a horizontal line
        d = Drawing(542, 2)
        d.add(Line(0, 1, 542, 1, strokeColor=grey_color, strokeWidth=0.75))
        story.append(d)
        story.append(Spacer(1, 3))
        
    # Summary Section
    add_section_header("Summary")
    summary_text = (
        "Computer Science graduate (B.Tech, June 2026) with hands-on experience in Python, SQL, and Generative AI "
        "applied to real data and workflow problems. Built a Retrieval-Augmented Generation (RAG) system using the Gemini API, "
        "and a churn prediction model with an analytics dashboard translating data into business-ready insights. "
        "Two AI/ML internships in LLM output evaluation, data extraction, and workflow automation. Comfortable breaking "
        "business problems into automatable, step-wise components. Quick learner, currently building working knowledge "
        "of the Microsoft Power Platform."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 3))
    
    # Skills Section
    add_section_header("Skills")
    skills_data = [
        [Paragraph("<b>Programming & Data:</b>", body_style), Paragraph("Python (Pandas, NumPy), SQL (Joins, Aggregations, Filtering, Data Extraction), Data Analysis, Data Validation", body_style)],
        [Paragraph("<b>Generative AI / LLM:</b>", body_style), Paragraph("Gemini API Integration, Prompt Engineering & Iteration, Retrieval-Augmented Generation (RAG), LLM Output Evaluation, Structured Data Extraction, Summarization & Classification Tasks", body_style)],
        [Paragraph("<b>Automation & Low-Code:</b>", body_style), Paragraph("Workflow Automation (Python), Rule-Based Automation Pipelines, Process Breakdown & Automation Logic, Microsoft Power Platform (currently building working knowledge)", body_style)],
        [Paragraph("<b>Tools & Practices:</b>", body_style), Paragraph("Git, GitHub, REST APIs, MySQL, Firebase, Documentation & Governance-Aligned Reporting", body_style)]
    ]
    t = Table(skills_data, colWidths=[130, 412])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t)
    story.append(Spacer(1, 3))
    
    # Experience Section
    add_section_header("Work Experience")
    
    # Job 1
    job1_header = (
        "<table width='100%'><tr>"
        "<td><b>LLM Post-Training Intern — Ethara AI</b></td>"
        "<td align='right'><font color='#555555'><i>Jan 2026 – Apr 2026</i></font></td>"
        "</tr></table>"
    )
    story.append(Paragraph(job1_header, body_style))
    story.append(Paragraph("&bull; Reviewed 60+ AI-generated task submissions daily against defined SOPs, maintaining a 99%+ quality pass rate while flagging roughly 1% for correction.", bullet_style))
    story.append(Paragraph("&bull; Identified and documented model errors and reasoning inconsistencies to support fine-tuning and quality feedback loops.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Job 2
    job2_header = (
        "<table width='100%'><tr>"
        "<td><b>AI/ML Intern — Agivant Technologies</b></td>"
        "<td align='right'><font color='#555555'><i>Jun 2025 – Sep 2025</i></font></td>"
        "</tr></table>"
    )
    story.append(Paragraph(job2_header, body_style))
    story.append(Paragraph("&bull; Built Python-based rule-based automation pipelines (Pandas, NumPy) to validate and process a dataset of 10,000+ records for analytics workflows.", bullet_style))
    story.append(Paragraph("&bull; Automated data validation workflows that non-technical marketing and business teams could run independently, removing the need for engineering support on routine data tasks.", bullet_style))
    story.append(Spacer(1, 3))
    
    # Projects Section
    add_section_header("Projects")
    
    # Project 1
    proj1_header = (
        "<table width='100%'><tr>"
        "<td><b>Sahayak Guru — AI Teaching Assistant</b></td>"
        "<td align='right'><font color='#555555'><i>Jul 2025</i></font></td>"
        "</tr></table>"
    )
    story.append(Paragraph(proj1_header, body_style))
    story.append(Paragraph("&bull; Designed and developed an AI teaching assistant utilizing the Gemini API and Retrieval-Augmented Generation (RAG) architecture to support low-resource schools.", bullet_style))
    story.append(Paragraph("&bull; Built automated curriculum generation capability using LLM-driven summarization and content structuring; submitted to Google Cloud Agentic AI Day.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Project 2
    proj2_header = (
        "<table width='100%'><tr>"
        "<td><b>Customer Churn Prediction & Analytics Dashboard (OTT Platform)</b></td>"
        "<td align='right'></td>"
        "</tr></table>"
    )
    story.append(Paragraph(proj2_header, body_style))
    story.append(Paragraph("&bull; Built a machine learning classification model to predict customer churn probability from subscription and behavioral data.", bullet_style))
    story.append(Paragraph("&bull; Created an interactive reporting dashboard to visualize trends and segments, translating model output into actionable business insights for stakeholders.", bullet_style))
    story.append(Spacer(1, 3))
    
    # Leadership Section
    add_section_header("Leadership & Community")
    story.append(Paragraph("&bull; Campus Lead, Google Developer Group (GDG) – GNIOT: Selected among 500+ applicants; organized 10+ technical workshops, coordinating logistics and stakeholder communication.", bullet_style))
    story.append(Paragraph("&bull; Organizer, Kotlin User Group (KUG) Gurugram: Co-organized developer meetups with Google and JetBrains engineering teams.", bullet_style))
    story.append(Spacer(1, 3))
    
    # Education Section
    add_section_header("Education")
    edu_header = (
        "<table width='100%'><tr>"
        "<td><b>B.Tech, Computer Science & Engineering (IoT) — GNIOT</b></td>"
        "<td align='right'><font color='#555555'>Completed: June 2026</font></td>"
        "</tr></table>"
    )
    story.append(Paragraph(edu_header, body_style))
    story.append(Paragraph("CGPA: 6.73", body_style))
    story.append(Spacer(1, 3))
    
    # Achievements Section
    add_section_header("Achievements & Certifications")
    story.append(Paragraph("&bull; Merit Scholarship &mdash; 100% Tuition Fee Waiver (U.P. Government); Semifinalist, Microsoft Imagine Cup 2024", bullet_style))
    story.append(Paragraph("&bull; Google Machine Learning Crash Course, Generative AI Fundamentals, Discover Data Analysis &mdash; Google", bullet_style))
    story.append(Paragraph("&bull; Solved 400+ Data Structures & Algorithms problems across coding platforms", bullet_style))
    
    # Build Document
    doc.build(story)
    print("PDF generation complete.")

if __name__ == '__main__':
    generate_pdf()
