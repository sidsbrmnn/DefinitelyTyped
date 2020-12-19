// Type definitions for Tinytime 0.2.6
// Project: https://github.com/aweary/tinytime
// Definitions by: Siddharth Subramanian <https://github.com/sidsbrmnn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace tinytime {
    interface TinyTime {
        render: (date: Date) => string;
    }

    export interface TinyTimeOptions {
        padHours?: boolean;
        padDays?: boolean;
        padMonth?: boolean;
    }
}

declare function tinytime(template: string, options?: tinytime.TinyTimeOptions): tinytime.TinyTime;

export = tinytime;
