
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
[p.3, right, 16]: what challenges are you talking about?
[p.3, right, 17]: them == ?
[p.3, right, 18]: 
[p.3, right, 19]: what literature? add refs
[p.3, right, 20]: focuses; events such as ..?
[p.3, right, 21]: ERE == ?
[p.3, right, 31]: , and annotates
[p.3, right, 33-34]: add reference 
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
[p.9, right, 41]: the frames == the most relevant frames?
[p.9, right, 43]: what Python script?
[p.9, right, 50]: lexical units?!

[p.10, left, 21-29]: the whole paragraph needs to be rephrased;  
[p.10, left, 23]: it is just needed -> rephrase 
[p.10, left, 26]: and it is this file 
[p.10, left, 27]: remove "latter" 
[p.10, left, 29]: what's the "pos"? 
[p.10, left, 34]: s/pipeline/workflow/ 
[p.10, left, 48]: what's "application lodgement" and why is it a special case?
[p.10, right, 27]: similarily to the events
[p.10, right, 49]: "annotated xml and as a visual HTML" -> what's a visual HTML and how is it different from a "non-visual" HTML? why is xml lowercase while HTML is uppercase? 
```

## FT3 Ontology
---

``` 
[p.11, left, 46]: s/double-folded/twofold

[p.12, left, 26-28]: what implementations?  
[p.12, left, 28-29]: abstract classes? so you are talking about classes in your implementation and not ones of the ontology? 
[p.12, left, 30]: such as for the class temporal..
[p.12, left, 32]: remove "as an exemplary"
[p.12, left, 34]: according to whom?
[p.12, left, 44]: there's a whitespace in `ft3:Temporal Expression`
[p.12, left, 47]: s/Time./time./
[p.12, left, 48]: "the Time ontology" -> OWL Time?
[p.12, left, 51]: also add
[p.12, right, 40-44]: I would appreciate some .ttl that go along with your claim
[p.12, right, 50]: s/about/between/

[Fig. 8-9]: Printed out, both figures are barely readable as the labels are super small.. Maybe try spanning them over both columns to make them bigger?

[p.13, left, 12]: s/correference/coreference/ (-> fix throughout the whole paper!)
[p.13, left, 14]: an annotation attached
[p.13, left, 17]: what's a "midpoint" in that context? union, intersection, hybrid, merge, ..?
[p.13, left, 20]: "actual happening" -> rephrase 
[p.13, left, 25]: remove "it is"

[p.13, right, 39]: what are "periodic temporal"? 
[p.13, right, 40]: what's the "only expression"?

[p.14, left, 5]: specific use of what?
[p.14, left, 13]: s/Another way/
[p.14, left, 27]: what are the two possible results? 
[p.14, left, 30-34]: please shorten and rephrase the entire paragraph.. 
[p.14, left, 34-38]: but there >is< a correct way of interpreting an event.. it just depends on the situation and particularities, the context, and requirements as you state.
[p.14, left, 39]: guarantee sounds a bit too ambitious.. even with the best and most extensive documentation out there, there is no guarantee that people will use your ontology.

[p.14, left, 44]: link overflows the columns
[p.14, left, 45-46]: "mainly consisting about minor coments and with no critical pitfalls" -> what?
[p.14, left, 46]: checked on

```

## FromTimetoTime Converter
---

``` 
[p.14, right, 1]: on [p.11, left, 45] you introduce FT3 as "fromTimeToTime" -> fix section header
[p.14, right, 3]: "lacks" is not correct here, rephrase!
[p.14, right, 6]: what further tasks?
[p.14, right, 7]: options for what?
[p.14, right, 9-10]: bridge between DL and pure NLP tasks? 
[p.14, right, 11]: "lack" is also the wrong word here; also, "this lack" == ?
[p.14, right, 17]: s/in/into/
[p.14, right, 18-40]: try using a \begin{description} environment.. maybe this makes the list a bit more readable
[p.14, right, 44]: what's a "pivot class"? are you talking about the java implementation again? 
[p.14, right, 45]: "interlingua" means what in that context?
[p.14, right, 47]: and what's the value of the map?
[p.14, right, 48]: s/each/an/
[p.14, right, 49]: how, where and why are metatypes "assigned"? what are those "metatypes" in the first place?

[Fig. 12]: s/xsd:String/xsd:string/

[p.15, right, 46]: what's the "Document format"?
[p.15, right, 48]: what "new format"?
[p.15, right, 51]: "ontology format" == ? ft3?

[Fig. 14]: In contrast to Fig.12, `ft3:hasID` uses """ (BigString?) here instead of xsd:string.

[p.16, left, 37]: where did you mention that?
[p.16, left, 44]: "we created one individual in out ontology" -> what?

[Fig. 15-16]: 
     .) I'm pretty sure 3^^xsd:.. is not correct.. -> "3"^^xsd:..
     .) <https://fromtimetotime.linkeddata.es/doc/samples/doc002/Time_t1> is a property?
     .) why are the values of time:weeks, time:months xsd:decimal while ft3:repetitionTimes is xsd:nonNegativeInteger?
     .) alternative values -> alternative to what? s/values/representations/
 
[p.17, left, 27]: on the; add link to webpage via footnote
```

## Legal KG
---

``` 
[p.17, right, 1]: processes
[p.17, right, 2]: which are?
[p.17, right, 7]: "updated to the KG" == ? added to?
[p.17, right, 10]: queried via
[p.17, right, 11]: On this endpoint
[p.17, right, 14]: rephrase the last sentence
[p.17, right, 18]: what security reasons?
[p.17, right, 21]: the way triples are stored
[p.17, right, 24]: URL
[p.17, right, 26]: s/exploit/utilize/
[p.17, right, 27]: knowledge graph vs. Knowledge Graph (e.g. in [p.17, right, 35-36])
[p.17, right, 32]: s/alabi/alibi/
[p.17, right, 37]: for time-related 
[p.17, right, 38]: compared to what?
[p.18, left, 1-8]: Something like this doesn't exist already? 
```

## Conclusions
---

``` 
[p.18, left, 17]: rephrase 
[p.18, left, 31-32]: rephrase 
[p.18, left, 37]: not related to temporal
[p.18, right, 4]: foreign -> not familiar with

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
