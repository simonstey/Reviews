
## Abstract
---

```
[p.1, left, 15-16]: "legal decision" == "judgements" ?  
[p.1, left, 17]: "preferably structured" as in? 
[p.1, left, 20]: "is accesible in an open modality" -> "is available as open source" or s/accesible/accessible/
```

## Introduction
---

``` 
[p.1, right, 41]: how exactly is the event-centric approach different from your event-based one? 
[p.1, right, 51]: isn't [2] addressing event processing?

[p.2, left, 19]: what are "nationals"? do you mean national courts?
[p.2, left, 22]: here Knowledge Graph is written in uppercase while e.g. in [p.2, right, 5] it's lowercase.. be consistent!
[p.2, left, 31]: an event's relevance? 
[p.2, right, 3]: remove "expressly"
[p.2, right, 7]: "familiar with semantic web" 
[p.2, right, 20]: what are time-related formats? 
[p.2, right, 31-32]: what European Courts? also, you most likely don't extract events from the courts themselves but from documents, legislation, ... those courts "create" right?
[p.2, right, 35]: we created for translating between different ... formats. (what formats?)
```

## Related Work
---

``` 
[p.3, left, 3]: what are those "several tasks" involved? 
[p.3, left, 10]: has been tackled in what contexts/domains? any? 
[p.3, left, 12]: missing some initial references for those ontologies/schemata
[p.3, left, 13]: "top approach" == "top-down approach" ?
[p.3, left, 14-17]: a bit wishy-washy.. what about OWL-Time (https://www.w3.org/TR/owl-time/)? what "real world realizations" are you talking about here? 
[p.3, left, 19]: "focus on identifying predefined temporal patterns" 
[p.3, left, 19-24]: but can't you use ontologies (maybe together with SHACL) to "specify subtypes and expected arguments for each kind of event" 
[p.3, left, 30-35]: missing references 
[p.3, left, 35]: a specific use case
[p.3, left, 36]: ISO TimeML standard 
[p.3, left, 37-38]: according to whom?  
[p.3, left, 43]: references to what?
[p.3, left, 44]: what are examples of day times larger than a day? (just curious as I didn't find a clear answer in ISO 24617 directly)
[p.3, left, 45]: "the lasting of something" -> rephrase; "repetitive" -> repeating (or interval?)
[p.3, left, 46]: who's "them" that TimeML marks up?
[p.3, left, 49-51]: what relevance do those tags have for the present paper? what do they mean? why mentioning them if you don't elaborate on them further? 
[p.3, right, 1-2]: remove "we find" 
[p.3, right, 2-3]: "in which was partially based TimeML" -> rephrase
[p.3, right, 4]: corpora such as? add refs  
[p.3, right, 5]: no longer used because ..?
[p.3, right, 11-12]: There are also TimeML extensions for specific domains such as the THYME project for the medical domain.
[p.3, right, 12]: 
[p.3, right, 13]: 
[p.3, right, 14]: 
[p.3, right, 15]: 
[p.3, right, 16]: what challenges are you talking about?
[p.3, right, 17]: them == ?
[p.3, right, 18]: 
[p.3, right, 19]: what literature? add refs
[p.3, right, 20]: focuses; events such as ..?
[p.3, right, 21]: ERE == ?
[p.3, right, 31]: , and annotates
[p.3, right, 33-34]: add reference 
[p.3, right, 33]: 
[p.3, right, 34]: aimed -> tasked?
[p.3, right, 35]: events of what? 
[p.3, right, 39]: year's edition
[p.3, right, 43]: expose -> mentioned
 
[p.4, left, 4]: remove "in this line"
[p.4, left, 10]: "Inside the wide universe of" -> rephrase or remove
[p.4, left, 12]: "protest-event representation options" -> what? 
[p.4, left, 14]: on previous approaches; what approaches? add refs
[p.4, left, 14-16]: according to whom? what makes projects/phd theses so special? I've seen journal papers that had more substance than some phd theses ;) also plural thesis -> theses  
[p.4, left, 18-22]: add refs 
[p.4, left, 29]: why's ACE a "challenge" ? aren't those guidelines?
[p.4, right, 49]: http://dhlab.fbk.eu/Timeline_events/ redirects to http://dh-server.fbk.eu/Timeline_events/ which doesnt load
```

## Event Extraction
---

