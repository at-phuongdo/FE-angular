# Angular
[TOC]

## 1. Component
#### 1.1.  Briefly explain Event Binding in Angular?
Event Binding allow us to send information from view to the component.  Catch the child’s events from the parent.
We can wrapping  the event in `( )`, or by prefixing it with `on-`
#### 1.2. Briefly explain Data Binding in Angular?
There are four types of Data Binding:
 - Interpolation
 - One-way binding 
 - Two-way binding
 - Event binding
#### 1.3. What are Event Emitters and how it works in Angular?
Event Emitters and @Output create a custom event, the component use it to notify to the parent's component about something.
>@Output() myEvent: EventEmitter<string> = new EventEmitter<string>();

In child class, we use @Output and Event Emitter to send data as an event. Their parent will listen that event.
> <app-form (myEvent)="getName($event)"></app-form>

#### 1.4. Explain the life cycle hooks of Angular application?
- **ngOnChanges()** :  Called before ngOnInit() and when input properties change. It executes every time the value of an input property changes
- **ngOnInit()**:  Called once, called directly after the constructor and after ngOnChanges(). 
- **ngDoCheck()**:  Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
- **ngAfterContentInit()**:  Called once, after ngDoCheck(), when the component or directive’s content has been initialised
- **ngAfterContentChecked()**:  Called after the ngAfterContentInit() and ngDoCheck()
- **ngAfterViewInit()**: Called once after ngAfterContentChecked().
- **ngAfterViewChecked()**: Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
- **ngOnDestroy**: Called before Angular destroys the directive/component. It is  place to clean the component .
#### 1.5. Explain the `ContentChild` `ContentChildren` and write an example?
- `@ContentChild` and `@ContentChildren@` work the same way as the  `@ViewChild `and `@ViewChildren`

- However, the key difference is that `@ContentChild` and `@ContentChildren `select from the projected content within the component.

- `@ContentChild` and `@ContentChildren `queries will return directives existing inside the element of your view, whereas `@ViewChild `and `@ViewChildren `only look at elements that are on your view template directly.
## 2. Extra
**Briefly explain ElementRef in Angular? Write an example.**
```
import { Component, ViewChild, ElementRef } from '@angular/core'
@Component({
  selector: 'app-root',
  template: `
    <div>Test</div>
    <input type="text"#elmRef>
    <button (click)="getName()">Click me</button>
  `
})
export class HomeComponent{
  @ViewChild('elmRef') name:ElementRef;
  getName() {
    alert('Hello!');
    this.name.nativeElement.focus();
  }
}
```
