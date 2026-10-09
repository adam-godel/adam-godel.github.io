---
title: "Publications"
description: "View my publications."
hideTitle: true
---

## Publications

{{< box
    badge="In submission | [MQSF 2026](https://munich-quantum-software.github.io/mqsf/2026/program) | [NUG 2026](https://sites.google.com/lbl.gov/nug-forum-2026/schedule) | [QI 2026](https://www.qi2026.jp)"
    title="QuantumBenchPhase: A quantum simulation and benchmarking library for generating phase diagrams"
    subtitle="**Adam Godel**, Adrian Acosta, Maggie Bao, Connor Howe, Sarah Chehade, Vardaan Sahgal, Joan Étude Arrow, and Brian J. McDermott"
    links="Poster | /files/QBP_MQSF_Poster.pdf" />}}

{{< box
    badge="In submission | [SOSP 2026 SRC First Place](https://src.acm.org/winners/2027) | [BU UROP Summer 2026](https://www.bu.edu/urop/files/2026/10/Event-Program-Map-2026-Final.pdf)"
    title="Medusa: Closing the Data Alignment Gap in Secure Analytics with Private Edit Distance"
    subtitle="**Adam Godel**, Vasiliki Kalavri, Mayank Varia, and John Liagouris"
    links="Poster | /files/Medusa_SOSP_Poster.pdf, Presentation | /files/Medusa_SOSP_Presentation.pdf" />}}

{{< box
    badge="In submission"
    title="Knngaroo: Scalable Private Vector Search with Perfect Accuracy in Linear Time"
    subtitle="Sam Buxbaum, **Adam Godel**, Eli Baum, Muhammad Faisal, Vasiliki Kalavri, Mayank Varia, and John Liagouris" />}}

{{< box
    title="CryptDough: A Unified Analytics Engine for Secure Multiparty Computation"
    subtitle="Muhammad Faisal, Alessandra Lanz, Sam Buxbaum, **Adam Godel**, Vasiliki Kalavri, Mayank Varia, and John Liagouris"
    meta="The 32<sup>nd</sup> Symposium on Operating Systems Principles (SOSP), 2026"
    bibtex=`@inproceedings{10.1145/3830418.3843909,
    author = {Faisal, Muhammad and Lanz, Alessandra and Buxbaum, Sam and Godel, Adam and Kalavri, Vasiliki and Varia, Mayank and Liagouris, John},
    title = {CryptDough: A Unified Analytics Engine for Secure Multiparty Computation},
    year = {2026},
    isbn = {9798400725852},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3830418.3843909},
    doi = {10.1145/3830418.3843909},
    abstract = {We present CryptDough, a unified analytics engine for secure multiparty computation (MPC). CryptDough enables multiple distrusting parties to jointly execute a data analysis pipeline on their private inputs and learn nothing beyond the result (e.g., aggregate statistics). Unlike existing MPC solutions that support a single threat model or workload type, CryptDough provides built-in support for cross-domain analytics (relational, time series, ML inference) under various threat models, all within the same system runtime.CryptDough contributes (i) a hierarchical system design that facilitates modularity and extensibility through progressive lowering of abstractions, and (ii) the concept of virtual vectors that enable users to write single-threaded code across all layers of the software stack, while pushing the complexity of communication, parallelization, and memory management down to the execution engine. We show that CryptDough generalizes the functionality of state-of-the-art MPC systems and remains competitive on the analytics they support, often outperforming them by more than 2{\texttimes}.},
    booktitle = {Proceedings of the ACM SIGOPS 32nd Symposium on Operating Systems Principles},
    pages = {145–166},
    numpages = {22},
    keywords = {secure analytics, multi-party computation},
    location = {
    },
    series = {SOSP '26}
}`
    links="PDF | https://dl.acm.org/doi/pdf/10.1145/3830418.3843909, BibTeX | #bibtex, Code | https://github.com/CASP-Systems-BU/CryptDough, Poster | /files/CryptDough_SOSP_Poster.pdf" />}}