``` 
[p.5, right, 31]: share the same language
[p.5, right, 46]: the remainder 

[p.6, Fig. 1]: 
        .) certain bars are basically not visible at all.. neither printed out nor digital; 
        .) why does the y-axis start from the top down?
        .) x-axis is missing its label
        .) events per paragraph per section

[p.6, left, 39-40]: I highly doubt that the EventsMatter corpus is "the >only< available corpus of judgments annotated with events".. a quick google search returned e.g.  https://www.coli.uni-saarland.de/conf/linc-04/grover.pdf 
[p.6, left, 41]: represents
[p.6, left, 50]: no such paragraph
[p.6, left, 51]: light-blue is basically not visible at all.. neither printed out nor digital
[p.6, right, 1]: remove "form"
[p.6, right, 2]: why at most 6? because there were at most 6 events per paragraph?
[p.6, right, 3]: what is "This is" referring to? 
[p.6, right, 7]: paragraphs
[p.6, right, 10]: what "Chamber"?
[p.6, right, 17]: s/appreciated/seen/
[p.6, right, 19]: this section in more detail
[p.6, right, 48]: "belies it" -> what? do you mean https://www.merriam-webster.com/dictionary/belie? how does this fit in this context?
[p.6, right, 49-51]: so FINAL DECISION is not uniform then? ;) 

[p.7, Fig. 2]: 
        .) y-axis is not readable
        .) light-blue is not readable 
        .) again why does the y-axis start from the top?
        .) caption: s/Numbert/Number/

[p.7, Fig. 3-4]: 
        .) light-blue is not readable 

[p.7, right, 31]: what structure? the 5 sections shown in the previous figures?
[p.7, right, 34]: what? what types? what parents?
[p.7, right, 35-36]: most relevant in what context?
[p.7, right, 42]: what kind of document types? 
[p.7, right, 51]: "semantic and syntactic considerations" -> what does that mean? what are examples of "syntactic considerations" you used?

[p.8, left, 18]: "with it" -> with what?; "adding has generic subject" -> what? rephrase!
[p.8, left, 21,40-41]: what's a frame?

[p.8, right, 7]: so for general kinds of texts it's less than 14% passive verbs?
[p.8, right, 8]: that 14%
[p.8, right, 10]: s/couples/pairs/
[p.8, right, 16-17]: adding new sentences and their respective types to the files. 
[p.8, right, 18]: what main class?
[p.8, right, 19]: events.ser?!
[p.8, right, 26]: double underlined is barely readable
[p.8, right, 28]: how the frame would be 
[p.8, right, 31-32]: what array? 
[p.8, right, 33]: In passRels 
[p.8, right, 39]: "plays on" ?! 
[p.8, right, 40]: what percentages? 

[p.9, right, 39]: most relevant == ?
[p.9, right, 40]: 
[p.9, right, 41]: the frames == the most relevant frames?
[p.9, right, 42]: 
[p.9, right, 43]: what Python script?
[p.9, right, 44]: 
[p.9, right, 45]: 
[p.9, right, 46]: 
[p.9, right, 47]: 
[p.9, right, 48]: 
[p.9, right, 49]: 
[p.9, right, 50]: lexical units?!
[p.9, right, 51]: 
[p.10, left, 1]: 
[p.10, left, 2]: 
[p.10, left, 3]: 
[p.10, left, 4]: 
[p.10, left, 5]: 
[p.10, left, 6]: 
[p.10, left, 7]: 
[p.10, left, 8]: 
[p.10, left, 9]: 
[p.10, left, 10]: 
[p.10, left, 11]: 
[p.10, left, 12]: 
[p.10, left, 13]: 
[p.10, left, 14]: 
[p.10, left, 15]: 
[p.10, left, 16]: 
[p.10, left, 17]: 
[p.10, left, 18]: 
[p.10, left, 19]: 
[p.10, left, 20]: 
[p.10, left, 21]: 
[p.10, left, 22]: 
[p.10, left, 23]: 
[p.10, left, 24]: 
[p.10, left, 25]: 
[p.10, left, 26]: 
[p.10, left, 27]: 
[p.10, left, 28]: 
[p.10, left, 29]: 
[p.10, left, 30]: 
[p.10, left, 31]: 
[p.10, left, 32]: 
[p.10, left, 33]: 
[p.10, left, 34]: 
[p.10, left, 35]: 
[p.10, left, 36]: 
[p.10, left, 37]: 
[p.10, left, 38]: 
[p.10, left, 39]: 
[p.10, left, 40]: 
[p.10, left, 41]: 
[p.10, left, 42]: 
[p.10, left, 43]: 
[p.10, left, 44]: 
[p.10, left, 45]: 
[p.10, left, 46]: 
[p.10, left, 47]: 
[p.10, left, 48]: 
[p.10, left, 49]: 
[p.10, left, 50]: 
[p.10, left, 51]: 
[p.10, right, 1]: 
[p.10, right, 2]: 
[p.10, right, 3]: 
[p.10, right, 4]: 
[p.10, right, 5]: 
[p.10, right, 6]: 
[p.10, right, 7]: 
[p.10, right, 8]: 
[p.10, right, 9]: 
[p.10, right, 10]: 
[p.10, right, 11]: 
[p.10, right, 12]: 
[p.10, right, 13]: 
[p.10, right, 14]: 
[p.10, right, 15]: 
[p.10, right, 16]: 
[p.10, right, 17]: 
[p.10, right, 18]: 
[p.10, right, 19]: 
[p.10, right, 20]: 
[p.10, right, 21]: 
[p.10, right, 22]: 
[p.10, right, 23]: 
[p.10, right, 24]: 
[p.10, right, 25]: 
[p.10, right, 26]: 
[p.10, right, 27]: 
[p.10, right, 28]: 
[p.10, right, 29]: 
[p.10, right, 30]: 
[p.10, right, 31]: 
[p.10, right, 32]: 
[p.10, right, 33]: 
[p.10, right, 34]: 
[p.10, right, 35]: 
[p.10, right, 36]: 
[p.10, right, 37]: 
[p.10, right, 38]: 
[p.10, right, 39]: 
[p.10, right, 40]: 
[p.10, right, 41]: 
[p.10, right, 42]: 
[p.10, right, 43]: 
[p.10, right, 44]: 
[p.10, right, 45]: 
[p.10, right, 46]: 
[p.10, right, 47]: 
[p.10, right, 48]: 
[p.10, right, 49]: 
[p.10, right, 50]: 
[p.10, right, 51]: 
[p.11, left, 1]: 
[p.11, left, 2]: 
[p.11, left, 3]: 
[p.11, left, 4]: 
[p.11, left, 5]: 
[p.11, left, 6]: 
[p.11, left, 7]: 
[p.11, left, 8]: 
[p.11, left, 9]: 
[p.11, left, 10]: 
[p.11, left, 11]: 
[p.11, left, 12]: 
[p.11, left, 13]: 
[p.11, left, 14]: 
[p.11, left, 15]: 
[p.11, left, 16]: 
[p.11, left, 17]: 
[p.11, left, 18]: 
[p.11, left, 19]: 
[p.11, left, 20]: 
[p.11, left, 21]: 
[p.11, left, 22]: 
[p.11, left, 23]: 
[p.11, left, 24]: 
[p.11, left, 25]: 
[p.11, left, 26]: 
[p.11, left, 27]: 
[p.11, left, 28]: 
[p.11, left, 29]: 
[p.11, left, 30]: 
[p.11, left, 31]: 
[p.11, left, 32]: 
[p.11, left, 33]: 
[p.11, left, 34]: 
[p.11, left, 35]: 
[p.11, left, 36]: 
[p.11, left, 37]: 
[p.11, left, 38]: 
[p.11, left, 39]: 
[p.11, left, 40]: 

```

