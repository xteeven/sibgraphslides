# Control 2nd Stage
ISO 9241-210:2010
## The context of use:
Identify the people who will use the product, what they will use it for, and under what conditions they will use it.

## Requeriments
Identify any business requirements or user goals that must be met for the product to be successful.

## Design Solutions
This part of the process may be done in stages, building from a rough concept to a complete design.

## Evaluate designs
Evaluation - ideally through usability testing with actual users - is as integral as quality testing is to good software development.

### UCD
- The design is based upon an explicit understanding of users, tasks and environments...
- Users are involved throughout design and development.
- The design is driven and refined by user-centered evaluation
- The process is iterative.
- The design addresses the whole user experience.
- The design team includes multidisciplinary skills and perspectives.

## DT
- Empathise with the potential user(s) of the product or service you’re designing for. You can do this by talking to such people using appropriate interview techniques, observing them using ethnographic techniques, or taking their role for a period of time.
- Synthesize your findings, and define/reframe the problem you’re trying to solve, focusing on the user’s viewpoint.
- Generate a large amount of ideas to solve the problem. Generate as many as possible in order to encourage innovation. Often, the first idea is too generic and not really innovative.
- To validate an idea, the simplest is to make a prototype of it. It doesn’t have to be high definition. A prototype should illustrate your idea in a way you can test it with people to see if it works. The important point here is not create an artefact of some sort that can be used, so that people can interact with it and critique (which is easier and more precise than critiquing ideas)
- Test your idea with people to see what works and what doesn’t, so that you can refine it.

## Nielsen´s Heuristics

- Visibility of system status: The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.
- Match between system and the real world: The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.
- User control and freedom: Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.
- Consistency and standards: Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.
- Error prevention: Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.
- Recognition rather than recall: Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.
- Flexibility and efficiency of use: Accelerators—unseen by the novice user—may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.
- Aesthetic and minimalist design: Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.
- Help users recognize, diagnose, and recover from errors: Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.
- Help and documentation: Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.

## Manual operation

Controle manual da operação - Tomada de ação

1. Controle Manual: Liga/Desliga as bombas de SGN. | Bool |
2. Controle Manual: Liga/Desliga o fluxo de SGN. | Bool |
3. Controle Manual: Liga/Desliga a locomotiva. | Bool
4. Controle Manual: Retorno da locomotiva: Situações:
    1. Desligar o circuito hidráulico de avanço e ligar o de retorno. | Bool
    2. Desligar todo o circuito hidráulico e retornar apenas pelo guincho. | Bool
5. Controle Manual: Avanço e recuo do cilindro principal. | Bool
6. Controle Manual: Avanço e recuo dos cilindros auxiliares. | Bool
7. Controle Manual: Velocidade do robô: pelo controle da rotação do motor/bomba. (OBS: Esse item de velocidade, acreditamos que possa ser interessante no momento da desobstrução. Mas, ao longo do percurso, a velocidade será a máxima que conseguimos com a vazão somada das bombas, que é de 0,03m/s)

## Cambios recomendados
Activar Modulo con boton interno en el mismo modulo: Approved
Prototipo V3: Anderson Approves.
Selector de modulos: Approved.
Feedback Modulos: Approved.
Nota: Crear Un modulo Con la V3 + Feedback Modulos
[ ] Correo Para preguntar que magnitud sera controlada para cambiar la velocidad.
[ ] Preguntar Especificamente acerca de los cilindros auxiliares 