## FT3 Ontology
---

``` 
[p.11, left, 41]: 
[p.11, left, 42]: 
[p.11, left, 43]: 
[p.11, left, 44]: 
[p.11, left, 45]: 
[p.11, left, 46]: 
[p.11, left, 47]: 
[p.11, left, 48]: 
[p.11, left, 49]: 
[p.11, left, 50]: 
[p.11, left, 51]: 
[p.11, right, 1]: 
[p.11, right, 2]: 
[p.11, right, 3]: 
[p.11, right, 4]: 
[p.11, right, 5]: 
[p.11, right, 6]: 
[p.11, right, 7]: 
[p.11, right, 8]: 
[p.11, right, 9]: 
[p.11, right, 10]: 
[p.11, right, 11]: 
[p.11, right, 12]: 
[p.11, right, 13]: 
[p.11, right, 14]: 
[p.11, right, 15]: 
[p.11, right, 16]: 
[p.11, right, 17]: 
[p.11, right, 18]: 
[p.11, right, 19]: 
[p.11, right, 20]: 
[p.11, right, 21]: 
[p.11, right, 22]: 
[p.11, right, 23]: 
[p.11, right, 24]: 
[p.11, right, 25]: 
[p.11, right, 26]: 
[p.11, right, 27]: 
[p.11, right, 28]: 
[p.11, right, 29]: 
[p.11, right, 30]: 
[p.11, right, 31]: 
[p.11, right, 32]: 
[p.11, right, 33]: 
[p.11, right, 34]: 
[p.11, right, 35]: 
[p.11, right, 36]: 
[p.11, right, 37]: 
[p.11, right, 38]: 
[p.11, right, 39]: 
[p.11, right, 40]: 
[p.11, right, 41]: 
[p.11, right, 42]: 
[p.11, right, 43]: 
[p.11, right, 44]: 
[p.11, right, 45]: 
[p.11, right, 46]: 
[p.11, right, 47]: 
[p.11, right, 48]: 
[p.11, right, 49]: 
[p.11, right, 50]: 
[p.11, right, 51]: 
[p.12, left, 1]: 
[p.12, left, 2]: 
[p.12, left, 3]: 
[p.12, left, 4]: 
[p.12, left, 5]: 
[p.12, left, 6]: 
[p.12, left, 7]: 
[p.12, left, 8]: 
[p.12, left, 9]: 
[p.12, left, 10]: 
[p.12, left, 11]: 
[p.12, left, 12]: 
[p.12, left, 13]: 
[p.12, left, 14]: 
[p.12, left, 15]: 
[p.12, left, 16]: 
[p.12, left, 17]: 
[p.12, left, 18]: 
[p.12, left, 19]: 
[p.12, left, 20]: 
[p.12, left, 21]: 
[p.12, left, 22]: 
[p.12, left, 23]: 
[p.12, left, 24]: 
[p.12, left, 25]: 
[p.12, left, 26]: 
[p.12, left, 27]: 
[p.12, left, 28]: 
[p.12, left, 29]: 
[p.12, left, 30]: 
[p.12, left, 31]: 
[p.12, left, 32]: 
[p.12, left, 33]: 
[p.12, left, 34]: 
[p.12, left, 35]: 
[p.12, left, 36]: 
[p.12, left, 37]: 
[p.12, left, 38]: 
[p.12, left, 39]: 
[p.12, left, 40]: 
[p.12, left, 41]: 
[p.12, left, 42]: 
[p.12, left, 43]: 
[p.12, left, 44]: 
[p.12, left, 45]: 
[p.12, left, 46]: 
[p.12, left, 47]: 
[p.12, left, 48]: 
[p.12, left, 49]: 
[p.12, left, 50]: 
[p.12, left, 51]: 
[p.12, right, 1]: 
[p.12, right, 2]: 
[p.12, right, 3]: 
[p.12, right, 4]: 
[p.12, right, 5]: 
[p.12, right, 6]: 
[p.12, right, 7]: 
[p.12, right, 8]: 
[p.12, right, 9]: 
[p.12, right, 10]: 
[p.12, right, 11]: 
[p.12, right, 12]: 
[p.12, right, 13]: 
[p.12, right, 14]: 
[p.12, right, 15]: 
[p.12, right, 16]: 
[p.12, right, 17]: 
[p.12, right, 18]: 
[p.12, right, 19]: 
[p.12, right, 20]: 
[p.12, right, 21]: 
[p.12, right, 22]: 
[p.12, right, 23]: 
[p.12, right, 24]: 
[p.12, right, 25]: 
[p.12, right, 26]: 
[p.12, right, 27]: 
[p.12, right, 28]: 
[p.12, right, 29]: 
[p.12, right, 30]: 
[p.12, right, 31]: 
[p.12, right, 32]: 
[p.12, right, 33]: 
[p.12, right, 34]: 
[p.12, right, 35]: 
[p.12, right, 36]: 
[p.12, right, 37]: 
[p.12, right, 38]: 
[p.12, right, 39]: 
[p.12, right, 40]: 
[p.12, right, 41]: 
[p.12, right, 42]: 
[p.12, right, 43]: 
[p.12, right, 44]: 
[p.12, right, 45]: 
[p.12, right, 46]: 
[p.12, right, 47]: 
[p.12, right, 48]: 
[p.12, right, 49]: 
[p.12, right, 50]: 
[p.12, right, 51]: 
[p.13, left, 1]: 
[p.13, left, 2]: 
[p.13, left, 3]: 
[p.13, left, 4]: 
[p.13, left, 5]: 
[p.13, left, 6]: 
[p.13, left, 7]: 
[p.13, left, 8]: 
[p.13, left, 9]: 
[p.13, left, 10]: 
[p.13, left, 11]: 
[p.13, left, 12]: 
[p.13, left, 13]: 
[p.13, left, 14]: 
[p.13, left, 15]: 
[p.13, left, 16]: 
[p.13, left, 17]: 
[p.13, left, 18]: 
[p.13, left, 19]: 
[p.13, left, 20]: 
[p.13, left, 21]: 
[p.13, left, 22]: 
[p.13, left, 23]: 
[p.13, left, 24]: 
[p.13, left, 25]: 
[p.13, left, 26]: 
[p.13, left, 27]: 
[p.13, left, 28]: 
[p.13, left, 29]: 
[p.13, left, 30]: 
[p.13, left, 31]: 
[p.13, left, 32]: 
[p.13, left, 33]: 
[p.13, left, 34]: 
[p.13, left, 35]: 
[p.13, left, 36]: 
[p.13, left, 37]: 
[p.13, left, 38]: 
[p.13, left, 39]: 
[p.13, left, 40]: 
[p.13, left, 41]: 
[p.13, left, 42]: 
[p.13, left, 43]: 
[p.13, left, 44]: 
[p.13, left, 45]: 
[p.13, left, 46]: 
[p.13, left, 47]: 
[p.13, left, 48]: 
[p.13, left, 49]: 
[p.13, left, 50]: 
[p.13, left, 51]: 
[p.13, right, 1]: 
[p.13, right, 2]: 
[p.13, right, 3]: 
[p.13, right, 4]: 
[p.13, right, 5]: 
[p.13, right, 6]: 
[p.13, right, 7]: 
[p.13, right, 8]: 
[p.13, right, 9]: 
[p.13, right, 10]: 
[p.13, right, 11]: 
[p.13, right, 12]: 
[p.13, right, 13]: 
[p.13, right, 14]: 
[p.13, right, 15]: 
[p.13, right, 16]: 
[p.13, right, 17]: 
[p.13, right, 18]: 
[p.13, right, 19]: 
[p.13, right, 20]: 
[p.13, right, 21]: 
[p.13, right, 22]: 
[p.13, right, 23]: 
[p.13, right, 24]: 
[p.13, right, 25]: 
[p.13, right, 26]: 
[p.13, right, 27]: 
[p.13, right, 28]: 
[p.13, right, 29]: 
[p.13, right, 30]: 
[p.13, right, 31]: 
[p.13, right, 32]: 
[p.13, right, 33]: 
[p.13, right, 34]: 
[p.13, right, 35]: 
[p.13, right, 36]: 
[p.13, right, 37]: 
[p.13, right, 38]: 
[p.13, right, 39]: 
[p.13, right, 40]: 
[p.13, right, 41]: 
[p.13, right, 42]: 
[p.13, right, 43]: 
[p.13, right, 44]: 
[p.13, right, 45]: 
[p.13, right, 46]: 
[p.13, right, 47]: 
[p.13, right, 48]: 
[p.13, right, 49]: 
[p.13, right, 50]: 
[p.13, right, 51]: 
[p.14, left, 1]: 
[p.14, left, 2]: 
[p.14, left, 3]: 
[p.14, left, 4]: 
[p.14, left, 5]: 
[p.14, left, 6]: 
[p.14, left, 7]: 
[p.14, left, 8]: 
[p.14, left, 9]: 
[p.14, left, 10]: 
[p.14, left, 11]: 
[p.14, left, 12]: 
[p.14, left, 13]: 
[p.14, left, 14]: 
[p.14, left, 15]: 
[p.14, left, 16]: 
[p.14, left, 17]: 
[p.14, left, 18]: 
[p.14, left, 19]: 
[p.14, left, 20]: 
[p.14, left, 21]: 
[p.14, left, 22]: 
[p.14, left, 23]: 
[p.14, left, 24]: 
[p.14, left, 25]: 
[p.14, left, 26]: 
[p.14, left, 27]: 
[p.14, left, 28]: 
[p.14, left, 29]: 
[p.14, left, 30]: 
[p.14, left, 31]: 
[p.14, left, 32]: 
[p.14, left, 33]: 
[p.14, left, 34]: 
[p.14, left, 35]: 
[p.14, left, 36]: 
[p.14, left, 37]: 
[p.14, left, 38]: 
[p.14, left, 39]: 
[p.14, left, 40]: 
[p.14, left, 41]: 
[p.14, left, 42]: 
[p.14, left, 43]: 
[p.14, left, 44]: 
[p.14, left, 45]: 
[p.14, left, 46]: 
[p.14, left, 47]: 
[p.14, left, 48]: 
[p.14, left, 49]: 
[p.14, left, 50]: 
[p.14, left, 51]: 
```

## FromTimetoTime Converter
---

``` 
[p.14, right, 1]: 
[p.14, right, 2]: 
[p.14, right, 3]: 
[p.14, right, 4]: 
[p.14, right, 5]: 
[p.14, right, 6]: 
[p.14, right, 7]: 
[p.14, right, 8]: 
[p.14, right, 9]: 
[p.14, right, 10]: 
[p.14, right, 11]: 
[p.14, right, 12]: 
[p.14, right, 13]: 
[p.14, right, 14]: 
[p.14, right, 15]: 
[p.14, right, 16]: 
[p.14, right, 17]: 
[p.14, right, 18]: 
[p.14, right, 19]: 
[p.14, right, 20]: 
[p.14, right, 21]: 
[p.14, right, 22]: 
[p.14, right, 23]: 
[p.14, right, 24]: 
[p.14, right, 25]: 
[p.14, right, 26]: 
[p.14, right, 27]: 
[p.14, right, 28]: 
[p.14, right, 29]: 
[p.14, right, 30]: 
[p.14, right, 31]: 
[p.14, right, 32]: 
[p.14, right, 33]: 
[p.14, right, 34]: 
[p.14, right, 35]: 
[p.14, right, 36]: 
[p.14, right, 37]: 
[p.14, right, 38]: 
[p.14, right, 39]: 
[p.14, right, 40]: 
[p.14, right, 41]: 
[p.14, right, 42]: 
[p.14, right, 43]: 
[p.14, right, 44]: 
[p.14, right, 45]: 
[p.14, right, 46]: 
[p.14, right, 47]: 
[p.14, right, 48]: 
[p.14, right, 49]: 
[p.14, right, 50]: 
[p.14, right, 51]: 
[p.15, left, 1]: 
[p.15, left, 2]: 
[p.15, left, 3]: 
[p.15, left, 4]: 
[p.15, left, 5]: 
[p.15, left, 6]: 
[p.15, left, 7]: 
[p.15, left, 8]: 
[p.15, left, 9]: 
[p.15, left, 10]: 
[p.15, left, 11]: 
[p.15, left, 12]: 
[p.15, left, 13]: 
[p.15, left, 14]: 
[p.15, left, 15]: 
[p.15, left, 16]: 
[p.15, left, 17]: 
[p.15, left, 18]: 
[p.15, left, 19]: 
[p.15, left, 20]: 
[p.15, left, 21]: 
[p.15, left, 22]: 
[p.15, left, 23]: 
[p.15, left, 24]: 
[p.15, left, 25]: 
[p.15, left, 26]: 
[p.15, left, 27]: 
[p.15, left, 28]: 
[p.15, left, 29]: 
[p.15, left, 30]: 
[p.15, left, 31]: 
[p.15, left, 32]: 
[p.15, left, 33]: 
[p.15, left, 34]: 
[p.15, left, 35]: 
[p.15, left, 36]: 
[p.15, left, 37]: 
[p.15, left, 38]: 
[p.15, left, 39]: 
[p.15, left, 40]: 
[p.15, left, 41]: 
[p.15, left, 42]: 
[p.15, left, 43]: 
[p.15, left, 44]: 
[p.15, left, 45]: 
[p.15, left, 46]: 
[p.15, left, 47]: 
[p.15, left, 48]: 
[p.15, left, 49]: 
[p.15, left, 50]: 
[p.15, left, 51]: 
[p.15, right, 1]: 
[p.15, right, 2]: 
[p.15, right, 3]: 
[p.15, right, 4]: 
[p.15, right, 5]: 
[p.15, right, 6]: 
[p.15, right, 7]: 
[p.15, right, 8]: 
[p.15, right, 9]: 
[p.15, right, 10]: 
[p.15, right, 11]: 
[p.15, right, 12]: 
[p.15, right, 13]: 
[p.15, right, 14]: 
[p.15, right, 15]: 
[p.15, right, 16]: 
[p.15, right, 17]: 
[p.15, right, 18]: 
[p.15, right, 19]: 
[p.15, right, 20]: 
[p.15, right, 21]: 
[p.15, right, 22]: 
[p.15, right, 23]: 
[p.15, right, 24]: 
[p.15, right, 25]: 
[p.15, right, 26]: 
[p.15, right, 27]: 
[p.15, right, 28]: 
[p.15, right, 29]: 
[p.15, right, 30]: 
[p.15, right, 31]: 
[p.15, right, 32]: 
[p.15, right, 33]: 
[p.15, right, 34]: 
[p.15, right, 35]: 
[p.15, right, 36]: 
[p.15, right, 37]: 
[p.15, right, 38]: 
[p.15, right, 39]: 
[p.15, right, 40]: 
[p.15, right, 41]: 
[p.15, right, 42]: 
[p.15, right, 43]: 
[p.15, right, 44]: 
[p.15, right, 45]: 
[p.15, right, 46]: 
[p.15, right, 47]: 
[p.15, right, 48]: 
[p.15, right, 49]: 
[p.15, right, 50]: 
[p.15, right, 51]: 
[p.16, left, 1]: 
[p.16, left, 2]: 
[p.16, left, 3]: 
[p.16, left, 4]: 
[p.16, left, 5]: 
[p.16, left, 6]: 
[p.16, left, 7]: 
[p.16, left, 8]: 
[p.16, left, 9]: 
[p.16, left, 10]: 
[p.16, left, 11]: 
[p.16, left, 12]: 
[p.16, left, 13]: 
[p.16, left, 14]: 
[p.16, left, 15]: 
[p.16, left, 16]: 
[p.16, left, 17]: 
[p.16, left, 18]: 
[p.16, left, 19]: 
[p.16, left, 20]: 
[p.16, left, 21]: 
[p.16, left, 22]: 
[p.16, left, 23]: 
[p.16, left, 24]: 
[p.16, left, 25]: 
[p.16, left, 26]: 
[p.16, left, 27]: 
[p.16, left, 28]: 
[p.16, left, 29]: 
[p.16, left, 30]: 
[p.16, left, 31]: 
[p.16, left, 32]: 
[p.16, left, 33]: 
[p.16, left, 34]: 
[p.16, left, 35]: 
[p.16, left, 36]: 
[p.16, left, 37]: 
[p.16, left, 38]: 
[p.16, left, 39]: 
[p.16, left, 40]: 
[p.16, left, 41]: 
[p.16, left, 42]: 
[p.16, left, 43]: 
[p.16, left, 44]: 
[p.16, left, 45]: 
[p.16, left, 46]: 
[p.16, left, 47]: 
[p.16, left, 48]: 
[p.16, left, 49]: 
[p.16, left, 50]: 
[p.16, left, 51]: 
[p.16, right, 1]: 
[p.16, right, 2]: 
[p.16, right, 3]: 
[p.16, right, 4]: 
[p.16, right, 5]: 
[p.16, right, 6]: 
[p.16, right, 7]: 
[p.16, right, 8]: 
[p.16, right, 9]: 
[p.16, right, 10]: 
[p.16, right, 11]: 
[p.16, right, 12]: 
[p.16, right, 13]: 
[p.16, right, 14]: 
[p.16, right, 15]: 
[p.16, right, 16]: 
[p.16, right, 17]: 
[p.16, right, 18]: 
[p.16, right, 19]: 
[p.16, right, 20]: 
[p.16, right, 21]: 
[p.16, right, 22]: 
[p.16, right, 23]: 
[p.16, right, 24]: 
[p.16, right, 25]: 
[p.16, right, 26]: 
[p.16, right, 27]: 
[p.16, right, 28]: 
[p.16, right, 29]: 
[p.16, right, 30]: 
[p.16, right, 31]: 
[p.16, right, 32]: 
[p.16, right, 33]: 
[p.16, right, 34]: 
[p.16, right, 35]: 
[p.16, right, 36]: 
[p.16, right, 37]: 
[p.16, right, 38]: 
[p.16, right, 39]: 
[p.16, right, 40]: 
[p.16, right, 41]: 
[p.16, right, 42]: 
[p.16, right, 43]: 
[p.16, right, 44]: 
[p.16, right, 45]: 
[p.16, right, 46]: 
[p.16, right, 47]: 
[p.16, right, 48]: 
[p.16, right, 49]: 
[p.16, right, 50]: 
[p.16, right, 51]: 
[p.17, left, 1]: 
[p.17, left, 2]: 
[p.17, left, 3]: 
[p.17, left, 4]: 
[p.17, left, 5]: 
[p.17, left, 6]: 
[p.17, left, 7]: 
[p.17, left, 8]: 
[p.17, left, 9]: 
[p.17, left, 10]: 
[p.17, left, 11]: 
[p.17, left, 12]: 
[p.17, left, 13]: 
[p.17, left, 14]: 
[p.17, left, 15]: 
[p.17, left, 16]: 
[p.17, left, 17]: 
[p.17, left, 18]: 
[p.17, left, 19]: 
[p.17, left, 20]: 
[p.17, left, 21]: 
[p.17, left, 22]: 
[p.17, left, 23]: 
[p.17, left, 24]: 
[p.17, left, 25]: 
[p.17, left, 26]: 
[p.17, left, 27]: 
[p.17, left, 28]: 
[p.17, left, 29]: 
```

## Legal KG
---

``` 
[p.17, left, 30]: 
[p.17, left, 31]: 
[p.17, left, 32]: 
[p.17, left, 33]: 
[p.17, left, 34]: 
[p.17, left, 35]: 
[p.17, left, 36]: 
[p.17, left, 37]: 
[p.17, left, 38]: 
[p.17, left, 39]: 
[p.17, left, 40]: 
[p.17, left, 41]: 
[p.17, left, 42]: 
[p.17, left, 43]: 
[p.17, left, 44]: 
[p.17, left, 45]: 
[p.17, left, 46]: 
[p.17, left, 47]: 
[p.17, left, 48]: 
[p.17, left, 49]: 
[p.17, left, 50]: 
[p.17, left, 51]: 
[p.17, right, 1]: 
[p.17, right, 2]: 
[p.17, right, 3]: 
[p.17, right, 4]: 
[p.17, right, 5]: 
[p.17, right, 6]: 
[p.17, right, 7]: 
[p.17, right, 8]: 
[p.17, right, 9]: 
[p.17, right, 10]: 
[p.17, right, 11]: 
[p.17, right, 12]: 
[p.17, right, 13]: 
[p.17, right, 14]: 
[p.17, right, 15]: 
[p.17, right, 16]: 
[p.17, right, 17]: 
[p.17, right, 18]: 
[p.17, right, 19]: 
[p.17, right, 20]: 
[p.17, right, 21]: 
[p.17, right, 22]: 
[p.17, right, 23]: 
[p.17, right, 24]: 
[p.17, right, 25]: 
[p.17, right, 26]: 
[p.17, right, 27]: 
[p.17, right, 28]: 
[p.17, right, 29]: 
[p.17, right, 30]: 
[p.17, right, 31]: 
[p.17, right, 32]: 
[p.17, right, 33]: 
[p.17, right, 34]: 
[p.17, right, 35]: 
[p.17, right, 36]: 
[p.17, right, 37]: 
[p.17, right, 38]: 
[p.17, right, 39]: 
[p.17, right, 40]: 
[p.17, right, 41]: 
[p.17, right, 42]: 
[p.17, right, 43]: 
[p.17, right, 44]: 
[p.17, right, 45]: 
[p.17, right, 46]: 
[p.17, right, 47]: 
[p.17, right, 48]: 
[p.17, right, 49]: 
[p.17, right, 50]: 
[p.17, right, 51]: 
[p.18, left, 1]: 
[p.18, left, 2]: 
[p.18, left, 3]: 
[p.18, left, 4]: 
[p.18, left, 5]: 
[p.18, left, 6]: 
[p.18, left, 7]: 
[p.18, left, 8]: 
[p.18, left, 9]: 
[p.18, left, 10]: 
```

## Conclusions
---

``` 
[p.18, left, 11]: 
[p.18, left, 12]: 
[p.18, left, 13]: 
[p.18, left, 14]: 
[p.18, left, 15]: 
[p.18, left, 16]: 
[p.18, left, 17]: 
[p.18, left, 18]: 
[p.18, left, 19]: 
[p.18, left, 20]: 
[p.18, left, 21]: 
[p.18, left, 22]: 
[p.18, left, 23]: 
[p.18, left, 24]: 
[p.18, left, 25]: 
[p.18, left, 26]: 
[p.18, left, 27]: 
[p.18, left, 28]: 
[p.18, left, 29]: 
[p.18, left, 30]: 
[p.18, left, 31]: 
[p.18, left, 32]: 
[p.18, left, 33]: 
[p.18, left, 34]: 
[p.18, left, 35]: 
[p.18, left, 36]: 
[p.18, left, 37]: 
[p.18, left, 38]: 
[p.18, left, 39]: 
[p.18, left, 40]: 
[p.18, left, 41]: 
[p.18, left, 42]: 
[p.18, left, 43]: 
[p.18, left, 44]: 
[p.18, left, 45]: 
[p.18, left, 46]: 
[p.18, left, 47]: 
[p.18, left, 48]: 
[p.18, left, 49]: 
[p.18, left, 50]: 
[p.18, left, 51]: 
[p.18, right, 1]: 
[p.18, right, 2]: 
[p.18, right, 3]: 
[p.18, right, 4]: 
[p.18, right, 5]: 
[p.18, right, 6]: 
[p.18, right, 7]: 
[p.18, right, 8]: 
[p.18, right, 9]: 
[p.18, right, 10]: 
[p.18, right, 11]: 
[p.18, right, 12]:
```

## References
---

```  
[2,4,59]: I was about to remark that the E in ESWC stands for Extended (since 2010 when it changed from European to Extended, cf. https://2022.eswc-conferences.org/history/) however, both the official ESWC twitter account https://twitter.com/eswc_conf as well as e.g. ESWC on Springer https://link.springer.com/conference/esws do call it European.. So I'm not sure anymore :D
```

## fromtimetotime.owl
---

1. what's the purpose of namespace `rdf1`? I guess that's a typo? 

    ```turtle
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdf1: <http://www.owl-ontologies.com/rdf#> .
    ...
    <http://fromtimetotime.linkeddata.es/ontology/fromtimetotime#and> rdf:type owl:ObjectProperty ,
                                                                        owl:SymmetricProperty ;
        rdfs:domain <http://fromtimetotime.linkeddata.es/ontology/fromtimetotime#ComposedTemporalExpression> ;
        rdfs:range <http://fromtimetotime.linkeddata.es/ontology/fromtimetotime#ComposedTemporalExpression> ;
        rdf1:type owl:ObjectProperty ;
        ...
    ```
2. why not use `ft3:` as a prefix? this would make the whole ontology way less verbose 
    ```turtle
    @prefix ft3: <http://fromtimetotime.linkeddata.es/ontology/fromtimetotime#> .
    ...
    ft3:and rdf:type owl:ObjectProperty , owl:SymmetricProperty ;
        rdfs:domain ft3:ComposedTemporalExpression ;
        rdfs:range ft3:ComposedTemporalExpression ;
        ...
    ```
3. Wrong namespace for `vann` -> the leading : makes Protege to believe the URIs actually belong to the `:` namespace (which can be seen by the automatically generated comments)
    ```turtle
    ###  https://fromtimetotime.linkeddata.es/ontology/fromtimetotime#vann:preferredNamespacePrefix
    :vann:preferredNamespacePrefix rdf:type owl:AnnotationProperty . #wrong
    vann:preferredNamespacePrefix rdf:type owl:AnnotationProperty . #correct

    ###  https://fromtimetotime.linkeddata.es/ontology/fromtimetotime#vann:preferredNamespaceUri
    :vann:preferredNamespaceUri rdf:type owl:AnnotationProperty . #wrong
    vann:preferredNamespaceUri rdf:type owl:AnnotationProperty . #correct
    ```
