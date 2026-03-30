
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        __doNoAccess: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICloneable
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IEquatable$1<T>
        {
        }
        class Delegate extends System.Object implements System.Runtime.Serialization.ISerializable, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
        interface MulticastDelegate
        { 
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
        }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        interface Action$1<T>
        { 
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
        }
        class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormattable
        {
        }
        interface ISpanFormattable
        {
        }
        class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IDisposable
        {
        }
        interface IFormatProvider
        {
        }
        class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
        {
            protected [__keep_incompatibility]: never;
            public get LongLength(): bigint;
            public get IsFixedSize(): boolean;
            public get IsReadOnly(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public get Length(): number;
            public get Rank(): number;
            public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
            public CopyTo ($array: System.Array, $index: number) : void
            public Clone () : any
            public static BinarySearch ($array: System.Array, $value: any) : number
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
            public CopyTo ($array: System.Array, $index: bigint) : void
            public GetLongLength ($dimension: number) : bigint
            public GetValue ($index: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
            public GetValue (...indices: bigint[]) : any
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
            public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
            public static IndexOf ($array: System.Array, $value: any) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static LastIndexOf ($array: System.Array, $value: any) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static Reverse ($array: System.Array) : void
            public static Reverse ($array: System.Array, $index: number, $length: number) : void
            public SetValue ($value: any, $index: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
            public SetValue ($value: any, ...indices: bigint[]) : void
            public static Sort ($array: System.Array) : void
            public static Sort ($array: System.Array, $index: number, $length: number) : void
            public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array) : void
            public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public GetLength ($dimension: number) : number
            public GetLowerBound ($dimension: number) : number
            public GetValue (...indices: number[]) : any
            public SetValue ($value: any, ...indices: number[]) : void
            public GetUpperBound ($dimension: number) : number
            public GetValue ($index: number) : any
            public GetValue ($index1: number, $index2: number) : any
            public GetValue ($index1: number, $index2: number, $index3: number) : any
            public SetValue ($value: any, $index: number) : void
            public SetValue ($value: any, $index1: number, $index2: number) : void
            public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
            public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
            public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
            public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
            public static Clear ($array: System.Array, $index: number, $length: number) : void
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public Initialize () : void
        }
        class Type extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            protected [__keep_incompatibility]: never;
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public static Missing : any
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public get IsSerializable(): boolean;
            public get ContainsGenericParameters(): boolean;
            public get IsVisible(): boolean;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get FullName(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get Module(): System.Reflection.Module;
            public get IsNested(): boolean;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get UnderlyingSystemType(): System.Type;
            public get IsTypeDefinition(): boolean;
            public get IsArray(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get IsGenericTypeParameter(): boolean;
            public get IsGenericMethodParameter(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsVariableBoundArray(): boolean;
            public get IsByRefLike(): boolean;
            public get HasElementType(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get GenericParameterPosition(): number;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get IsAbstract(): boolean;
            public get IsImport(): boolean;
            public get IsSealed(): boolean;
            public get IsSpecialName(): boolean;
            public get IsClass(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsCOMObject(): boolean;
            public get IsContextful(): boolean;
            public get IsCollectible(): boolean;
            public get IsEnum(): boolean;
            public get IsMarshalByRef(): boolean;
            public get IsPrimitive(): boolean;
            public get IsValueType(): boolean;
            public get IsSignatureType(): boolean;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get GUID(): System.Guid;
            public get BaseType(): System.Type;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get IsInterface(): boolean;
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public GetEnumNames () : System.Array$1<string>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public IsSubclassOf ($c: System.Type) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
            public GetType () : System.Type
            public GetElementType () : System.Type
            public GetArrayRank () : number
            public GetGenericTypeDefinition () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public IsInstanceOfType ($o: any) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public GetEnumUnderlyingType () : System.Type
            public GetEnumValues () : System.Array
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public MakeByRefType () : System.Type
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public MakePointerType () : System.Type
            public static MakeGenericSignatureType ($genericTypeDefinition: System.Type, ...typeArguments: System.Type[]) : System.Type
            public static MakeGenericMethodParameter ($position: number) : System.Type
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public static ReflectionOnlyGetType ($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
        }
        class ReadOnlySpan$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Span$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        class Byte extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Int64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        interface Action
        { 
        () : void; 
        Invoke?: () => void;
        }
        var Action: { new (func: () => void): Action; }
        interface Func$1<TResult>
        { 
        () : TResult; 
        Invoke?: () => TResult;
        }
        interface IAsyncResult
        {
        }
        interface Converter$2<TInput, TOutput>
        { 
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
        }
        interface Comparison$1<T>
        { 
        (x: T, y: T) : number; 
        Invoke?: (x: T, y: T) => number;
        }
        interface Predicate$1<T>
        { 
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
        }
        interface Action$2<T1, T2>
        { 
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
        }
        interface AsyncCallback
        { 
        (ar: System.IAsyncResult) : void; 
        Invoke?: (ar: System.IAsyncResult) => void;
        }
        var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
        class IntPtr extends System.ValueType implements System.Runtime.Serialization.ISerializable, System.IEquatable$1<System.IntPtr>
        {
            protected [__keep_incompatibility]: never;
        }
        interface Func$2<T, TResult>
        { 
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
        }
        interface Func$3<T1, T2, TResult>
        { 
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
        }
        class Exception extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
        }
        class Double extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
        }
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Guid extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>
        {
            protected [__keep_incompatibility]: never;
        }
        interface Func$4<T1, T2, T3, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
        }
    }
    namespace LLMAgent {
        class HttpBridge extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CancelAllRequests () : void
            public static SendStreamRequestAsync ($url: string, $method: string, $headersJson: string, $body: string, $onHeader: System.Action$1<string>, $onChunk: System.Action$1<string>, $onComplete: System.Action$1<string>) : void
            public static SendRequestAsync ($url: string, $method: string, $headersJson: string, $body: string, $callback: System.Action$1<string>) : void
        }
        class UnityLogBridge extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static StartListening () : void
            public static StopListening () : void
            public static SetBufferSize ($size: number) : void
            public static ClearLogs () : void
            public static GetRecentLogs ($count: number, $logType: string) : string
            public static GetLogSummary () : string
        }
        class ScreenCaptureBridge extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CaptureScreenAsync ($maxWidth: number, $maxHeight: number, $callback: System.Action$1<string>) : void
            public static CaptureSceneViewAsync ($maxWidth: number, $maxHeight: number, $callback: System.Action$1<string>) : void
            public static GetSceneViewState () : string
            public static ManipulateSceneView ($operation: string, $direction: string, $amount: number, $callback: System.Action$1<string>) : void
            public static GetGameObjectHierarchy ($name: string, $depth: number) : string
            public static SelectGameObject ($name: string) : string
            public static SetSceneViewCamera ($px: number, $py: number, $pz: number, $setPivot: boolean, $rx: number, $ry: number, $rz: number, $setRotation: boolean, $size: number) : string
            public static FocusSceneViewOn ($gameObjectName: string) : string
            public static SaveScene () : string
        }
        class TypeReflectionBridge extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetAllNamespaces () : string
            public static GetTypesInNamespaces ($namespacesComma: string) : string
            public static GetTypeDetails ($typeNamesComma: string) : string
            public static InvalidateCache () : void
        }
        class ScriptEnvBridge extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CreateJavaScriptEnv () : Puerts.ScriptEnv
            public static Eval ($env: Puerts.ScriptEnv, $script: string, $onFinish: System.Action$1<string>) : void
            public static EvalSync ($env: Puerts.ScriptEnv, $script: string) : void
            public static Tick ($env: Puerts.ScriptEnv) : void
            public constructor ()
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public [Symbol.iterator]() : IterableIterator<T>
        }
        interface IComparer$1<T>
        {
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IEnumerator
        {
        }
        interface IComparer
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        interface IDeserializationCallback
        {
        }
    }
    namespace Puerts {
        class ScriptEnv extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            public TickHandler : System.Action
            public get Backend(): Puerts.Backend;
            public AddRegisterInfoGetter ($type: System.Type, $getter: System.Func$1<Puerts.TypeMapping.RegisterInfo>) : void
            public GetTypeByString ($className: string) : System.Type
            public GetLoader () : any
            public LoadAddon ($name: string) : void
            public ExecuteModule ($specifier: string) : Puerts.ScriptObject
            public Eval ($chunk: string, $chunkName?: string) : void
            public Tick () : void
            public WaitDebugger () : void
            public WaitDebuggerAsync () : $Task<any>
            public Dispose () : void
            public CheckLiveness ($shouldThrow?: boolean) : boolean
            public constructor ($backend: Puerts.Backend, $debugPort?: number)
        }
        class Backend extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ScriptObject extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine {
        /** Representation of 3D vectors and points.
        */
        class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
        {
            protected [__keep_incompatibility]: never;
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            /** Z component of the vector.
            */
            public z : number
            /** Returns a normalized vector based on the current vector. The normalized vector has a magnitude of 1 and is in the same direction as the current vector. Returns a zero vector If the current vector is too small to be normalized.
            */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0).
            */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1).
            */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1).
            */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1).
            */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0).
            */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0).
            */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0).
            */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0).
            */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors.
            */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors.
            */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param $current The vector being managed.
            * @param $target The vector.
            * @param $maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param $maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param $a Start value, returned when t = 0.
            * @param $b End value, returned when t = 1.
            * @param $t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param $current The position to move from.
            * @param $target The position to move towards.
            * @param $maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param $current The current position.
            * @param $target The position we are trying to reach.
            * @param $currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param $smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param $maxSpeed Optionally allows you to clamp the maximum speed.
            * @param $deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param $current The current position.
            * @param $target The position we are trying to reach.
            * @param $currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param $smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param $maxSpeed Optionally allows you to clamp the maximum speed.
            * @param $deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param $current The current position.
            * @param $target The position we are trying to reach.
            * @param $currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param $smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param $maxSpeed Optionally allows you to clamp the maximum speed.
            * @param $deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3.
            */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors.
            */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal.
            * @param $inDirection The direction vector towards the plane.
            * @param $inNormal The normal vector that defines the plane.
            */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a normalized vector based on the given vector. The normalized vector has a magnitude of 1 and is in the same direction as the given vector. Returns a zero vector If the given vector is too small to be normalized.
            * @param $value The vector to be normalized.
            * @returns A new vector with the same direction as the original vector but with a magnitude of 1.0. 
            */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1.
            */
            public Normalize () : void
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector.
            */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane.
            * @param $vector The vector to project on the plane.
            * @param $planeNormal The normal which defines the plane to project on.
            * @returns The orthogonal projection of vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Calculates the angle between two vectors.
            * @param $from The vector from which the angular difference is measured.
            * @param $to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Calculates the signed angle between vectors from and to in relation to axis.
            * @param $from The vector from which the angular difference is measured.
            * @param $to The vector to which the angular difference is measured.
            * @param $axis A vector around which the other vectors are rotated.
            * @returns Returns the signed angle between from and to in degrees. 
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
        }
        /** The Resources class allows you to find and access Objects including assets.
        */
        class Resources extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns a list of all objects of Type type.
            */
            public static FindObjectsOfTypeAll ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
            * @param $path Path to the target resource to load.
            * @param $systemTypeInstance Type filter for objects returned.
            * @returns The requested asset returned as an Object. 
            */
            public static Load ($path: string) : UnityEngine.Object
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
            * @param $path Path to the target resource to load.
            * @param $systemTypeInstance Type filter for objects returned.
            * @returns The requested asset returned as an Object. 
            */
            public static Load ($path: string, $systemTypeInstance: System.Type) : UnityEngine.Object
            /** Asynchronously loads an asset stored at path in a Resources folder.
            * @param $path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            */
            public static LoadAsync ($path: string) : UnityEngine.ResourceRequest
            /** Asynchronously loads an asset stored at path in a Resources folder.
            * @param $path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            * @param $systemTypeInstance Type filter for objects returned.
            */
            public static LoadAsync ($path: string, $type: System.Type) : UnityEngine.ResourceRequest
            /** Loads all assets in a folder or file at path in a Resources folder.
            * @param $path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            * @param $systemTypeInstance Type filter for objects returned.
            */
            public static LoadAll ($path: string, $systemTypeInstance: System.Type) : System.Array$1<UnityEngine.Object>
            /** Loads all assets in a folder or file at path in a Resources folder.
            * @param $path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            */
            public static LoadAll ($path: string) : System.Array$1<UnityEngine.Object>
            public static GetBuiltinResource ($type: System.Type, $path: string) : UnityEngine.Object
            /** Unloads assetToUnload from memory.
            */
            public static UnloadAsset ($assetToUnload: UnityEngine.Object) : void
            /** Unloads assets that are not used.
            * @returns Object on which you can yield to wait until the operation completes. 
            */
            public static UnloadUnusedAssets () : UnityEngine.AsyncOperation
            /** Translates an instance ID to an object reference.
            * @param $instanceID Instance ID of an Object.
            * @returns Resolved reference or null if the instance ID didn't match anything. 
            */
            public static InstanceIDToObject ($instanceID: number) : UnityEngine.Object
            public static InstanceIDToObjectList ($instanceIDs: Unity.Collections.NativeArray$1<number>, $objects: System.Collections.Generic.List$1<UnityEngine.Object>) : void
            /** Returns true if the given instance ID corresponds to a valid Object in memory. The Object could have been deleted or not loaded into memory yet.
            * @param $instanceID ID of an Object.
            */
            public static InstanceIDIsValid ($instanceId: number) : boolean
            public static InstanceIDsToValidArray ($instanceIDs: Unity.Collections.NativeArray$1<number>, $validArray: Unity.Collections.NativeArray$1<boolean>) : void
            public constructor ()
        }
        /** Base class for all objects Unity can reference.
        */
        class Object extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The name of the object.
            */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user?
            */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            /** Gets  the instance ID of the object.
            * @returns Returns the instance ID of the object. 
            */
            public GetInstanceID () : number
            public static op_Implicit ($exists: UnityEngine.Object) : boolean
            public static InstantiateAsync ($original: UnityEngine.Object) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $count: number) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $count: number, $parent: UnityEngine.Transform) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $count: number, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $count: number, $parent: UnityEngine.Transform, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $parameters: UnityEngine.InstantiateParameters) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $count: number, $parameters: UnityEngine.InstantiateParameters) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parameters: UnityEngine.InstantiateParameters) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            public static InstantiateAsync ($original: UnityEngine.Object, $count: number, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parameters: UnityEngine.InstantiateParameters) : UnityEngine.AsyncInstantiateOperation$1<UnityEngine.Object>
            /** Clones the object original and returns the clone.
            * @param $original An existing object that you want to make a copy of.
            * @param $position Position for the new object.
            * @param $rotation Orientation of the new object.
            * @param $parent Parent that will be assigned to the new object.
            * @param $instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @param $parameters A struct containing all the parameters.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param $original An existing object that you want to make a copy of.
            * @param $position Position for the new object.
            * @param $rotation Orientation of the new object.
            * @param $parent Parent that will be assigned to the new object.
            * @param $instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @param $parameters A struct containing all the parameters.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param $original An existing object that you want to make a copy of.
            * @param $position Position for the new object.
            * @param $rotation Orientation of the new object.
            * @param $parent Parent that will be assigned to the new object.
            * @param $instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @param $parameters A struct containing all the parameters.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param $original An existing object that you want to make a copy of.
            * @param $position Position for the new object.
            * @param $rotation Orientation of the new object.
            * @param $parent Parent that will be assigned to the new object.
            * @param $instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @param $parameters A struct containing all the parameters.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $scene: UnityEngine.SceneManagement.Scene) : UnityEngine.Object
            public static Instantiate ($original: UnityEngine.Object, $parameters: UnityEngine.InstantiateParameters) : UnityEngine.Object
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parameters: UnityEngine.InstantiateParameters) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param $original An existing object that you want to make a copy of.
            * @param $position Position for the new object.
            * @param $rotation Orientation of the new object.
            * @param $parent Parent that will be assigned to the new object.
            * @param $instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @param $parameters A struct containing all the parameters.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param $original An existing object that you want to make a copy of.
            * @param $position Position for the new object.
            * @param $rotation Orientation of the new object.
            * @param $parent Parent that will be assigned to the new object.
            * @param $instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @param $parameters A struct containing all the parameters.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
            /** Removes a GameObject, component or asset.
            * @param $obj The object to destroy.
            * @param $t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object, $t: number) : void
            /** Removes a GameObject, component or asset.
            * @param $obj The object to destroy.
            * @param $t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
            * @param $obj Object to be destroyed.
            * @param $allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
            * @param $obj Object to be destroyed.
            * @param $allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object) : void
            /** Gets a list of all loaded objects of Type type.
            * @param $type The type of object to find.
            * @param $includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Gets a list of all loaded objects of Type type.
            * @param $type The type of object to find.
            * @param $includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
            /** Retrieves a list of all loaded objects of Type type.
            * @param $type The type of object to find.
            * @param $findObjectsInactive Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results.
            * @param $sortMode Whether and how to sort the returned array. Not sorting the array makes this function run significantly faster.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsByType ($type: System.Type, $sortMode: UnityEngine.FindObjectsSortMode) : System.Array$1<UnityEngine.Object>
            /** Retrieves a list of all loaded objects of Type type.
            * @param $type The type of object to find.
            * @param $findObjectsInactive Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results.
            * @param $sortMode Whether and how to sort the returned array. Not sorting the array makes this function run significantly faster.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsByType ($type: System.Type, $findObjectsInactive: UnityEngine.FindObjectsInactive, $sortMode: UnityEngine.FindObjectsSortMode) : System.Array$1<UnityEngine.Object>
            /** Do not destroy the target Object when loading a new Scene.
            * @param $target An Object not destroyed on Scene change.
            */
            public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
            /** Returns the first active loaded object of Type type.
            * @param $type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
            /** Retrieves the first active loaded object of Type type.
            * @param $type The type of object to find.
            * @param $findObjectsInactive Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results.
            * @returns Returns the first active loaded object that matches the specified type. If no object matches the specified type, returns null. 
            */
            public static FindFirstObjectByType ($type: System.Type) : UnityEngine.Object
            /** Retrieves any active loaded object of Type type.
            * @param $type The type of object to find.
            * @param $findObjectsInactive Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results.
            * @returns Returns an arbitrary active loaded object that matches the specified type. If no object matches the specified type, returns null. 
            */
            public static FindAnyObjectByType ($type: System.Type) : UnityEngine.Object
            /** Returns the first active loaded object of Type type.
            * @param $type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
            /** Retrieves the first active loaded object of Type type.
            * @param $type The type of object to find.
            * @param $findObjectsInactive Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results.
            * @returns Returns the first active loaded object that matches the specified type. If no object matches the specified type, returns null. 
            */
            public static FindFirstObjectByType ($type: System.Type, $findObjectsInactive: UnityEngine.FindObjectsInactive) : UnityEngine.Object
            /** Retrieves any active loaded object of Type type.
            * @param $type The type of object to find.
            * @param $findObjectsInactive Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results.
            * @returns Returns an arbitrary active loaded object that matches the specified type. If no object matches the specified type, returns null. 
            */
            public static FindAnyObjectByType ($type: System.Type, $findObjectsInactive: UnityEngine.FindObjectsInactive) : UnityEngine.Object
            public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public constructor ()
        }
        /** Base class for all yield instructions.
        */
        class YieldInstruction extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Asynchronous operation coroutine.
        */
        class AsyncOperation extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
        }
        /** Asynchronous load request from the Resources bundle.
        */
        class ResourceRequest extends UnityEngine.AsyncOperation
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for custom yield instructions to suspend coroutines.
        */
        class CustomYieldInstruction extends System.Object implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
        }
        class AsyncInstantiateOperation$1<T> extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for everything attached to a GameObject.
        */
        class Component extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object.
            */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object.
            */
            public get tag(): string;
            public set tag(value: string);
            /** The non-generic version of this method.
            * @param $type The type of Component to retrieve.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** The string-based version of this method.
            * @param $type The name of the type of Component to get.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** This is the non-generic version of this method.
            * @param $t The type of component to search for.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** This is the non-generic version of this method.
            * @param $t The type of component to search for.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $t The type of component to search for.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns An array of all found components matching the specified type. 
            */
            public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** The non-generic version of this method.
            * @param $t The type of component to search for.
            * @param $includeInactive Whether to include inactive parent GameObjects in the search.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $t The type of component to search for.
            * @param $includeInactive Whether to include inactive parent GameObjects in the search.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($t: System.Type) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $t The type of component to search for.
            * @param $includeInactive Whether to include inactive parent GameObjects in the search.
            * @returns An array of all found components matching the specified type. 
            */
            public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @returns An array containing all matching components of type type. 
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Gets the index of the component on its parent GameObject.
            * @returns The component index. 
            */
            public GetComponentIndex () : number
            /** Checks the GameObject's tag against the defined tag.
            * @param $tag The tag to compare.
            * @returns Returns true if GameObject has same tag. Returns false otherwise. 
            */
            public CompareTag ($tag: string) : boolean
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param $methodName Name of method to call.
            * @param $value Optional parameter value for the method.
            * @param $options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param $methodName Name of method to call.
            * @param $value Optional parameter value for the method.
            * @param $options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param $methodName Name of method to call.
            * @param $value Optional parameter value for the method.
            * @param $options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param $methodName Name of method to call.
            * @param $value Optional parameter value for the method.
            * @param $options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param $methodName Name of the method to call.
            * @param $value Optional parameter for the method.
            * @param $options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param $methodName Name of the method to call.
            * @param $value Optional parameter for the method.
            * @param $options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param $methodName Name of the method to call.
            * @param $value Optional parameter for the method.
            * @param $options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param $methodName Name of the method to call.
            * @param $value Optional parameter for the method.
            * @param $options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param $methodName Name of the method to call.
            * @param $parameter Optional parameter to pass to the method (can be any value).
            * @param $options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param $methodName Name of the method to call.
            * @param $parameter Optional parameter to pass to the method (can be any value).
            * @param $options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param $methodName Name of the method to call.
            * @param $parameter Optional parameter to pass to the method (can be any value).
            * @param $options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param $methodName Name of the method to call.
            * @param $parameter Optional parameter to pass to the method (can be any value).
            * @param $options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public constructor ()
        }
        /** Position, rotation and scale of an object.
        */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** The world space position of the Transform.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform.
            */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation.
            */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space.
            */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space.
            */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space.
            */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent.
            */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent.
            */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform.
            */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only).
            */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only).
            */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy.
            */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has.
            */
            public get childCount(): number;
            /** The global scale of the object (Read Only).
            */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'?
            */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure.
            */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure.
            */
            public get hierarchyCount(): number;
            /** Set the parent of the transform.
            * @param $parent The parent Transform to use.
            * @param $worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($p: UnityEngine.Transform) : void
            /** Set the parent of the transform.
            * @param $parent The parent Transform to use.
            * @param $worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
            /** Sets the world space position and rotation of the Transform component.
            */
            public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Sets the position and rotation of the Transform component in local space (i.e. relative to its parent transform).
            */
            public SetLocalPositionAndRotation ($localPosition: UnityEngine.Vector3, $localRotation: UnityEngine.Quaternion) : void
            /** Gets the position and rotation of the Transform component in world space.
            */
            public GetPositionAndRotation ($position: $Ref<UnityEngine.Vector3>, $rotation: $Ref<UnityEngine.Quaternion>) : void
            /** Gets the position and rotation of the Transform component in local space (that is, relative to its parent transform).
            */
            public GetLocalPositionAndRotation ($localPosition: $Ref<UnityEngine.Vector3>, $localRotation: $Ref<UnityEngine.Quaternion>) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param $eulers The rotation to apply in euler angles.
            * @param $relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
            */
            public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param $eulers The rotation to apply in euler angles.
            */
            public Rotate ($eulers: UnityEngine.Vector3) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param $xAngle Degrees to rotate the GameObject around the X axis.
            * @param $yAngle Degrees to rotate the GameObject around the Y axis.
            * @param $zAngle Degrees to rotate the GameObject around the Z axis.
            * @param $relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param $xAngle Degrees to rotate the GameObject around the X axis.
            * @param $yAngle Degrees to rotate the GameObject around the Y axis.
            * @param $zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param $axis The axis to apply rotation to.
            * @param $angle The degrees of rotation to apply.
            * @param $relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param $axis The axis to apply rotation to.
            * @param $angle The degrees of rotation to apply.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees.
            */
            public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param $target Object to point towards.
            * @param $worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param $target Object to point towards.
            * @param $worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param $worldPosition Point to look at.
            * @param $worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param $worldPosition Point to look at.
            * @param $worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3) : void
            /** Transforms direction from local space to world space.
            */
            public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms direction x, y, z from local space to world space.
            */
            public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms vector from local space to world space.
            */
            public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms vector x, y, z from local space to world space.
            */
            public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from local space to world space.
            */
            public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from local space to world space.
            */
            public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from world space to local space.
            */
            public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from world space to local space.
            */
            public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Unparents all children.
            */
            public DetachChildren () : void
            /** Move the transform to the start of the local transform list.
            */
            public SetAsFirstSibling () : void
            /** Move the transform to the end of the local transform list.
            */
            public SetAsLastSibling () : void
            /** Sets the sibling index.
            * @param $index Index to set.
            */
            public SetSiblingIndex ($index: number) : void
            /** Gets the sibling index.
            */
            public GetSiblingIndex () : number
            /** Finds a child by name n and returns it.
            * @param $n Name of child to be found.
            * @returns The found child transform. Null if child with matching name isn't found. 
            */
            public Find ($n: string) : UnityEngine.Transform
            /** Is this transform a child of parent?
            */
            public IsChildOf ($parent: UnityEngine.Transform) : boolean
            public GetEnumerator () : System.Collections.IEnumerator
            /** Returns a transform child by index.
            * @param $index Index of the child transform to return. Must be smaller than Transform.childCount.
            * @returns Transform child by index. 
            */
            public GetChild ($index: number) : UnityEngine.Transform
        }
        /** Quaternions are used to represent rotations.
        */
        class Quaternion extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Quaternion>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public x : number
            /** Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public y : number
            /** Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public z : number
            /** W component of the Quaternion. Do not directly modify quaternions.
            */
            public w : number
            public static kEpsilon : number
            /** The identity rotation (Read Only).
            */
            public static get identity(): UnityEngine.Quaternion;
            /** Returns or sets the euler angle representation of the rotation in degrees.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** Returns this quaternion with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Quaternion;
            /** Creates a rotation from fromDirection to toDirection.
            * @param $fromDirection A non-unit or unit vector representing a direction axis to rotate.
            * @param $toDirection A non-unit or unit vector representing the target direction axis.
            * @returns A unit quaternion which rotates from fromDirection to toDirection. 
            */
            public static FromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Returns the Inverse of rotation.
            */
            public static Inverse ($rotation: UnityEngine.Quaternion) : UnityEngine.Quaternion
            /** Spherically linear interpolates between unit quaternions a and b by a ratio of t.
            * @param $a Start unit quaternion value, returned when t = 0.
            * @param $b End unit quaternion value, returned when t = 1.
            * @param $t Interpolation ratio. Value is clamped to the range [0, 1].
            * @returns A unit quaternion spherically interpolated between quaternions a and b. 
            */
            public static Slerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Spherically linear interpolates between unit quaternions a and b by t.
            * @param $a Start unit quaternion value, returned when t = 0.
            * @param $b End unit quaternion value, returned when t = 1.
            * @param $t Interpolation ratio. Value is unclamped.
            * @returns A unit quaternion spherically interpolated between unit quaternions a and b. 
            */
            public static SlerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards.
            * @param $a Start unit quaternion value, returned when t = 0.
            * @param $b End unit quaternion value, returned when t = 1.
            * @param $t Interpolation ratio. The value is clamped to the range [0, 1].
            * @returns A unit quaternion interpolated between quaternions a and b. 
            */
            public static Lerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped.
            */
            public static LerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Creates a rotation which rotates angle degrees around axis.
            */
            public static AngleAxis ($angle: number, $axis: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions.
            * @param $forward The direction to look in.
            * @param $upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3, $upwards: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions.
            * @param $forward The direction to look in.
            * @param $upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3) : UnityEngine.Quaternion
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Quaternion.
            */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            public static op_Multiply ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public static op_Multiply ($rotation: UnityEngine.Quaternion, $point: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            public static op_Inequality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            /** The dot product between two rotations.
            */
            public static Dot ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Creates a rotation with the specified forward and upwards directions.
            * @param $view The direction to look in.
            * @param $up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3) : void
            /** Creates a rotation with the specified forward and upwards directions.
            * @param $view The direction to look in.
            * @param $up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3, $up: UnityEngine.Vector3) : void
            /** Returns the angle in degrees between two rotations a and b. The resulting angle ranges from 0 to 180.
            */
            public static Angle ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order.
            */
            public static Euler ($x: number, $y: number, $z: number) : UnityEngine.Quaternion
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
            */
            public static Euler ($euler: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Converts a rotation to angle-axis representation (angles in degrees).
            */
            public ToAngleAxis ($angle: $Ref<number>, $axis: $Ref<UnityEngine.Vector3>) : void
            /** Creates a rotation which rotates from fromDirection to toDirection.
            */
            public SetFromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : void
            /** Rotates a rotation from towards to.
            * @param $from The unit quaternion to be aligned with to.
            * @param $to The target unit quaternion.
            * @param $maxDegreesDelta The maximum angle in degrees allowed for this rotation.
            * @returns A unit quaternion rotated towards to by an angular step of maxDegreesDelta. 
            */
            public static RotateTowards ($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $maxDegreesDelta: number) : UnityEngine.Quaternion
            /** Converts this quaternion to a quaternion with the same orientation but with a magnitude of 1.0.
            */
            public static Normalize ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public Normalize () : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Quaternion) : boolean
            /** Returns a formatted string for this quaternion.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this quaternion.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this quaternion.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
        }
        /** Parameters for Object.Instantiate and Object.InstantiateAsync.
        */
        class InstantiateParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Options to specify if and how to sort objects returned by a function.
        */
        enum FindObjectsSortMode
        { None = 0, InstanceID = 1 }
        /** Options to control whether object find functions return inactive objects.
        */
        enum FindObjectsInactive
        { Exclude = 0, Include = 1 }
        /** Bit mask that controls object destruction, saving and visibility in inspectors.
        */
        enum HideFlags
        { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Represents a raw text or binary file asset.
        */
        class TextAsset extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The raw bytes of the text asset. (Read Only)
            */
            public get bytes(): System.Array$1<number>;
            /** The text contents of the file as a string. (Read Only)
            */
            public get text(): string;
            /** The size of the text asset data in bytes. (Read Only)
            */
            public get dataSize(): bigint;
            public constructor ()
            public constructor ($text: string)
        }
        /** Class containing methods to ease debugging while developing a game.
        */
        class Debug extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Get default debug logger.
            */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Allows you to enable or disable the developer console.
            */
            public static get developerConsoleEnabled(): boolean;
            public static set developerConsoleEnabled(value: boolean);
            /** Controls whether the development console is visible.
            */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build".
            */
            public static get isDebugBuild(): boolean;
            /** Draws a line between specified start and end points.
            * @param $start Point in world space where the line should start.
            * @param $end Point in world space where the line should end.
            * @param $color Color of the line.
            * @param $duration How long the line should be visible for.
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line between specified start and end points.
            * @param $start Point in world space where the line should start.
            * @param $end Point in world space where the line should end.
            * @param $color Color of the line.
            * @param $duration How long the line should be visible for.
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line between specified start and end points.
            * @param $start Point in world space where the line should start.
            * @param $end Point in world space where the line should end.
            * @param $color Color of the line.
            * @param $duration How long the line should be visible for.
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
            /** Draws a line between specified start and end points.
            * @param $start Point in world space where the line should start.
            * @param $end Point in world space where the line should end.
            * @param $color Color of the line.
            * @param $duration How long the line should be visible for.
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param $start Point in world space where the ray should start.
            * @param $dir Direction and length of the ray.
            * @param $color Color of the drawn line.
            * @param $duration How long the line will be visible for (in seconds).
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param $start Point in world space where the ray should start.
            * @param $dir Direction and length of the ray.
            * @param $color Color of the drawn line.
            * @param $duration How long the line will be visible for (in seconds).
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param $start Point in world space where the ray should start.
            * @param $dir Direction and length of the ray.
            * @param $color Color of the drawn line.
            * @param $duration How long the line will be visible for (in seconds).
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param $start Point in world space where the ray should start.
            * @param $dir Direction and length of the ray.
            * @param $color Color of the drawn line.
            * @param $duration How long the line will be visible for (in seconds).
            * @param $depthTest Determines whether objects closer to the camera obscure the line.
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            /** Pauses the editor.
            */
            public static Break () : void
            public static DebugBreak () : void
            /** Logs a message to the Unity Console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static Log ($message: any) : void
            /** Logs a message to the Unity Console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static Log ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted message to the Unity Console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            * @param $logType Type of message e.g. warn or error etc.
            * @param $logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            * @param $logType Type of message e.g. warn or error etc.
            * @param $logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            * @param $logType Type of message e.g. warn or error etc.
            * @param $logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static LogError ($message: any) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static LogError ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted error message to the Unity console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static LogErrorFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted error message to the Unity console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Clears errors from the developer console.
            */
            public static ClearDeveloperConsole () : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param $context Object to which the message applies.
            * @param $exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param $context Object to which the message applies.
            * @param $exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
            /** A variant of Debug.Log that logs a warning message to the console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static LogWarning ($message: any) : void
            /** A variant of Debug.Log that logs a warning message to the console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static LogWarning ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted warning message to the Unity Console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static LogWarningFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted warning message to the Unity Console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param $condition Condition you expect to be true.
            * @param $context Object to which the message applies.
            * @param $message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param $condition Condition you expect to be true.
            * @param $context Object to which the message applies.
            * @param $message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param $condition Condition you expect to be true.
            * @param $context Object to which the message applies.
            * @param $message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any) : void
            public static Assert ($condition: boolean, $message: string) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param $condition Condition you expect to be true.
            * @param $context Object to which the message applies.
            * @param $message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
            public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure.
            * @param $condition Condition you expect to be true.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure.
            * @param $condition Condition you expect to be true.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an assertion message to the console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static LogAssertion ($message: any) : void
            /** A variant of Debug.Log that logs an assertion message to the console.
            * @param $message String or object to be converted to string representation for display.
            * @param $context Object to which the message applies.
            */
            public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted assertion message to the Unity console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static LogAssertionFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted assertion message to the Unity console.
            * @param $format A composite format string.
            * @param $args Format arguments.
            * @param $context Object to which the message applies.
            */
            public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public constructor ()
        }
        interface ILogger extends UnityEngine.ILogHandler
        {
        }
        interface ILogHandler
        {
        }
        /** Representation of RGBA colors.
        */
        class Color extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Color>
        {
            protected [__keep_incompatibility]: never;
            /** Red component of the color.
            */
            public r : number
            /** Green component of the color.
            */
            public g : number
            /** Blue component of the color.
            */
            public b : number
            /** Alpha component of the color (0 is transparent, 1 is opaque).
            */
            public a : number
            /** Solid red. RGBA is (1, 0, 0, 1).
            */
            public static get red(): UnityEngine.Color;
            /** Solid green. RGBA is (0, 1, 0, 1).
            */
            public static get green(): UnityEngine.Color;
            /** Solid blue. RGBA is (0, 0, 1, 1).
            */
            public static get blue(): UnityEngine.Color;
            /** Solid white. RGBA is (1, 1, 1, 1).
            */
            public static get white(): UnityEngine.Color;
            /** Solid black. RGBA is (0, 0, 0, 1).
            */
            public static get black(): UnityEngine.Color;
            /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at!
            */
            public static get yellow(): UnityEngine.Color;
            /** Cyan. RGBA is (0, 1, 1, 1).
            */
            public static get cyan(): UnityEngine.Color;
            /** Magenta. RGBA is (1, 0, 1, 1).
            */
            public static get magenta(): UnityEngine.Color;
            /** Gray. RGBA is (0.5, 0.5, 0.5, 1).
            */
            public static get gray(): UnityEngine.Color;
            /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1).
            */
            public static get grey(): UnityEngine.Color;
            /** Completely transparent. RGBA is (0, 0, 0, 0).
            */
            public static get clear(): UnityEngine.Color;
            /** The grayscale value of the color. (Read Only)
            */
            public get grayscale(): number;
            /** A linear value of an sRGB color.
            */
            public get linear(): UnityEngine.Color;
            /** A version of the color that has had the gamma curve applied.
            */
            public get gamma(): UnityEngine.Color;
            /** Returns the maximum color component value: Max(r,g,b).
            */
            public get maxColorComponent(): number;
            /** Returns a formatted string of this color.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string of this color.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string of this color.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Color) : boolean
            public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
            public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            /** Linearly interpolates between colors a and b by t.
            * @param $a Color a.
            * @param $b Color b.
            * @param $t Float for combining a and b.
            */
            public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            /** Linearly interpolates between colors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Calculates the hue, saturation and value of an RGB input color.
            * @param $rgbColor An input color.
            * @param $H Output variable for hue.
            * @param $S Output variable for saturation.
            * @param $V Output variable for value.
            */
            public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
            /** Creates an RGB colour from HSV input.
            * @param $H Hue [0..1].
            * @param $S Saturation [0..1].
            * @param $V Brightness value [0..1].
            * @param $hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
            /** Creates an RGB colour from HSV input.
            * @param $H Hue [0..1].
            * @param $S Saturation [0..1].
            * @param $V Brightness value [0..1].
            * @param $hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
            public constructor ($r: number, $g: number, $b: number, $a: number)
            public constructor ($r: number, $g: number, $b: number)
        }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback.
        */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Option flags for specifying special treatment of a log message.
        */
        enum LogOption
        { None = 0, NoStacktrace = 1 }
        /** Provides an interface to get time information from Unity.
        */
        class Time extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The time at the beginning of the current frame in seconds since the start of the application (Read Only).
            */
            public static get time(): number;
            /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.
            */
            public static get timeAsDouble(): number;
            /** The time in seconds since the last non-additive scene finished loading (Read Only).
            */
            public static get timeSinceLevelLoad(): number;
            /** The double precision time in seconds since the last non-additive scene finished loading (Read Only).
            */
            public static get timeSinceLevelLoadAsDouble(): number;
            /** The interval in seconds from the last frame to the current one (Read Only).
            */
            public static get deltaTime(): number;
            /** The time at which the current MonoBehaviour.FixedUpdate started in seconds since the start of the game (Read Only).
            */
            public static get fixedTime(): number;
            /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedTimeAsDouble(): number;
            /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game.
            */
            public static get unscaledTime(): number;
            /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game.
            */
            public static get unscaledTimeAsDouble(): number;
            /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedUnscaledTime(): number;
            /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedUnscaledTimeAsDouble(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only).
            */
            public static get unscaledDeltaTime(): number;
            /** The interval in seconds of timeScale-independent ("real") time at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed.(Read Only).
            */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds of in-game time at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed.
            */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames.
            */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only).
            */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates.
            */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes.
            */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames since the start of the game (Read Only).
            */
            public static get frameCount(): number;
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only).
            */
            public static get realtimeSinceStartup(): number;
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup. 
            */
            public static get realtimeSinceStartupAsDouble(): number;
            /** Slows your application’s playback time to allow Unity to save screenshots in between frames.
            */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime.
            */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false (Read Only).
            */
            public static get inFixedTimeStep(): boolean;
            public constructor ()
        }
        /** Provides access to application runtime data.
        */
        class Application extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns true when called in any kind of built Player, or when called in the Editor in Play mode (Read Only).
            */
            public static get isPlaying(): boolean;
            /** Whether the Player currently has focus (Read-only).
            */
            public static get isFocused(): boolean;
            /** Returns a GUID for this build (Read Only).
            */
            public static get buildGUID(): string;
            /** Determines whether the Player should run when the application is in the background
            */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only).
            */
            public static get isBatchMode(): boolean;
            /** Contains the path to the game data folder on the target device (Read Only).
            */
            public static get dataPath(): string;
            /** The path to the StreamingAssets  folder (Read Only).
            */
            public static get streamingAssetsPath(): string;
            /** Contains the path to a persistent data directory (Read-only).
            */
            public static get persistentDataPath(): string;
            /** Contains the path to a temporary data / cache directory (Read Only).
            */
            public static get temporaryCachePath(): string;
            /** The URL of the document. For WebGL, this is a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL (Read Only).
            */
            public static get absoluteURL(): string;
            /** The version of the Unity runtime used to play the content.
            */
            public static get unityVersion(): string;
            /** Returns application version number (Read Only).
            */
            public static get version(): string;
            /** Returns the name of the store or package that installed the application (Read Only).
            */
            public static get installerName(): string;
            /** Returns the application identifier at runtime. 
            */
            public static get identifier(): string;
            /** Returns application install mode (Read Only).
            */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            /** Returns application running in a sandbox environment (Read-only).
            */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            /** Returns application product name (Read Only).
            */
            public static get productName(): string;
            /** Returns application company name (Read Only).
            */
            public static get companyName(): string;
            /** A unique cloud project identifier. It is unique for every project (Read Only).
            */
            public static get cloudProjectId(): string;
            /** Specifies the target frame rate at which Unity tries to render your game.
            */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files.
            */
            public static get consoleLogPath(): string;
            /** Priority of background loading thread.
            */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built.
            */
            public static get genuine(): boolean;
            /** Returns true if application integrity can be confirmed.
            */
            public static get genuineCheckAvailable(): boolean;
            /** Returns the platform the game is running on (Read Only).
            */
            public static get platform(): UnityEngine.RuntimePlatform;
            /** Identifies whether the current Runtime platform is a known mobile platform.
            */
            public static get isMobilePlatform(): boolean;
            /** Is the current Runtime platform a known console platform.
            */
            public static get isConsolePlatform(): boolean;
            /** The language in which the user's operating system is running in.
            */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            /** Returns the type of internet reachability currently possible on the device.
            */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            /** Cancellation token raised on exiting Play mode (Editor) or on quitting the application (Read Only).
            */
            public static get exitCancellationToken(): System.Threading.CancellationToken;
            /** Whether the game is running inside the Unity Editor (Read Only).
            */
            public static get isEditor(): boolean;
            public static Quit ($exitCode: number) : void
            /** Quits the player application.
            * @param $exitCode An optional exit code to return when the player application terminates on Windows, Mac and Linux. Defaults to 0.
            */
            public static Quit () : void
            /** Unloads the Unity Player.
            */
            public static Unload () : void
            /** Checks if the streamed level can be loaded.
            */
            public static CanStreamedLevelBeLoaded ($levelIndex: number) : boolean
            /** Checks if the streamed level can be loaded.
            */
            public static CanStreamedLevelBeLoaded ($levelName: string) : boolean
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
            * @param $obj The object to test.
            * @returns True if the object is part of the playing world. 
            */
            public static IsPlaying ($obj: UnityEngine.Object) : boolean
            /** Is Unity activated with the Pro license?
            */
            public static HasProLicense () : boolean
            public static RequestAdvertisingIdentifierAsync ($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback) : boolean
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. 
            * @param $url The URL to open.
            */
            public static OpenURL ($url: string) : void
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly.
            */
            public static GetStackTraceLogType ($logType: UnityEngine.LogType) : UnityEngine.StackTraceLogType
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly.
            */
            public static SetStackTraceLogType ($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType) : void
            /** Request authorization to use the webcam or microphone on iOS and WebGL.
            */
            public static RequestUserAuthorization ($mode: UnityEngine.UserAuthorization) : UnityEngine.AsyncOperation
            /** Check if the user has authorized use of the webcam or microphone on iOS and WebGL.
            */
            public static HasUserAuthorization ($mode: UnityEngine.UserAuthorization) : boolean
            public static add_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static remove_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static add_memoryUsageChanged ($value: UnityEngine.Application.MemoryUsageChangedCallback) : void
            public static remove_memoryUsageChanged ($value: UnityEngine.Application.MemoryUsageChangedCallback) : void
            public static add_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static add_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static add_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static remove_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static add_focusChanged ($value: System.Action$1<boolean>) : void
            public static remove_focusChanged ($value: System.Action$1<boolean>) : void
            public static add_deepLinkActivated ($value: System.Action$1<string>) : void
            public static remove_deepLinkActivated ($value: System.Action$1<string>) : void
            public static add_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static remove_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static add_quitting ($value: System.Action) : void
            public static remove_quitting ($value: System.Action) : void
            public static add_unloading ($value: System.Action) : void
            public static remove_unloading ($value: System.Action) : void
            public constructor ()
        }
        /** Application installation mode (Read Only).
        */
        enum ApplicationInstallMode
        { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        /** Application sandbox type.
        */
        enum ApplicationSandboxType
        { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        /** Stack trace logging options.
        */
        enum StackTraceLogType
        { None = 0, ScriptOnly = 1, Full = 2 }
        /** Priority of a thread.
        */
        enum ThreadPriority
        { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** Use this enum to request permission from the user’s device for access to system features.
        */
        enum UserAuthorization
        { WebCam = 1, Microphone = 2 }
        /** The platform application is running. Returned by Application.platform.
        */
        enum RuntimePlatform
        { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = -1, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38, EmbeddedLinuxArm64 = 39, EmbeddedLinuxArm32 = 40, EmbeddedLinuxX64 = 41, EmbeddedLinuxX86 = 42, LinuxServer = 43, WindowsServer = 44, OSXServer = 45, QNXArm32 = 46, QNXArm64 = 47, QNXX64 = 48, QNXX86 = 49, VisionOS = 50 }
        /** The language the user's operating system is running in. Returned by Application.systemLanguage.
        */
        enum SystemLanguage
        { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Hindi = 42, Unknown = 43, Hungarian = 18 }
        /** Describes network reachability options.
        */
        enum NetworkReachability
        { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        /** Contains information about a change in the application's memory usage.
        */
        class ApplicationMemoryUsageChange extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for all entities in Unity Scenes.
        */
        class GameObject extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The layer the GameObject is in.
            */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only)
            */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene.
            */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags.
            */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this GameObject.
            */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of.
            */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in.
            */
            public get sceneCullingMask(): bigint;
            public get gameObject(): UnityEngine.GameObject;
            /** Creates a GameObject with a primitive mesh renderer and appropriate collider.
            * @param $type The type of primitive object to create.
            */
            public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
            /** The non-generic version of this method.
            * @param $type The type of Component to search for.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** The string-based version of this method.
            * @param $type The name of the type of Component to search for.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** This is the non-generic version of this method.
            * @param $type The type of Component to retrieve.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** This is the non-generic version of this method.
            * @param $type The type of Component to retrieve.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $includeInactive Whether to include inactive parent GameObjects in the search.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $includeInactive Whether to include inactive parent GameObjects in the search.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($type: System.Type) : UnityEngine.Component
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @returns An array containing all matching components of type type. 
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns An array of all found components matching the specified type. 
            */
            public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $includeInactive Whether to include inactive child GameObjects in the search.
            * @returns An array of all found components matching the specified type. 
            */
            public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $includeInactive Whether to include inactive parent GameObjects in the search.
            * @returns An array of all found components matching the specified type. 
            */
            public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            /** The non-generic version of this method.
            * @param $type The type of component to search for.
            * @param $component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found.
            * @param $tag The tag to search for.
            */
            public static FindWithTag ($tag: string) : UnityEngine.GameObject
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Adds a component class of type componentType to the GameObject. C# Users can use a generic version.
            */
            public AddComponent ($componentType: System.Type) : UnityEngine.Component
            /** Returns the number of components on this GameObject.
            * @returns The number of components. 
            */
            public GetComponentCount () : number
            /** Gets a reference to a component of type T at a specific index on the specified GameObject.
            * @param $index The component index.
            * @returns A reference to a component of the type T at an index. Otherwise, returns null. 
            */
            public GetComponentAtIndex ($index: number) : UnityEngine.Component
            /** Gets the index of the component specified on the specified GameObject.
            * @param $component The component to search for.
            * @returns The component index. Otherwise, returns -1. 
            */
            public GetComponentIndex ($component: UnityEngine.Component) : number
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value.
            * @param $value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
            */
            public SetActive ($value: boolean) : void
            /** Is this GameObject tagged with tag ?
            * @param $tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found.
            * @param $tag The name of the tag to search GameObjects for.
            */
            public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
            /** Calls the method named methodName on every MonoBehaviour in this GameObject and on every ancestor of the behaviour.
            * @param $methodName The name of the method to call.
            * @param $value An optional parameter value to pass to the called method.
            * @param $options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject and on every ancestor of the behaviour.
            * @param $methodName The name of the method to call.
            * @param $value An optional parameter value to pass to the called method.
            * @param $options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject and on every ancestor of the behaviour.
            * @param $methodName The name of the method to call.
            * @param $value An optional parameter value to pass to the called method.
            * @param $options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject.
            * @param $methodName The name of the method to call.
            * @param $value An optional parameter value to pass to the called method.
            * @param $options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject.
            * @param $methodName The name of the method to call.
            * @param $value An optional parameter value to pass to the called method.
            * @param $options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject.
            * @param $methodName The name of the method to call.
            * @param $value An optional parameter value to pass to the called method.
            * @param $options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject or any of its children.
            */
            public BroadcastMessage ($methodName: string) : void
            /** Finds a GameObject by name and returns it.
            */
            public static Find ($name: string) : UnityEngine.GameObject
            public static SetGameObjectsActive ($instanceIDs: Unity.Collections.NativeArray$1<number>, $active: boolean) : void
            public static InstantiateGameObjects ($sourceInstanceID: number, $count: number, $newInstanceIDs: Unity.Collections.NativeArray$1<number>, $newTransformInstanceIDs: Unity.Collections.NativeArray$1<number>, $destinationScene?: UnityEngine.SceneManagement.Scene) : void
            /** Returns the Scene of a GameObject given by instance ID.
            * @param $instanceID The instance ID of a GameObject.
            * @returns Scene of GameObject of instance ID. 
            */
            public static GetScene ($instanceID: number) : UnityEngine.SceneManagement.Scene
            public constructor ($name: string)
            public constructor ()
            public constructor ($name: string, ...components: System.Type[])
        }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function.
        */
        enum PrimitiveType
        { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Options for how to send a message.
        */
        enum SendMessageOptions
        { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** A standard 4x4 transformation matrix.
        */
        class Matrix4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Matrix4x4>
        {
            protected [__keep_incompatibility]: never;
            public m00 : number
            public m10 : number
            public m20 : number
            public m30 : number
            public m01 : number
            public m11 : number
            public m21 : number
            public m31 : number
            public m02 : number
            public m12 : number
            public m22 : number
            public m32 : number
            public m03 : number
            public m13 : number
            public m23 : number
            public m33 : number
            /** Attempts to get a rotation quaternion from this matrix.
            */
            public get rotation(): UnityEngine.Quaternion;
            /** Attempts to get a scale value from the matrix. (Read Only)
            */
            public get lossyScale(): UnityEngine.Vector3;
            /** Checks whether this is an identity matrix. (Read Only)
            */
            public get isIdentity(): boolean;
            /** The determinant of the matrix. (Read Only)
            */
            public get determinant(): number;
            /** This property takes a projection matrix and returns the six plane coordinates that define a projection frustum.
            */
            public get decomposeProjection(): UnityEngine.FrustumPlanes;
            /** The inverse of this matrix. (Read Only)
            */
            public get inverse(): UnityEngine.Matrix4x4;
            /** Returns the transpose of this matrix (Read Only).
            */
            public get transpose(): UnityEngine.Matrix4x4;
            /** Returns a matrix with all elements set to zero (Read Only).
            */
            public static get zero(): UnityEngine.Matrix4x4;
            /** Returns the identity matrix (Read Only).
            */
            public static get identity(): UnityEngine.Matrix4x4;
            /** Checks if this matrix is a valid transform matrix.
            */
            public ValidTRS () : boolean
            public static Determinant ($m: UnityEngine.Matrix4x4) : number
            /** Creates a translation, rotation and scaling matrix.
            */
            public static TRS ($pos: UnityEngine.Vector3, $q: UnityEngine.Quaternion, $s: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** Sets this matrix to a translation, rotation and scaling matrix.
            */
            public SetTRS ($pos: UnityEngine.Vector3, $q: UnityEngine.Quaternion, $s: UnityEngine.Vector3) : void
            /** Computes the inverse of a 3D affine matrix.
            * @param $input Input matrix to invert.
            * @param $result The result of the inversion. Equal to the input matrix if the function fails.
            * @returns Returns true and a valid result if the function succeeds, false and a copy of the input matrix if the function fails. 
            */
            public static Inverse3DAffine ($input: UnityEngine.Matrix4x4, $result: $Ref<UnityEngine.Matrix4x4>) : boolean
            public static Inverse ($m: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
            public static Transpose ($m: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
            /** Create an orthogonal projection matrix.
            * @param $left Left-side x-coordinate.
            * @param $right Right-side x-coordinate.
            * @param $bottom Bottom y-coordinate.
            * @param $top Top y-coordinate.
            * @param $zNear Near depth clipping plane value.
            * @param $zFar Far depth clipping plane value.
            * @returns The projection matrix. 
            */
            public static Ortho ($left: number, $right: number, $bottom: number, $top: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
            /** Create a perspective projection matrix.
            * @param $fov Vertical field-of-view in degrees.
            * @param $aspect Aspect ratio (width divided by height).
            * @param $zNear Near depth clipping plane value.
            * @param $zFar Far depth clipping plane value.
            * @returns The projection matrix. 
            */
            public static Perspective ($fov: number, $aspect: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
            /** Create a "look at" matrix.
            * @param $from The source point.
            * @param $to The target point.
            * @param $up The vector describing the up direction (typically Vector3.up).
            * @returns The resulting transformation matrix. 
            */
            public static LookAt ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $up: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** This function returns a projection matrix with viewing frustum that has a near plane defined by the coordinates that were passed in.
            * @param $left The X coordinate of the left side of the near projection plane in view space.
            * @param $right The X coordinate of the right side of the near projection plane in view space.
            * @param $bottom The Y coordinate of the bottom side of the near projection plane in view space.
            * @param $top The Y coordinate of the top side of the near projection plane in view space.
            * @param $zNear Z distance to the near plane from the origin in view space.
            * @param $zFar Z distance to the far plane from the origin in view space.
            * @param $frustumPlanes Frustum planes struct that contains the view space coordinates of that define a viewing frustum.
            * @returns A projection matrix with a viewing frustum defined by the plane coordinates passed in. 
            */
            public static Frustum ($left: number, $right: number, $bottom: number, $top: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
            /** This function returns a projection matrix with viewing frustum that has a near plane defined by the coordinates that were passed in.
            * @param $left The X coordinate of the left side of the near projection plane in view space.
            * @param $right The X coordinate of the right side of the near projection plane in view space.
            * @param $bottom The Y coordinate of the bottom side of the near projection plane in view space.
            * @param $top The Y coordinate of the top side of the near projection plane in view space.
            * @param $zNear Z distance to the near plane from the origin in view space.
            * @param $zFar Z distance to the far plane from the origin in view space.
            * @param $frustumPlanes Frustum planes struct that contains the view space coordinates of that define a viewing frustum.
            * @returns A projection matrix with a viewing frustum defined by the plane coordinates passed in. 
            */
            public static Frustum ($fp: UnityEngine.FrustumPlanes) : UnityEngine.Matrix4x4
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Matrix4x4) : boolean
            public static op_Multiply ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
            public static op_Multiply ($lhs: UnityEngine.Matrix4x4, $vector: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Equality ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : boolean
            public static op_Inequality ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : boolean
            /** Get a column of the matrix.
            */
            public GetColumn ($index: number) : UnityEngine.Vector4
            /** Returns a row of the matrix.
            */
            public GetRow ($index: number) : UnityEngine.Vector4
            /** Get position vector from the matrix.
            */
            public GetPosition () : UnityEngine.Vector3
            /** Sets a column of the matrix.
            */
            public SetColumn ($index: number, $column: UnityEngine.Vector4) : void
            /** Sets a row of the matrix.
            */
            public SetRow ($index: number, $row: UnityEngine.Vector4) : void
            /** Transforms a position by this matrix (generic).
            */
            public MultiplyPoint ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a position by this matrix (fast).
            */
            public MultiplyPoint3x4 ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a direction by this matrix.
            */
            public MultiplyVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a plane that is transformed in space.
            */
            public TransformPlane ($plane: UnityEngine.Plane) : UnityEngine.Plane
            /** Creates a scaling matrix.
            */
            public static Scale ($vector: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** Creates a translation matrix.
            */
            public static Translate ($vector: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** Creates a rotation matrix.
            */
            public static Rotate ($q: UnityEngine.Quaternion) : UnityEngine.Matrix4x4
            /** Returns a formatted string for this matrix.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this matrix.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this matrix.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($column0: UnityEngine.Vector4, $column1: UnityEngine.Vector4, $column2: UnityEngine.Vector4, $column3: UnityEngine.Vector4)
        }
        /** The coordinate space in which to operate.
        */
        enum Space
        { World = 0, Self = 1 }
        /** Position, size, anchor and pivot information for a rectangle.
        */
        class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** The calculated rectangle in the local space of the Transform.
            */
            public get rect(): UnityEngine.Rect;
            /** The normalized position in the parent RectTransform that the lower left corner is anchored to.
            */
            public get anchorMin(): UnityEngine.Vector2;
            public set anchorMin(value: UnityEngine.Vector2);
            /** The normalized position in the parent RectTransform that the upper right corner is anchored to.
            */
            public get anchorMax(): UnityEngine.Vector2;
            public set anchorMax(value: UnityEngine.Vector2);
            /** The position of the pivot of this RectTransform relative to the anchor reference point.
            */
            public get anchoredPosition(): UnityEngine.Vector2;
            public set anchoredPosition(value: UnityEngine.Vector2);
            /** The size of this RectTransform relative to the distances between the anchors.
            */
            public get sizeDelta(): UnityEngine.Vector2;
            public set sizeDelta(value: UnityEngine.Vector2);
            /** The normalized position in this RectTransform that it rotates around.
            */
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            /** The 3D position of the pivot of this RectTransform relative to the anchor reference point.
            */
            public get anchoredPosition3D(): UnityEngine.Vector3;
            public set anchoredPosition3D(value: UnityEngine.Vector3);
            /** The offset of the lower left corner of the rectangle relative to the lower left anchor.
            */
            public get offsetMin(): UnityEngine.Vector2;
            public set offsetMin(value: UnityEngine.Vector2);
            /** The offset of the upper right corner of the rectangle relative to the upper right anchor.
            */
            public get offsetMax(): UnityEngine.Vector2;
            public set offsetMax(value: UnityEngine.Vector2);
            /** The object that is driving the values of this RectTransform. Value is null if not driven.
            */
            public get drivenByObject(): UnityEngine.Object;
            public static add_reapplyDrivenProperties ($value: UnityEngine.RectTransform.ReapplyDrivenProperties) : void
            public static remove_reapplyDrivenProperties ($value: UnityEngine.RectTransform.ReapplyDrivenProperties) : void
            /** Force the recalculation of RectTransforms internal data.
            */
            public ForceUpdateRectTransforms () : void
            /** Get the corners of the calculated rectangle in the local space of its Transform.
            * @param $fourCornersArray The array that corners are filled into.
            */
            public GetLocalCorners ($fourCornersArray: System.Array$1<UnityEngine.Vector3>) : void
            /** Get the corners of the calculated rectangle in world space.
            * @param $fourCornersArray The array that corners are filled into.
            */
            public GetWorldCorners ($fourCornersArray: System.Array$1<UnityEngine.Vector3>) : void
            public SetInsetAndSizeFromParentEdge ($edge: UnityEngine.RectTransform.Edge, $inset: number, $size: number) : void
            public SetSizeWithCurrentAnchors ($axis: UnityEngine.RectTransform.Axis, $size: number) : void
            public constructor ()
        }
        /** A 2D Rectangle defined by X and Y position, width and height.
        */
        class Rect extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Rect>
        {
            protected [__keep_incompatibility]: never;
            /** Shorthand for writing new Rect(0,0,0,0).
            */
            public static get zero(): UnityEngine.Rect;
            /** The X coordinate of the rectangle.
            */
            public get x(): number;
            public set x(value: number);
            /** The Y coordinate of the rectangle.
            */
            public get y(): number;
            public set y(value: number);
            /** The X and Y position of the rectangle.
            */
            public get position(): UnityEngine.Vector2;
            public set position(value: UnityEngine.Vector2);
            /** The position of the center of the rectangle.
            */
            public get center(): UnityEngine.Vector2;
            public set center(value: UnityEngine.Vector2);
            /** The position of the minimum corner of the rectangle.
            */
            public get min(): UnityEngine.Vector2;
            public set min(value: UnityEngine.Vector2);
            /** The position of the maximum corner of the rectangle.
            */
            public get max(): UnityEngine.Vector2;
            public set max(value: UnityEngine.Vector2);
            /** The width of the rectangle, measured from the X position.
            */
            public get width(): number;
            public set width(value: number);
            /** The height of the rectangle, measured from the Y position.
            */
            public get height(): number;
            public set height(value: number);
            /** The width and height of the rectangle.
            */
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            /** The minimum X coordinate of the rectangle.
            */
            public get xMin(): number;
            public set xMin(value: number);
            /** The minimum Y coordinate of the rectangle.
            */
            public get yMin(): number;
            public set yMin(value: number);
            /** The maximum X coordinate of the rectangle.
            */
            public get xMax(): number;
            public set xMax(value: number);
            /** The maximum Y coordinate of the rectangle.
            */
            public get yMax(): number;
            public set yMax(value: number);
            /** Creates a rectangle from min/max coordinate values.
            * @param $xmin The minimum X coordinate.
            * @param $ymin The minimum Y coordinate.
            * @param $xmax The maximum X coordinate.
            * @param $ymax The maximum Y coordinate.
            * @returns A rectangle matching the specified coordinates. 
            */
            public static MinMaxRect ($xmin: number, $ymin: number, $xmax: number, $ymax: number) : UnityEngine.Rect
            /** Set components of an existing Rect.
            */
            public Set ($x: number, $y: number, $width: number, $height: number) : void
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param $point Point to test.
            * @param $allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector2) : boolean
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param $point Point to test.
            * @param $allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector3) : boolean
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param $point Point to test.
            * @param $allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector3, $allowInverse: boolean) : boolean
            /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param $other Other rectangle to test overlapping with.
            * @param $allowInverse Does the test allow the widths and heights of the Rects to be negative?
            */
            public Overlaps ($other: UnityEngine.Rect) : boolean
            /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param $other Other rectangle to test overlapping with.
            * @param $allowInverse Does the test allow the widths and heights of the Rects to be negative?
            */
            public Overlaps ($other: UnityEngine.Rect, $allowInverse: boolean) : boolean
            /** Returns a point inside a rectangle, given normalized coordinates.
            * @param $rectangle Rectangle to get a point inside.
            * @param $normalizedRectCoordinates Normalized coordinates to get a point for.
            */
            public static NormalizedToPoint ($rectangle: UnityEngine.Rect, $normalizedRectCoordinates: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the normalized coordinates cooresponding the the point.
            * @param $rectangle Rectangle to get normalized coordinates inside.
            * @param $point A point inside the rectangle to get normalized coordinates for.
            */
            public static PointToNormalized ($rectangle: UnityEngine.Rect, $point: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Inequality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
            public static op_Equality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Rect) : boolean
            /** Returns a formatted string for this Rect.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this Rect.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this Rect.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $width: number, $height: number)
            public constructor ($position: UnityEngine.Vector2, $size: UnityEngine.Vector2)
            public constructor ($source: UnityEngine.Rect)
        }
        /** Representation of 2D vectors and points.
        */
        class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** Returns a normalized vector based on the current vector. The normalized vector has a magnitude of 1 and is in the same direction as the current vector. Returns a zero vector If the current vector is too small to be normalized.
            */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0).
            */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1).
            */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1).
            */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1).
            */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0).
            */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0).
            */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector2;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x and y components of an existing Vector2.
            */
            public Set ($newX: number, $newY: number) : void
            /** Linearly interpolates between vectors a and b by t.
            */
            public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Linearly interpolates between vectors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Moves a point current towards target.
            */
            public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector2) : void
            /** Makes this vector have a magnitude of 1.
            */
            public Normalize () : void
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector2) : boolean
            /** Reflects a vector off the surface defined by a normal.
            * @param $inDirection The direction vector towards the surface.
            * @param $inNormal The normal vector that defines the surface.
            */
            public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
            * @param $inDirection The input direction.
            * @returns The perpendicular direction. 
            */
            public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
            /** Gets the unsigned angle in degrees between from and to.
            * @param $from The vector from which the angular difference is measured.
            * @param $to The vector to which the angular difference is measured.
            * @returns The unsigned angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Gets the signed angle in degrees between from and to.
            * @param $from The vector from which the angular difference is measured.
            * @param $to The vector to which the angular difference is measured.
            * @returns The signed angle in degrees between the two vectors. 
            */
            public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
            public static SqrMagnitude ($a: UnityEngine.Vector2) : number
            public SqrMagnitude () : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param $current The current position.
            * @param $target The position we are trying to reach.
            * @param $currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param $smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param $maxSpeed Optionally allows you to clamp the maximum speed.
            * @param $deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param $current The current position.
            * @param $target The position we are trying to reach.
            * @param $currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param $smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param $maxSpeed Optionally allows you to clamp the maximum speed.
            * @param $deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param $current The current position.
            * @param $target The position we are trying to reach.
            * @param $currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param $smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param $maxSpeed Optionally allows you to clamp the maximum speed.
            * @param $deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
            public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ($x: number, $y: number)
        }
        /** Behaviours are Components that can be enabled or disabled.
        */
        class Behaviour extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Enabled Behaviours are Updated, disabled Behaviours are not.
            */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Reports whether a GameObject and its associated Behaviour is active and enabled.
            */
            public get isActiveAndEnabled(): boolean;
            public constructor ()
        }
        /** MonoBehaviour is a base class that many Unity scripts derive from.
        */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Cancellation token raised when the MonoBehaviour is destroyed (Read Only).
            */
            public get destroyCancellationToken(): System.Threading.CancellationToken;
            /** Disabling this lets you skip the GUI layout phase.
            */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor).
            */
            public get runInEditMode(): boolean;
            public set runInEditMode(value: boolean);
            /** Is any invoke pending on this MonoBehaviour?
            */
            public IsInvoking () : boolean
            /** Cancels all Invoke calls on this MonoBehaviour.
            */
            public CancelInvoke () : void
            /** Invokes the method methodName in time seconds.
            */
            public Invoke ($methodName: string, $time: number) : void
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds.
            * @param $methodName The name of a method to invoke.
            * @param $time Start invoking after n seconds.
            * @param $repeatRate Repeat every n seconds.
            */
            public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
            /** Cancels all Invoke calls with name methodName on this behaviour.
            */
            public CancelInvoke ($methodName: string) : void
            /** Is any invoke on methodName pending?
            */
            public IsInvoking ($methodName: string) : boolean
            /** Starts a coroutine named methodName.
            */
            public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
            /** Starts a coroutine named methodName.
            */
            public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
            /** Starts a Coroutine.
            */
            public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour.
            * @param $methodName Name of coroutine.
            * @param $routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: System.Collections.IEnumerator) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour.
            * @param $methodName Name of coroutine.
            * @param $routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: UnityEngine.Coroutine) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour.
            * @param $methodName Name of coroutine.
            * @param $routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($methodName: string) : void
            /** Stops all coroutines running on this behaviour.
            */
            public StopAllCoroutines () : void
            /** Logs message to the Unity Console (identical to Debug.Log).
            */
            public static print ($message: any) : void
            public constructor ()
        }
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions.
        */
        class Coroutine extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of four-dimensional vectors.
        */
        class Vector4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector4>
        {
            protected [__keep_incompatibility]: never;
            public static kEpsilon : number
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            /** Z component of the vector.
            */
            public z : number
            /** W component of the vector.
            */
            public w : number
            /** Returns a normalized vector based on the current vector. The normalized vector has a magnitude of 1 and is in the same direction as the current vector. Returns a zero vector If the current vector is too small to be normalized.
            */
            public get normalized(): UnityEngine.Vector4;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector4(0,0,0,0).
            */
            public static get zero(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(1,1,1,1).
            */
            public static get one(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector4;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Vector4.
            */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            /** Linearly interpolates between two vectors.
            */
            public static Lerp ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4, $t: number) : UnityEngine.Vector4
            /** Linearly interpolates between two vectors.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4, $t: number) : UnityEngine.Vector4
            /** Moves a point current towards target.
            */
            public static MoveTowards ($current: UnityEngine.Vector4, $target: UnityEngine.Vector4, $maxDistanceDelta: number) : UnityEngine.Vector4
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector4) : void
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector4) : boolean
            /** Returns a normalized vector based on the given vector. The normalized vector has a magnitude of 1 and is in the same direction as the given vector. Returns a zero vector If the given vector is too small to be normalized.
            * @param $a The vector to be normalized.
            * @returns A new vector with the same direction as the original vector but with a magnitude of 1.0. 
            */
            public static Normalize ($a: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Makes this vector have a magnitude of 1.
            */
            public Normalize () : void
            /** Dot Product of two vectors.
            */
            public static Dot ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : number
            /** Projects a vector onto another vector.
            */
            public static Project ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : number
            public static Magnitude ($a: UnityEngine.Vector4) : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Addition ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Subtraction ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_UnaryNegation ($a: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Multiply ($a: UnityEngine.Vector4, $d: number) : UnityEngine.Vector4
            public static op_Multiply ($d: number, $a: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Division ($a: UnityEngine.Vector4, $d: number) : UnityEngine.Vector4
            public static op_Equality ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Vector3
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Vector2
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static SqrMagnitude ($a: UnityEngine.Vector4) : number
            public SqrMagnitude () : number
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
        }
        /** Representation of RGBA colors in 32 bit format.
        */
        class Color32 extends System.ValueType implements System.IFormattable
        {
            protected [__keep_incompatibility]: never;
            /** Red component of the color.
            */
            public r : number
            /** Green component of the color.
            */
            public g : number
            /** Blue component of the color.
            */
            public b : number
            /** Alpha component of the color.
            */
            public a : number
            public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Color32
            public static op_Implicit ($c: UnityEngine.Color32) : UnityEngine.Color
            /** Linearly interpolates between colors a and b by t.
            */
            public static Lerp ($a: UnityEngine.Color32, $b: UnityEngine.Color32, $t: number) : UnityEngine.Color32
            /** Linearly interpolates between colors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Color32, $b: UnityEngine.Color32, $t: number) : UnityEngine.Color32
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Returns a formatted string for this color.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this color.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this color.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($r: number, $g: number, $b: number, $a: number)
        }
        /** A collection of common math functions.
        */
        class Mathf extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The well-known 3.14159265358979... value (Read Only).
            */
            public static PI : number
            /** A representation of positive infinity (Read Only).
            */
            public static Infinity : number
            /** A representation of negative infinity (Read Only).
            */
            public static NegativeInfinity : number
            /** Degrees-to-radians conversion constant (Read Only).
            */
            public static Deg2Rad : number
            /** Radians-to-degrees conversion constant (Read Only).
            */
            public static Rad2Deg : number
            /** A tiny floating point value (Read Only).
            */
            public static Epsilon : number
            /** Returns the closest power of two value.
            */
            public static ClosestPowerOfTwo ($value: number) : number
            /** Returns true if the value is power of two.
            */
            public static IsPowerOfTwo ($value: number) : boolean
            /** Returns the next power of two that is equal to, or greater than, the argument.
            */
            public static NextPowerOfTwo ($value: number) : number
            /** Converts the given value from gamma (sRGB) to linear color space.
            */
            public static GammaToLinearSpace ($value: number) : number
            /** Converts the given value from linear to gamma (sRGB) color space.
            */
            public static LinearToGammaSpace ($value: number) : number
            /** Convert a color temperature in Kelvin to RGB color.
            * @param $kelvin Temperature in Kelvin. Range 1000 to 40000 Kelvin.
            * @returns Correlated Color Temperature as floating point RGB color. 
            */
            public static CorrelatedColorTemperatureToRGB ($kelvin: number) : UnityEngine.Color
            /** Encode a floating point value into a 16-bit representation.
            * @param $val The floating point value to convert.
            * @returns The converted half-precision float, stored in a 16-bit unsigned integer. 
            */
            public static FloatToHalf ($val: number) : number
            /** Convert a half precision float to a 32-bit floating point value.
            * @param $val The half precision value to convert.
            * @returns The decoded 32-bit float. 
            */
            public static HalfToFloat ($val: number) : number
            /** Generate 2D Perlin noise.
            * @param $x X-coordinate of sample point.
            * @param $y Y-coordinate of sample point.
            * @returns Value between 0.0 and 1.0. (Return value might be slightly below 0.0 or beyond 1.0.) 
            */
            public static PerlinNoise ($x: number, $y: number) : number
            /** Generates a 1D pseudo-random pattern of float values across a 2D plane.
            * @param $x The X-coordinate of the given sample point.
            * @returns A value in the range of 0.0 and 1.0. The value might be slightly higher or lower than this range. 
            */
            public static PerlinNoise1D ($x: number) : number
            /** Returns the sine of angle f.
            * @param $f The input angle, in radians.
            * @returns The return value between -1 and +1. 
            */
            public static Sin ($f: number) : number
            /** Returns the cosine of angle f.
            * @param $f The input angle, in radians.
            * @returns The return value between -1 and 1. 
            */
            public static Cos ($f: number) : number
            /** Returns the tangent of angle f in radians.
            */
            public static Tan ($f: number) : number
            /** Returns the arc-sine of f - the angle in radians whose sine is f.
            */
            public static Asin ($f: number) : number
            /** Returns the arc-cosine of f - the angle in radians whose cosine is f.
            */
            public static Acos ($f: number) : number
            /** Returns the arc-tangent of f - the angle in radians whose tangent is f.
            */
            public static Atan ($f: number) : number
            /** Returns the angle in radians whose Tan is y/x.
            */
            public static Atan2 ($y: number, $x: number) : number
            /** Returns square root of f.
            */
            public static Sqrt ($f: number) : number
            /** Returns the absolute value of f.
            */
            public static Abs ($f: number) : number
            /** Returns the absolute value of value.
            */
            public static Abs ($value: number) : number
            /** Returns the smallest of two or more values.
            */
            public static Min ($a: number, $b: number) : number
            /** Returns the smallest of two or more values.
            */
            public static Min (...values: number[]) : number
            /** Returns the largest of two or more values. When comparing negative values, values closer to zero are considered larger.
            */
            public static Max ($a: number, $b: number) : number
            /** Returns the largest of two or more values. When comparing negative values, values closer to zero are considered larger.
            */
            public static Max (...values: number[]) : number
            /** Returns f raised to power p.
            */
            public static Pow ($f: number, $p: number) : number
            /** Returns e raised to the specified power.
            */
            public static Exp ($power: number) : number
            /** Returns the logarithm of a specified number in a specified base.
            */
            public static Log ($f: number, $p: number) : number
            /** Returns the natural (base e) logarithm of a specified number.
            */
            public static Log ($f: number) : number
            /** Returns the base 10 logarithm of a specified number.
            */
            public static Log10 ($f: number) : number
            /** Returns the smallest integer greater than or equal to f.
            */
            public static Ceil ($f: number) : number
            /** Returns the largest integer smaller than or equal to f.
            */
            public static Floor ($f: number) : number
            /** Returns f rounded to the nearest integer.
            */
            public static Round ($f: number) : number
            /** Returns the smallest integer greater to or equal to f.
            */
            public static CeilToInt ($f: number) : number
            /** Returns the largest integer smaller to or equal to f.
            */
            public static FloorToInt ($f: number) : number
            /** Returns f rounded to the nearest integer.
            */
            public static RoundToInt ($f: number) : number
            /** Returns the sign of f.
            */
            public static Sign ($f: number) : number
            /** Clamps the given value between the given minimum float and maximum float values.  Returns the given value if it is within the minimum and maximum range.
            * @param $value The floating point value to restrict inside the range defined by the minimum and maximum values.
            * @param $min The minimum floating point value to compare against.
            * @param $max The maximum floating point value to compare against.
            * @returns The float result between the minimum and maximum values. 
            */
            public static Clamp ($value: number, $min: number, $max: number) : number
            /** Clamps value between 0 and 1 and returns value.
            */
            public static Clamp01 ($value: number) : number
            /** Linearly interpolates between a and b by t.
            * @param $a The start value.
            * @param $b The end value.
            * @param $t The interpolation value between the two floats.
            * @returns The interpolated float result between the two float values. 
            */
            public static Lerp ($a: number, $b: number, $t: number) : number
            /** Linearly interpolates between a and b by t with no limit to t.
            * @param $a The start value.
            * @param $b The end value.
            * @param $t The interpolation between the two floats.
            * @returns The float value as a result from the linear interpolation. 
            */
            public static LerpUnclamped ($a: number, $b: number, $t: number) : number
            /** Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
            * @param $a The start angle. A float expressed in degrees.
            * @param $b The end angle. A float expressed in degrees.
            * @param $t The interpolation value between the start and end angles. This value is clamped to the range [0, 1].
            * @returns Returns the interpolated float result between angle a and angle b, based on the interpolation value t. 
            */
            public static LerpAngle ($a: number, $b: number, $t: number) : number
            /** Moves a value current towards target.
            * @param $current The current value.
            * @param $target The value to move towards.
            * @param $maxDelta The maximum change applied to the current value.
            */
            public static MoveTowards ($current: number, $target: number, $maxDelta: number) : number
            /** Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
            */
            public static MoveTowardsAngle ($current: number, $target: number, $maxDelta: number) : number
            /** Interpolates between min and max with smoothing at the limits.
            */
            public static SmoothStep ($from: number, $to: number, $t: number) : number
            public static Gamma ($value: number, $absmax: number, $gamma: number) : number
            /** Compares two floating point values and returns true if they are similar.
            */
            public static Approximately ($a: number, $b: number) : boolean
            /** Gradually moves the current value towards a target value, over a specified time and at a specified velocity.
            * @param $current The current value.
            * @param $target The target value.
            * @param $currentVelocity Use this parameter to specify the initial velocity to move the current value towards the target value. This method updates the currentVelocity based on this movement and smooth-damping.
            * @param $smoothTime The approximate time it takes for the current value to reach the target value. The lower the smoothTime, the faster the current value reaches the target value. The minimum smoothTime is 0.0001. If a lower value is specified, it is clamped to the minimum value.
            * @param $maxSpeed Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity.
            * @param $deltaTime The time since this method was last called. By default, this is set to `Time.deltaTime`.
            * @returns The current value after moving one step towards the target value. 
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually moves the current value towards a target value, over a specified time and at a specified velocity.
            * @param $current The current value.
            * @param $target The target value.
            * @param $currentVelocity Use this parameter to specify the initial velocity to move the current value towards the target value. This method updates the currentVelocity based on this movement and smooth-damping.
            * @param $smoothTime The approximate time it takes for the current value to reach the target value. The lower the smoothTime, the faster the current value reaches the target value. The minimum smoothTime is 0.0001. If a lower value is specified, it is clamped to the minimum value.
            * @param $maxSpeed Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity.
            * @param $deltaTime The time since this method was last called. By default, this is set to `Time.deltaTime`.
            * @returns The current value after moving one step towards the target value. 
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually moves the current value towards a target value, over a specified time and at a specified velocity.
            * @param $current The current value.
            * @param $target The target value.
            * @param $currentVelocity Use this parameter to specify the initial velocity to move the current value towards the target value. This method updates the currentVelocity based on this movement and smooth-damping.
            * @param $smoothTime The approximate time it takes for the current value to reach the target value. The lower the smoothTime, the faster the current value reaches the target value. The minimum smoothTime is 0.0001. If a lower value is specified, it is clamped to the minimum value.
            * @param $maxSpeed Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity.
            * @param $deltaTime The time since this method was last called. By default, this is set to `Time.deltaTime`.
            * @returns The current value after moving one step towards the target value. 
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time.
            * @param $current The current position.
            * @param $target The target position.
            * @param $currentVelocity The current velocity. This method modifies the currentVelocity every time the method is called.
            * @param $smoothTime The approximate time it takes to reach the target position. The lower the value the faster this method reaches the target. The minimum value is 0.0001. If a lower value is specified, it is automatically clamped to this minimum value.
            * @param $maxSpeed Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity.
            * @param $deltaTime The time since this method was last called. By default, this is set to `Time.deltaTime`.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time.
            * @param $current The current position.
            * @param $target The target position.
            * @param $currentVelocity The current velocity. This method modifies the currentVelocity every time the method is called.
            * @param $smoothTime The approximate time it takes to reach the target position. The lower the value the faster this method reaches the target. The minimum value is 0.0001. If a lower value is specified, it is automatically clamped to this minimum value.
            * @param $maxSpeed Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity.
            * @param $deltaTime The time since this method was last called. By default, this is set to `Time.deltaTime`.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time.
            * @param $current The current position.
            * @param $target The target position.
            * @param $currentVelocity The current velocity. This method modifies the currentVelocity every time the method is called.
            * @param $smoothTime The approximate time it takes to reach the target position. The lower the value the faster this method reaches the target. The minimum value is 0.0001. If a lower value is specified, it is automatically clamped to this minimum value.
            * @param $maxSpeed Use this optional parameter to specify a maximum speed. By default, the maximum speed is set to infinity.
            * @param $deltaTime The time since this method was last called. By default, this is set to `Time.deltaTime`.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Loops the value t, so that it is never larger than length and never smaller than 0.
            */
            public static Repeat ($t: number, $length: number) : number
            /** PingPong returns a value that increments and decrements between zero and the length. It follows the triangle wave formula where the bottom is set to zero and the peak is set to length.
            */
            public static PingPong ($t: number, $length: number) : number
            /** Determines where a value lies between two points.
            * @param $a The start of the range.
            * @param $b The end of the range.
            * @param $value The point within the range you want to calculate.
            * @returns A value between zero and one, representing where the "value" parameter falls within the range defined by a and b. 
            */
            public static InverseLerp ($a: number, $b: number, $value: number) : number
            /** Calculates the shortest difference between two angles.
            * @param $current The current angle in degrees.
            * @param $target The target angle in degrees.
            * @returns A value between -179 and 180, in degrees. 
            */
            public static DeltaAngle ($current: number, $target: number) : number
        }
        /** This struct contains the view space coordinates of the near projection plane.
        */
        class FrustumPlanes extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of a plane in 3D space.
        */
        class Plane extends System.ValueType implements System.IFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents an axis aligned bounding box.
        */
        class Bounds extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Bounds>
        {
            protected [__keep_incompatibility]: never;
            /** The center of the bounding box.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The total size of the box. This is always twice as large as the extents.
            */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            /** The extents of the Bounding Box. This is always half of the size of the Bounds.
            */
            public get extents(): UnityEngine.Vector3;
            public set extents(value: UnityEngine.Vector3);
            /** The minimal point of the box. This is always equal to center-extents.
            */
            public get min(): UnityEngine.Vector3;
            public set min(value: UnityEngine.Vector3);
            /** The maximal point of the box. This is always equal to center+extents.
            */
            public get max(): UnityEngine.Vector3;
            public set max(value: UnityEngine.Vector3);
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Bounds) : boolean
            public static op_Equality ($lhs: UnityEngine.Bounds, $rhs: UnityEngine.Bounds) : boolean
            public static op_Inequality ($lhs: UnityEngine.Bounds, $rhs: UnityEngine.Bounds) : boolean
            /** Sets the bounds to the min and max value of the box.
            */
            public SetMinMax ($min: UnityEngine.Vector3, $max: UnityEngine.Vector3) : void
            /** Grows the Bounds to include the point.
            */
            public Encapsulate ($point: UnityEngine.Vector3) : void
            /** Grow the bounds to encapsulate the bounds.
            */
            public Encapsulate ($bounds: UnityEngine.Bounds) : void
            /** Expand the bounds by increasing its size by amount along each side.
            */
            public Expand ($amount: number) : void
            /** Expand the bounds by increasing its size by amount along each side.
            */
            public Expand ($amount: UnityEngine.Vector3) : void
            /** Does another bounding box intersect with this bounding box?
            */
            public Intersects ($bounds: UnityEngine.Bounds) : boolean
            /** Does ray intersect this bounding box?
            */
            public IntersectRay ($ray: UnityEngine.Ray) : boolean
            /** Does ray intersect this bounding box?
            */
            public IntersectRay ($ray: UnityEngine.Ray, $distance: $Ref<number>) : boolean
            /** Returns a formatted string for the bounds.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for the bounds.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for the bounds.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Is point contained in the bounding box?
            */
            public Contains ($point: UnityEngine.Vector3) : boolean
            /** The smallest squared distance between the point and this bounding box.
            */
            public SqrDistance ($point: UnityEngine.Vector3) : number
            /** The closest point on the bounding box.
            * @param $point Arbitrary point.
            * @returns The point on the bounding box or inside the bounding box. 
            */
            public ClosestPoint ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            public constructor ($center: UnityEngine.Vector3, $size: UnityEngine.Vector3)
        }
        /** Representation of rays.
        */
        class Ray extends System.ValueType implements System.IFormattable
        {
            protected [__keep_incompatibility]: never;
            /** The origin point of the ray.
            */
            public get origin(): UnityEngine.Vector3;
            public set origin(value: UnityEngine.Vector3);
            /** The direction of the ray.
            */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** Returns a point at distance units along the ray.
            */
            public GetPoint ($distance: number) : UnityEngine.Vector3
            /** Returns a formatted string for this ray.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString () : string
            /** Returns a formatted string for this ray.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this ray.
            * @param $format A numeric format string.
            * @param $formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3)
        }
        /** A Camera is a device through which the player views the world.
        */
        class Camera extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** The minimum allowed aperture.
            */
            public static kMinAperture : number
            /** The maximum allowed aperture.
            */
            public static kMaxAperture : number
            /** The minimum blade count for the aperture diaphragm.
            */
            public static kMinBladeCount : number
            /** The maximum blade count for the aperture diaphragm.
            */
            public static kMaxBladeCount : number
            /** Delegate that you can use to execute custom code before a Camera culls the scene.
            */
            public static onPreCull : UnityEngine.Camera.CameraCallback
            /** Delegate that you can use to execute custom code before a Camera renders the scene.
            */
            public static onPreRender : UnityEngine.Camera.CameraCallback
            /** Delegate that you can use to execute custom code after a Camera renders the scene.
            */
            public static onPostRender : UnityEngine.Camera.CameraCallback
            /** The distance of the near clipping plane from the the Camera, in world units.
            */
            public get nearClipPlane(): number;
            public set nearClipPlane(value: number);
            /** The distance of the far clipping plane from the Camera, in world units.
            */
            public get farClipPlane(): number;
            public set farClipPlane(value: number);
            /** The vertical field of view of the Camera, in degrees.
            */
            public get fieldOfView(): number;
            public set fieldOfView(value: number);
            /** The rendering path that should be used, if possible.
            */
            public get renderingPath(): UnityEngine.RenderingPath;
            public set renderingPath(value: UnityEngine.RenderingPath);
            /** The rendering path that is currently being used (Read Only).
            */
            public get actualRenderingPath(): UnityEngine.RenderingPath;
            /** High dynamic range rendering.
            */
            public get allowHDR(): boolean;
            public set allowHDR(value: boolean);
            /** MSAA rendering.
            */
            public get allowMSAA(): boolean;
            public set allowMSAA(value: boolean);
            /** Dynamic Resolution Scaling.
            */
            public get allowDynamicResolution(): boolean;
            public set allowDynamicResolution(value: boolean);
            /** Should camera rendering be forced into a RenderTexture.
            */
            public get forceIntoRenderTexture(): boolean;
            public set forceIntoRenderTexture(value: boolean);
            /** Camera's half-size when in orthographic mode.
            */
            public get orthographicSize(): number;
            public set orthographicSize(value: number);
            /** Is the camera orthographic (true) or perspective (false)?
            */
            public get orthographic(): boolean;
            public set orthographic(value: boolean);
            /** Opaque object sorting mode.
            */
            public get opaqueSortMode(): UnityEngine.Rendering.OpaqueSortMode;
            public set opaqueSortMode(value: UnityEngine.Rendering.OpaqueSortMode);
            /** Transparent object sorting mode.
            */
            public get transparencySortMode(): UnityEngine.TransparencySortMode;
            public set transparencySortMode(value: UnityEngine.TransparencySortMode);
            /** An axis that describes the direction along which the distances of objects are measured for the purpose of sorting.
            */
            public get transparencySortAxis(): UnityEngine.Vector3;
            public set transparencySortAxis(value: UnityEngine.Vector3);
            /** Camera's depth in the camera rendering order.
            */
            public get depth(): number;
            public set depth(value: number);
            /** The aspect ratio (width divided by height).
            */
            public get aspect(): number;
            public set aspect(value: number);
            /** Get the world-space speed of the camera (Read Only).
            */
            public get velocity(): UnityEngine.Vector3;
            /** This is used to render parts of the Scene selectively.
            */
            public get cullingMask(): number;
            public set cullingMask(value: number);
            /** Mask to select which layers can trigger events on the camera.
            */
            public get eventMask(): number;
            public set eventMask(value: number);
            /** How to perform per-layer culling for a Camera.
            */
            public get layerCullSpherical(): boolean;
            public set layerCullSpherical(value: boolean);
            /** Identifies what kind of camera this is, using the CameraType enum.
            */
            public get cameraType(): UnityEngine.CameraType;
            public set cameraType(value: UnityEngine.CameraType);
            /** Sets the culling mask used to determine which objects from which Scenes to draw.
            See EditorSceneManager.SetSceneCullingMask.
            */
            public get overrideSceneCullingMask(): bigint;
            public set overrideSceneCullingMask(value: bigint);
            /** Per-layer culling distances.
            */
            public get layerCullDistances(): System.Array$1<number>;
            public set layerCullDistances(value: System.Array$1<number>);
            /** Whether or not the Camera will use occlusion culling during rendering.
            */
            public get useOcclusionCulling(): boolean;
            public set useOcclusionCulling(value: boolean);
            /** Sets a custom matrix for the camera to use for all culling queries.
            */
            public get cullingMatrix(): UnityEngine.Matrix4x4;
            public set cullingMatrix(value: UnityEngine.Matrix4x4);
            /** The color with which the screen will be cleared.
            */
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            /** How the camera clears the background.
            */
            public get clearFlags(): UnityEngine.CameraClearFlags;
            public set clearFlags(value: UnityEngine.CameraClearFlags);
            /** How and if camera generates a depth texture.
            */
            public get depthTextureMode(): UnityEngine.DepthTextureMode;
            public set depthTextureMode(value: UnityEngine.DepthTextureMode);
            /** Should the camera clear the stencil buffer after the deferred light pass?
            */
            public get clearStencilAfterLightingPass(): boolean;
            public set clearStencilAfterLightingPass(value: boolean);
            /** Enable usePhysicalProperties to use physical camera properties to compute the field of view and the frustum.
            */
            public get usePhysicalProperties(): boolean;
            public set usePhysicalProperties(value: boolean);
            /** The sensor sensitivity of the camera. To use this property, enable UsePhysicalProperties.
            */
            public get iso(): number;
            public set iso(value: number);
            /** The exposure time of the camera, in seconts. To use this property, enable UsePhysicalProperties.
            */
            public get shutterSpeed(): number;
            public set shutterSpeed(value: number);
            /** The camera aperture. To use this property, enable UsePhysicalProperties.
            */
            public get aperture(): number;
            public set aperture(value: number);
            /** The focus distance of the lens. To use this property, enable UsePhysicalProperties.
            */
            public get focusDistance(): number;
            public set focusDistance(value: number);
            /** The camera focal length, expressed in millimeters. To use this property, enable UsePhysicalProperties.
            */
            public get focalLength(): number;
            public set focalLength(value: number);
            /** The blade count in the lens of the camera. To use this property, enable UsePhysicalProperties.
            */
            public get bladeCount(): number;
            public set bladeCount(value: number);
            /** The curvature of the blades. To use this property, enable UsePhysicalProperties.
            */
            public get curvature(): UnityEngine.Vector2;
            public set curvature(value: UnityEngine.Vector2);
            /** The camera barrel clipping. To use this property, enable UsePhysicalProperties.
            */
            public get barrelClipping(): number;
            public set barrelClipping(value: number);
            /** The camera anamorphism. To use this property, enable UsePhysicalProperties.
            */
            public get anamorphism(): number;
            public set anamorphism(value: number);
            /** The size of the camera sensor, expressed in millimeters.
            */
            public get sensorSize(): UnityEngine.Vector2;
            public set sensorSize(value: UnityEngine.Vector2);
            /** The lens offset of the camera. The lens shift is relative to the sensor size. For example, a lens shift of 0.5 offsets the sensor by half its horizontal size.
            */
            public get lensShift(): UnityEngine.Vector2;
            public set lensShift(value: UnityEngine.Vector2);
            /** There are two gates for a camera, the sensor gate and the resolution gate. The physical camera sensor gate is defined by the sensorSize property, the resolution gate is defined by the render target area.
            */
            public get gateFit(): UnityEngine.Camera.GateFitMode;
            public set gateFit(value: UnityEngine.Camera.GateFitMode);
            /** Where on the screen is the camera rendered in normalized coordinates.
            */
            public get rect(): UnityEngine.Rect;
            public set rect(value: UnityEngine.Rect);
            /** Where on the screen is the camera rendered in pixel coordinates.
            */
            public get pixelRect(): UnityEngine.Rect;
            public set pixelRect(value: UnityEngine.Rect);
            /** How wide is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only).
            */
            public get pixelWidth(): number;
            /** How tall is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only).
            */
            public get pixelHeight(): number;
            /** How wide is the camera in pixels (accounting for dynamic resolution scaling) (Read Only).
            */
            public get scaledPixelWidth(): number;
            /** How tall is the camera in pixels (accounting for dynamic resolution scaling) (Read Only).
            */
            public get scaledPixelHeight(): number;
            /** Destination render texture.
            */
            public get targetTexture(): UnityEngine.RenderTexture;
            public set targetTexture(value: UnityEngine.RenderTexture);
            /** Gets the temporary RenderTexture target for this Camera.
            */
            public get activeTexture(): UnityEngine.RenderTexture;
            /** Set the target display for this Camera.
            */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Matrix that transforms from camera space to world space (Read Only).
            */
            public get cameraToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms from world to camera space.
            */
            public get worldToCameraMatrix(): UnityEngine.Matrix4x4;
            public set worldToCameraMatrix(value: UnityEngine.Matrix4x4);
            /** Set a custom projection matrix.
            */
            public get projectionMatrix(): UnityEngine.Matrix4x4;
            public set projectionMatrix(value: UnityEngine.Matrix4x4);
            /** Get or set the raw projection matrix with no camera offset (no jittering).
            */
            public get nonJitteredProjectionMatrix(): UnityEngine.Matrix4x4;
            public set nonJitteredProjectionMatrix(value: UnityEngine.Matrix4x4);
            /** Should the jittered matrix be used for transparency rendering?
            */
            public get useJitteredProjectionMatrixForTransparentRendering(): boolean;
            public set useJitteredProjectionMatrixForTransparentRendering(value: boolean);
            /** Get the view projection matrix used on the last frame.
            */
            public get previousViewProjectionMatrix(): UnityEngine.Matrix4x4;
            /** The first enabled Camera component that is tagged "MainCamera" (Read Only).
            */
            public static get main(): UnityEngine.Camera;
            /** The camera we are currently rendering with, for low-level render control only (Read Only).
            */
            public static get current(): UnityEngine.Camera;
            /** If not null, the camera will only render the contents of the specified Scene.
            */
            public get scene(): UnityEngine.SceneManagement.Scene;
            public set scene(value: UnityEngine.SceneManagement.Scene);
            /** Stereoscopic rendering.
            */
            public get stereoEnabled(): boolean;
            /** The distance between the virtual eyes. Use this to query or set the current eye separation. Note that most VR devices provide this value, in which case setting the value will have no effect.
            */
            public get stereoSeparation(): number;
            public set stereoSeparation(value: number);
            /** Distance to a point where virtual eyes converge.
            */
            public get stereoConvergence(): number;
            public set stereoConvergence(value: number);
            /** Determines whether the stereo view matrices are suitable to allow for a single pass cull.
            */
            public get areVRStereoViewMatricesWithinSingleCullTolerance(): boolean;
            /** Defines which eye of a VR display the Camera renders into.
            */
            public get stereoTargetEye(): UnityEngine.StereoTargetEyeMask;
            public set stereoTargetEye(value: UnityEngine.StereoTargetEyeMask);
            /** Returns the eye that is currently rendering.
            If called when stereo is not enabled it will return Camera.MonoOrStereoscopicEye.Mono.
            If called during a camera rendering callback such as OnRenderImage it will return the currently rendering eye.
            If called outside of a rendering callback and stereo is enabled, it will return the default eye which is Camera.MonoOrStereoscopicEye.Left.
            */
            public get stereoActiveEye(): UnityEngine.Camera.MonoOrStereoscopicEye;
            /** The number of cameras in the current Scene.
            */
            public static get allCamerasCount(): number;
            /** Returns all enabled cameras in the Scene.
            */
            public static get allCameras(): System.Array$1<UnityEngine.Camera>;
            public get sceneViewFilterMode(): UnityEngine.Camera.SceneViewFilterMode;
            /** Number of command buffers set up on this camera (Read Only).
            */
            public get commandBufferCount(): number;
            public get IsDistributedCamera(): boolean;
            public set IsDistributedCamera(value: boolean);
            /** Revert all camera parameters to default.
            */
            public Reset () : void
            /** Resets this Camera's transparency sort settings to the default. Default transparency settings are taken from GraphicsSettings instead of directly from this Camera.
            */
            public ResetTransparencySortSettings () : void
            /** Revert the aspect ratio to the screen's aspect ratio.
            */
            public ResetAspect () : void
            /** Make culling queries reflect the camera's built in parameters.
            */
            public ResetCullingMatrix () : void
            /** Make the camera render with shader replacement.
            */
            public SetReplacementShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
            /** Remove shader replacement from camera.
            */
            public ResetReplacementShader () : void
            /** 
            Retrieves the effective vertical field of view of the camera, including GateFit.
            Fitting the sensor gate and the resolution gate has an impact on the final field of view. If the sensor gate aspect ratio is the same as the resolution gate aspect ratio or if the camera is not in physical mode, then this method returns the same value as the fieldofview property.
            * @returns Returns the effective vertical field of view. 
            */
            public GetGateFittedFieldOfView () : number
            /** 
            Retrieves the effective lens offset of the camera, including GateFit.
            Fitting the sensor gate and the resolution gate has an impact on the final obliqueness of the projection. If the sensor gate aspect ratio is the same as the resolution gate aspect ratio, then this method returns the same value as the lenshift property. If the camera is not in physical mode, then this methods returns Vector2.zero.
            * @returns Returns the effective lens shift value. 
            */
            public GetGateFittedLensShift () : UnityEngine.Vector2
            /** Sets the Camera to render to the chosen buffers of one or more RenderTextures.
            * @param $colorBuffer The RenderBuffer(s) to which color information will be rendered.
            * @param $depthBuffer The RenderBuffer to which depth information will be rendered.
            */
            public SetTargetBuffers ($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer) : void
            /** Sets the Camera to render to the chosen buffers of one or more RenderTextures.
            * @param $colorBuffer The RenderBuffer(s) to which color information will be rendered.
            * @param $depthBuffer The RenderBuffer to which depth information will be rendered.
            */
            public SetTargetBuffers ($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer) : void
            /** Make the rendering position reflect the camera's position in the Scene.
            */
            public ResetWorldToCameraMatrix () : void
            /** Make the projection reflect normal camera's parameters.
            */
            public ResetProjectionMatrix () : void
            /** Calculates and returns oblique near-plane projection matrix.
            * @param $clipPlane Vector4 that describes a clip plane.
            * @returns Oblique near-plane projection matrix. 
            */
            public CalculateObliqueMatrix ($clipPlane: UnityEngine.Vector4) : UnityEngine.Matrix4x4
            public WorldToScreenPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public WorldToViewportPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public ViewportToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public ScreenToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            /** Transforms position from world space into screen space.
            * @param $eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public WorldToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from world space into viewport space.
            * @param $eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public WorldToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from viewport space into world space.
            * @param $position The 3d vector in Viewport space.
            * @returns The 3d vector in World space. 
            */
            public ViewportToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a point from screen space into world space, where world space is defined as the coordinate system at the very top of your game's hierarchy.
            * @param $position A screen space position (often mouse x, y), plus a z position for depth (for example, a camera clipping plane).
            * @param $eye By default, Camera.MonoOrStereoscopicEye.Mono. Can be set to Camera.MonoOrStereoscopicEye.Left or Camera.MonoOrStereoscopicEye.Right for use in stereoscopic rendering (e.g., for VR).
            * @returns The worldspace point created by converting the screen space point at the provided distance z from the camera plane. 
            */
            public ScreenToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from screen space into viewport space.
            */
            public ScreenToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from viewport space into screen space.
            */
            public ViewportToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            public ViewportPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
            /** Returns a ray going from camera through a viewport point.
            * @param $eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public ViewportPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
            public ScreenPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
            /** Returns a ray going from camera through a screen point.
            * @param $pos A 3D point, with the x and y coordinates containing a 2D screenspace point in pixels. The lower left pixel of the screen is (0,0). The upper right pixel of the screen is (screen width in pixels - 1, screen height in pixels - 1). Unity ignores the z coordinate.
            * @param $eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public ScreenPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
            public CalculateFrustumCorners ($viewport: UnityEngine.Rect, $z: number, $eye: UnityEngine.Camera.MonoOrStereoscopicEye, $outCorners: System.Array$1<UnityEngine.Vector3>) : void
            public static CalculateProjectionMatrixFromPhysicalProperties ($output: $Ref<UnityEngine.Matrix4x4>, $focalLength: number, $sensorSize: UnityEngine.Vector2, $lensShift: UnityEngine.Vector2, $nearClip: number, $farClip: number, $gateFitParameters?: UnityEngine.Camera.GateFitParameters) : void
            /** Converts focal length to field of view.
            * @param $focalLength Focal length in millimeters.
            * @param $sensorSize Sensor size in millimeters. Use the sensor height to get the vertical field of view. Use the sensor width to get the horizontal field of view.
            * @returns field of view in degrees. 
            */
            public static FocalLengthToFieldOfView ($focalLength: number, $sensorSize: number) : number
            /** Converts field of view to focal length. Use either sensor height and vertical field of view or sensor width and horizontal field of view.
            * @param $fieldOfView field of view in degrees.
            * @param $sensorSize Sensor size in millimeters.
            * @returns Focal length in millimeters. 
            */
            public static FieldOfViewToFocalLength ($fieldOfView: number, $sensorSize: number) : number
            /** Converts the horizontal field of view (FOV) to the vertical FOV, based on the value of the aspect ratio parameter.
            * @param $horizontalFOV The horizontal FOV value in degrees.
            * @param $aspectRatio The aspect ratio value used for the conversion
            */
            public static HorizontalToVerticalFieldOfView ($horizontalFieldOfView: number, $aspectRatio: number) : number
            /** Converts the vertical field of view (FOV) to the horizontal FOV, based on the value of the aspect ratio parameter.
            * @param $verticalFieldOfView The vertical FOV value in degrees.
            * @param $aspectRatio The aspect ratio value used for the conversion
            */
            public static VerticalToHorizontalFieldOfView ($verticalFieldOfView: number, $aspectRatio: number) : number
            public GetStereoNonJitteredProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public GetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public CopyStereoDeviceProjectionMatrixToNonJittered ($eye: UnityEngine.Camera.StereoscopicEye) : void
            public GetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public SetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
            /** Reset the camera to using the Unity computed projection matrices for all stereoscopic eyes.
            */
            public ResetStereoProjectionMatrices () : void
            public SetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
            /** Reset the camera to using the Unity computed view matrices for all stereoscopic eyes.
            */
            public ResetStereoViewMatrices () : void
            /** Fills an array of Camera with the current cameras in the Scene, without allocating a new array.
            * @param $cameras An array to be filled up with cameras currently in the Scene.
            */
            public static GetAllCameras ($cameras: System.Array$1<UnityEngine.Camera>) : number
            /** Render into a static cubemap from this camera.
            * @param $cubemap The cube map to render to.
            * @param $faceMask A bitmask which determines which of the six faces are rendered to.
            * @returns False if rendering fails, else true. 
            */
            public RenderToCubemap ($cubemap: UnityEngine.Cubemap, $faceMask: number) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.Cubemap) : boolean
            /** Render into a cubemap from this camera.
            * @param $faceMask A bitfield indicating which cubemap faces should be rendered into.
            * @param $cubemap The texture to render to.
            * @returns False if rendering fails, else true. 
            */
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number, $stereoEye: UnityEngine.Camera.MonoOrStereoscopicEye) : boolean
            /** Render the camera manually.
            */
            public Render () : void
            /** Render the camera with shader replacement.
            */
            public RenderWithShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
            public RenderDontRestore () : void
            public static SetupCurrent ($cur: UnityEngine.Camera) : void
            /** Makes this camera's settings match other camera.
            * @param $other Copy camera settings to the other camera.
            */
            public CopyFrom ($other: UnityEngine.Camera) : void
            /** Remove command buffers from execution at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            */
            public RemoveCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : void
            /** Remove all command buffers set on this camera.
            */
            public RemoveAllCommandBuffers () : void
            /** Add a command buffer to be executed at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @param $buffer The buffer to execute.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point.
            * @param $evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param $buffer The buffer to execute.
            * @param $queueType The desired async compute queue type to execute the buffer on.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Remove command buffer from execution at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @param $buffer The buffer to execute.
            */
            public RemoveCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Get command buffers to be executed at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @returns Array of command buffers. 
            */
            public GetCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
            /** Get culling parameters for a camera.
            * @param $cullingParameters Resultant culling parameters.
            * @param $stereoAware Generate single-pass stereo aware culling parameters.
            * @returns Flag indicating whether culling parameters are valid. 
            */
            public TryGetCullingParameters ($cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
            /** Get culling parameters for a camera.
            * @param $cullingParameters Resultant culling parameters.
            * @param $stereoAware Generate single-pass stereo aware culling parameters.
            * @returns Flag indicating whether culling parameters are valid. 
            */
            public TryGetCullingParameters ($stereoAware: boolean, $cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
            public constructor ()
        }
        /** Rendering path of a Camera.
        */
        enum RenderingPath
        { UsePlayerSettings = -1, VertexLit = 0, Forward = 1, DeferredLighting = 2, DeferredShading = 3 }
        /** Transparent object sorting mode of a Camera.
        */
        enum TransparencySortMode
        { Default = 0, Perspective = 1, Orthographic = 2, CustomAxis = 3 }
        /** Describes different types of camera.
        */
        enum CameraType
        { Game = 1, SceneView = 2, Preview = 4, VR = 8, Reflection = 16 }
        /** Values for Camera.clearFlags, determining what to clear when rendering a Camera.
        */
        enum CameraClearFlags
        { Skybox = 1, Color = 2, SolidColor = 2, Depth = 3, Nothing = 4 }
        /** Depth texture generation mode for Camera.
        */
        enum DepthTextureMode
        { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
        /** Shader scripts used for all rendering.
        */
        class Shader extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Sets the limit on the number of shader variant chunks Unity loads and keeps in memory.
            */
            public static get maximumChunksOverride(): number;
            public static set maximumChunksOverride(value: number);
            /** Shader LOD level for this shader.
            */
            public get maximumLOD(): number;
            public set maximumLOD(value: number);
            /** Shader LOD level for all shaders.
            */
            public static get globalMaximumLOD(): number;
            public static set globalMaximumLOD(value: number);
            /** Can this shader run on the end-users graphics card? (Read Only)
            */
            public get isSupported(): boolean;
            /** Render pipeline currently in use.
            */
            public static get globalRenderPipeline(): string;
            public static set globalRenderPipeline(value: string);
            /** An array containing the global shader keywords that are currently enabled.
            */
            public static get enabledGlobalKeywords(): System.Array$1<UnityEngine.Rendering.GlobalKeyword>;
            /** An array containing the global shader keywords that currently exist. This includes enabled and disabled global shader keywords.
            */
            public static get globalKeywords(): System.Array$1<UnityEngine.Rendering.GlobalKeyword>;
            /** The local keyword space of this shader.
            */
            public get keywordSpace(): UnityEngine.Rendering.LocalKeywordSpace;
            /** Render queue of this shader. (Read Only)
            */
            public get renderQueue(): number;
            /** Returns the number of shader passes on the active SubShader.
            */
            public get passCount(): number;
            /** Returns the number of SubShaders in this shader.
            */
            public get subshaderCount(): number;
            /** Finds a shader with the given name. Returns null if the shader is not found.
            */
            public static Find ($name: string) : UnityEngine.Shader
            /** Enables a global shader keyword.
            * @param $keyword The name of the Rendering.GlobalKeyword to enable.
            */
            public static EnableKeyword ($keyword: string) : void
            /** Disables a global shader keyword.
            * @param $keyword The name of the Rendering.GlobalKeyword to disable.
            */
            public static DisableKeyword ($keyword: string) : void
            /** Checks whether a global shader keyword is enabled.
            * @param $keyword The name of the Rendering.GlobalKeyword to check.
            * @returns Returns true if a global shader keyword with the given name exists, and is enabled. Otherwise, returns false. 
            */
            public static IsKeywordEnabled ($keyword: string) : boolean
            /** Enables a global shader keyword.
            * @param $keyword The name of the Rendering.GlobalKeyword to enable.
            */
            public static EnableKeyword ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>) : void
            /** Disables a global shader keyword.
            * @param $keyword The name of the Rendering.GlobalKeyword to disable.
            */
            public static DisableKeyword ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>) : void
            /** Sets the state of a global shader keyword.
            * @param $keyword The Rendering.GlobalKeyword to enable or disable.
            * @param $value The desired keyword state.
            */
            public static SetKeyword ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>, $value: boolean) : void
            /** Checks whether a global shader keyword is enabled.
            * @param $keyword The Rendering.GlobalKeyword to check.
            * @returns Returns true if the given global shader keyword is enabled. Otherwise, returns false. 
            */
            public static IsKeywordEnabled ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>) : boolean
            /** Prewarms all shader variants of all Shaders currently in memory.
            */
            public static WarmupAllShaders () : void
            /** Gets unique identifier for a shader property name.
            * @param $name Shader property name.
            * @returns Unique integer for the name. 
            */
            public static PropertyToID ($name: string) : number
            /** Returns the dependency shader.
            * @param $name The name of the dependency to query.
            */
            public GetDependency ($name: string) : UnityEngine.Shader
            /** Returns the number of passes in the given SubShader.
            * @param $subshaderIndex The index of the SubShader.
            */
            public GetPassCountInSubshader ($subshaderIndex: number) : number
            /** Searches for the tag specified by tagName on the shader's active SubShader and returns the value of the tag.
            * @param $passIndex The index of the pass.
            * @param $tagName The name of the tag.
            */
            public FindPassTagValue ($passIndex: number, $tagName: UnityEngine.Rendering.ShaderTagId) : UnityEngine.Rendering.ShaderTagId
            /** Searches for the tag specified by tagName on the SubShader specified by subshaderIndex and returns the value of the tag.
            * @param $subshaderIndex The index of the SubShader.
            * @param $passIndex The index of the pass.
            * @param $tagName The name of the tag.
            */
            public FindPassTagValue ($subshaderIndex: number, $passIndex: number, $tagName: UnityEngine.Rendering.ShaderTagId) : UnityEngine.Rendering.ShaderTagId
            /** Searches for the tag specified by tagName on the SubShader specified by subshaderIndex and returns the value of the tag.
            * @param $subshaderIndex The index of the SubShader.
            * @param $tagName The name of the tag.
            */
            public FindSubshaderTagValue ($subshaderIndex: number, $tagName: UnityEngine.Rendering.ShaderTagId) : UnityEngine.Rendering.ShaderTagId
            /** This method is deprecated. Use SetGlobalFloat or SetGlobalInteger instead.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalInt ($name: string, $value: number) : void
            /** This method is deprecated. Use SetGlobalFloat or SetGlobalInteger instead.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalInt ($nameID: number, $value: number) : void
            /** Sets a global float property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalFloat ($name: string, $value: number) : void
            /** Sets a global float property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalFloat ($nameID: number, $value: number) : void
            /** Sets a global integer property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalInteger ($name: string, $value: number) : void
            /** Sets a global integer property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalInteger ($nameID: number, $value: number) : void
            /** Sets a global vector property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalVector ($name: string, $value: UnityEngine.Vector4) : void
            /** Sets a global vector property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalVector ($nameID: number, $value: UnityEngine.Vector4) : void
            /** Sets a global color property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalColor ($name: string, $value: UnityEngine.Color) : void
            /** Sets a global color property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalColor ($nameID: number, $value: UnityEngine.Color) : void
            /** Sets a global matrix property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalMatrix ($name: string, $value: UnityEngine.Matrix4x4) : void
            /** Sets a global matrix property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalMatrix ($nameID: number, $value: UnityEngine.Matrix4x4) : void
            /** Sets a global texture property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public static SetGlobalTexture ($name: string, $value: UnityEngine.Texture) : void
            /** Sets a global texture property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public static SetGlobalTexture ($nameID: number, $value: UnityEngine.Texture) : void
            /** Sets a global texture property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public static SetGlobalTexture ($name: string, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
            /** Sets a global texture property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public static SetGlobalTexture ($nameID: number, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
            /** Sets a global buffer property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The buffer to set.
            */
            public static SetGlobalBuffer ($name: string, $value: UnityEngine.ComputeBuffer) : void
            /** Sets a global buffer property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The buffer to set.
            */
            public static SetGlobalBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer) : void
            /** Sets a global buffer property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The buffer to set.
            */
            public static SetGlobalBuffer ($name: string, $value: UnityEngine.GraphicsBuffer) : void
            /** Sets a global buffer property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            * @param $value The buffer to set.
            */
            public static SetGlobalBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types.
            * @param $nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
            * @param $name The name of the constant buffer to override.
            * @param $value The buffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            */
            public static SetGlobalConstantBuffer ($name: string, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types.
            * @param $nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
            * @param $name The name of the constant buffer to override.
            * @param $value The buffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            */
            public static SetGlobalConstantBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types.
            * @param $nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
            * @param $name The name of the constant buffer to override.
            * @param $value The buffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            */
            public static SetGlobalConstantBuffer ($name: string, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types.
            * @param $nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
            * @param $name The name of the constant buffer to override.
            * @param $value The buffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            */
            public static SetGlobalConstantBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
            public static SetGlobalFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
            public static SetGlobalFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
            /** Sets a global float array property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalFloatArray ($name: string, $values: System.Array$1<number>) : void
            /** Sets a global float array property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalFloatArray ($nameID: number, $values: System.Array$1<number>) : void
            public static SetGlobalVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            public static SetGlobalVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            /** Sets a global vector array property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalVectorArray ($name: string, $values: System.Array$1<UnityEngine.Vector4>) : void
            /** Sets a global vector array property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalVectorArray ($nameID: number, $values: System.Array$1<UnityEngine.Vector4>) : void
            public static SetGlobalMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            public static SetGlobalMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            /** Sets a global matrix array property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalMatrixArray ($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
            /** Sets a global matrix array property for all shaders.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static SetGlobalMatrixArray ($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
            /** This method is deprecated. Use GetGlobalFloat or GetGlobalInteger instead.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalInt ($name: string) : number
            /** This method is deprecated. Use GetGlobalFloat or GetGlobalInteger instead.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalInt ($nameID: number) : number
            /** Gets a global float property for all shaders previously set using SetGlobalFloat.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalFloat ($name: string) : number
            /** Gets a global float property for all shaders previously set using SetGlobalFloat.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalFloat ($nameID: number) : number
            /** Gets a global integer property for all shaders previously set using SetGlobalInteger.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalInteger ($name: string) : number
            /** Gets a global integer property for all shaders previously set using SetGlobalInteger.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalInteger ($nameID: number) : number
            /** Gets a global vector property for all shaders previously set using SetGlobalVector.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalVector ($name: string) : UnityEngine.Vector4
            /** Gets a global vector property for all shaders previously set using SetGlobalVector.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalVector ($nameID: number) : UnityEngine.Vector4
            /** Gets a global color property for all shaders previously set using SetGlobalColor.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalColor ($name: string) : UnityEngine.Color
            /** Gets a global color property for all shaders previously set using SetGlobalColor.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalColor ($nameID: number) : UnityEngine.Color
            /** Gets a global matrix property for all shaders previously set using SetGlobalMatrix.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalMatrix ($name: string) : UnityEngine.Matrix4x4
            /** Gets a global matrix property for all shaders previously set using SetGlobalMatrix.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalMatrix ($nameID: number) : UnityEngine.Matrix4x4
            /** Gets a global texture property for all shaders previously set using SetGlobalTexture.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalTexture ($name: string) : UnityEngine.Texture
            /** Gets a global texture property for all shaders previously set using SetGlobalTexture.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalTexture ($nameID: number) : UnityEngine.Texture
            /** Gets a global float array for all shaders previously set using SetGlobalFloatArray.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalFloatArray ($name: string) : System.Array$1<number>
            /** Gets a global float array for all shaders previously set using SetGlobalFloatArray.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalFloatArray ($nameID: number) : System.Array$1<number>
            /** Gets a global vector array for all shaders previously set using SetGlobalVectorArray.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalVectorArray ($name: string) : System.Array$1<UnityEngine.Vector4>
            /** Gets a global vector array for all shaders previously set using SetGlobalVectorArray.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalVectorArray ($nameID: number) : System.Array$1<UnityEngine.Vector4>
            /** Gets a global matrix array for all shaders previously set using SetGlobalMatrixArray.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalMatrixArray ($name: string) : System.Array$1<UnityEngine.Matrix4x4>
            /** Gets a global matrix array for all shaders previously set using SetGlobalMatrixArray.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public static GetGlobalMatrixArray ($nameID: number) : System.Array$1<UnityEngine.Matrix4x4>
            public static GetGlobalFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
            public static GetGlobalFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
            public static GetGlobalVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            public static GetGlobalVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            public static GetGlobalMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            public static GetGlobalMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            /** Returns the number of properties in this Shader.
            */
            public GetPropertyCount () : number
            /** Finds the index of a shader property by its name.
            * @param $propertyName The name of the shader property.
            */
            public FindPropertyIndex ($propertyName: string) : number
            /** Returns the name of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyName ($propertyIndex: number) : string
            /** Returns the nameId of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyNameId ($propertyIndex: number) : number
            /** Returns the ShaderPropertyType of the property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyType ($propertyIndex: number) : UnityEngine.Rendering.ShaderPropertyType
            /** Returns the description string of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyDescription ($propertyIndex: number) : string
            /** Returns the ShaderPropertyFlags of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyFlags ($propertyIndex: number) : UnityEngine.Rendering.ShaderPropertyFlags
            /** Returns an array of strings containing attributes of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyAttributes ($propertyIndex: number) : System.Array$1<string>
            /** Returns the default float value of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyDefaultFloatValue ($propertyIndex: number) : number
            /** Returns the default Vector4 value of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyDefaultVectorValue ($propertyIndex: number) : UnityEngine.Vector4
            /** Returns the min and max limits for a <a href="Rendering.ShaderPropertyType.Range.html">Range</a> property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyRangeLimits ($propertyIndex: number) : UnityEngine.Vector2
            /** Returns the default int value of the shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyDefaultIntValue ($propertyIndex: number) : number
            /** Returns the TextureDimension of a <a href="Rendering.ShaderPropertyType.Texture.html">Texture</a> shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyTextureDimension ($propertyIndex: number) : UnityEngine.Rendering.TextureDimension
            /** Returns the default Texture name of a <a href="Rendering.ShaderPropertyType.Texture.html">Texture</a> shader property at the specified index.
            * @param $propertyIndex The index of the shader property.
            */
            public GetPropertyTextureDefaultName ($propertyIndex: number) : string
            /** Find the name of a texture stack a texture belongs too.
            * @param $propertyIndex Index of the property.
            * @param $stackName On exit, contanis the name of the stack if one was found.
            * @param $layerIndex On exit, contains the stack layer index of the texture property.
            * @returns True, if a stack was found for the given texture property, false if not. 
            */
            public FindTextureStack ($propertyIndex: number, $stackName: $Ref<string>, $layerIndex: $Ref<number>) : boolean
        }
        /** Base class for Texture handling.
        */
        class Texture extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Can be used with Texture constructors that take a mip count to indicate that all mips should be generated.  The value of this field is -1.
            */
            public static GenerateAllMips : number
            /** How many mipmap levels are in this Texture (Read Only).
            */
            public get mipmapCount(): number;
            public static get anisotropicFiltering(): UnityEngine.AnisotropicFiltering;
            public static set anisotropicFiltering(value: UnityEngine.AnisotropicFiltering);
            /** Returns the GraphicsFormat format or color format of a Texture object.
            */
            public get graphicsFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            /** Width of the Texture in pixels (Read Only).
            */
            public get width(): number;
            public set width(value: number);
            /** Height of the Texture in pixels (Read Only).
            */
            public get height(): number;
            public set height(value: number);
            /** Dimensionality (type) of the Texture (Read Only).
            */
            public get dimension(): UnityEngine.Rendering.TextureDimension;
            public set dimension(value: UnityEngine.Rendering.TextureDimension);
            /** Whether Unity stores an additional copy of this texture's pixel data in CPU-addressable memory.
            */
            public get isReadable(): boolean;
            /** Texture coordinate wrapping mode.
            */
            public get wrapMode(): UnityEngine.TextureWrapMode;
            public set wrapMode(value: UnityEngine.TextureWrapMode);
            /** Texture U coordinate wrapping mode.
            */
            public get wrapModeU(): UnityEngine.TextureWrapMode;
            public set wrapModeU(value: UnityEngine.TextureWrapMode);
            /** Texture V coordinate wrapping mode.
            */
            public get wrapModeV(): UnityEngine.TextureWrapMode;
            public set wrapModeV(value: UnityEngine.TextureWrapMode);
            /** Texture W coordinate wrapping mode for Texture3D.
            */
            public get wrapModeW(): UnityEngine.TextureWrapMode;
            public set wrapModeW(value: UnityEngine.TextureWrapMode);
            /** Filtering mode of the Texture.
            */
            public get filterMode(): UnityEngine.FilterMode;
            public set filterMode(value: UnityEngine.FilterMode);
            /** Defines the anisotropic filtering level of the Texture.
            */
            public get anisoLevel(): number;
            public set anisoLevel(value: number);
            /** The mipmap bias of the Texture.
            */
            public get mipMapBias(): number;
            public set mipMapBias(value: number);
            public get texelSize(): UnityEngine.Vector2;
            /** This counter is incremented when the Texture is updated.
            */
            public get updateCount(): number;
            /** Returns true if the texture pixel data is in sRGB color space (Read Only).
            */
            public get isDataSRGB(): boolean;
            /** The hash value of the Texture.
            */
            public get imageContentsHash(): UnityEngine.Hash128;
            public set imageContentsHash(value: UnityEngine.Hash128);
            /** The total amount of Texture memory that Unity would use if it loads all Textures at mipmap level 0. 
            This is a theoretical value that does not take into account any input from the streaming system or any other input, for example when you set the`Texture2D.requestedMipmapLevel` manually. 
            To see a Texture memory value that takes inputs into account, use `desiredTextureMemory`. 
            `totalTextureMemory` only includes instances of Texture2D and CubeMap Textures. This value does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally.
            */
            public static get totalTextureMemory(): bigint;
            /** The total size of the Textures, in bytes, that Unity loads if there were no other constraints. Before Unity loads any Textures, it applies the which reduces the loaded Texture resolution if the Texture sizes exceed its value. The desiredTextureMemory value takes into account the mipmap levels that Unity has requested or that you have set manually.
            For example, if Unity does not load a Texture at full resolution because it is far away or its requested mipmap level is greater than 0,  Unity reduces the desiredTextureMemory value to match the total memory needed.
            The desiredTextureMemory value can be greater than the Texture.targetTextureMemory value.
            */
            public static get desiredTextureMemory(): bigint;
            /** The total amount of Texture memory that Unity allocates to the Textures in the scene after it applies the and finishes loading Textures. `targetTextureMemory`also takes mipmap streaming settings into account. This value only includes instances of Texture2D and CubeMap Textures. This value does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally.
            */
            public static get targetTextureMemory(): bigint;
            /** The amount of memory that all Textures in the scene use.
            */
            public static get currentTextureMemory(): bigint;
            /** The amount of memory Unity allocates for non-streaming Textures in the scene. This only includes instances of Texture2D and CubeMap Textures. This does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally.
            */
            public static get nonStreamingTextureMemory(): bigint;
            /** How many times has a Texture been uploaded due to Texture mipmap streaming.
            */
            public static get streamingMipmapUploadCount(): bigint;
            /** Number of renderers registered with the Texture streaming system.
            */
            public static get streamingRendererCount(): bigint;
            /** Number of streaming Textures.
            */
            public static get streamingTextureCount(): bigint;
            /** The number of non-streaming Textures in the scene. This includes instances of Texture2D and CubeMap Textures. This does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally.
            */
            public static get nonStreamingTextureCount(): bigint;
            /** Number of streaming Textures with outstanding mipmaps to be loaded.
            */
            public static get streamingTexturePendingLoadCount(): bigint;
            /** Number of streaming Textures with mipmaps currently loading.
            */
            public static get streamingTextureLoadingCount(): bigint;
            /** Force streaming Textures to load all mipmap levels.
            */
            public static get streamingTextureForceLoadAll(): boolean;
            public static set streamingTextureForceLoadAll(value: boolean);
            /** This property forces the streaming Texture system to discard all unused mipmaps instead of caching them until the Texture is exceeded. This is useful when you profile or write tests to keep a predictable set of Textures in memory.
            */
            public static get streamingTextureDiscardUnusedMips(): boolean;
            public static set streamingTextureDiscardUnusedMips(value: boolean);
            /** Allow Unity internals to perform Texture creation on any thread (rather than the dedicated render thread).
            */
            public static get allowThreadedTextureCreation(): boolean;
            public static set allowThreadedTextureCreation(value: boolean);
            /** Sets Anisotropic limits.
            */
            public static SetGlobalAnisotropicFilteringLimits ($forcedMin: number, $globalMax: number) : void
            /** Retrieve a native (underlying graphics API) pointer to the Texture resource.
            * @returns Pointer to an underlying graphics API Texture resource. 
            */
            public GetNativeTexturePtr () : System.IntPtr
            /** Increment the update counter.
            */
            public IncrementUpdateCount () : void
            /** This function sets mipmap streaming debug properties on any materials that use this Texture through the mipmap streaming system.
            */
            public static SetStreamingTextureMaterialDebugProperties () : void
        }
        /** Render textures are textures that can be rendered to.
        */
        class RenderTexture extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** Color or depth buffer part of a RenderTexture.
        */
        class RenderBuffer extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Enum values for the Camera's targetEye property.
        */
        enum StereoTargetEyeMask
        { None = 0, Left = 1, Right = 2, Both = 3 }
        /** Class for handling cube maps, Use this to create or modify existing.
        */
        class Cubemap extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** The material class.
        */
        class Material extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The shader used by the material.
            */
            public get shader(): UnityEngine.Shader;
            public set shader(value: UnityEngine.Shader);
            /** The main color of the Material.
            */
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            /** The main texture.
            */
            public get mainTexture(): UnityEngine.Texture;
            public set mainTexture(value: UnityEngine.Texture);
            /** The offset of the main texture.
            */
            public get mainTextureOffset(): UnityEngine.Vector2;
            public set mainTextureOffset(value: UnityEngine.Vector2);
            /** The scale of the main texture.
            */
            public get mainTextureScale(): UnityEngine.Vector2;
            public set mainTextureScale(value: UnityEngine.Vector2);
            /** Render queue of this material.
            */
            public get renderQueue(): number;
            public set renderQueue(value: number);
            /** An array containing the local shader keywords that are currently enabled for this material.
            */
            public get enabledKeywords(): System.Array$1<UnityEngine.Rendering.LocalKeyword>;
            public set enabledKeywords(value: System.Array$1<UnityEngine.Rendering.LocalKeyword>);
            /** Defines how the material should interact with lightmaps and lightprobes.
            */
            public get globalIlluminationFlags(): UnityEngine.MaterialGlobalIlluminationFlags;
            public set globalIlluminationFlags(value: UnityEngine.MaterialGlobalIlluminationFlags);
            /** Gets and sets whether the Double Sided Global Illumination setting is enabled for this material.
            */
            public get doubleSidedGI(): boolean;
            public set doubleSidedGI(value: boolean);
            /** Gets and sets whether GPU instancing is enabled for this material.
            */
            public get enableInstancing(): boolean;
            public set enableInstancing(value: boolean);
            /** How many passes are in this material (Read Only).
            */
            public get passCount(): number;
            /** An array containing names of the local shader keywords that are currently enabled for this material.
            */
            public get shaderKeywords(): System.Array$1<string>;
            public set shaderKeywords(value: System.Array$1<string>);
            /** Parent of this material.
            */
            public get parent(): UnityEngine.Material;
            public set parent(value: UnityEngine.Material);
            /** Returns true if this material is a material variant.
            * @returns True if the material is a variant. 
            */
            public get isVariant(): boolean;
            /** Checks if the ShaderLab file assigned to the Material has a property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasProperty ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasProperty ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Float property with the given name. This also works with the Float Array property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasFloat ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Float property with the given name. This also works with the Float Array property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasFloat ($nameID: number) : boolean
            /** This method is deprecated. Use HasFloat or HasInteger instead.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasInt ($name: string) : boolean
            /** This method is deprecated. Use HasFloat or HasInteger instead.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasInt ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has an Integer property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasInteger ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has an Integer property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasInteger ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Texture property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasTexture ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Texture property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasTexture ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Matrix property with the given name. This also works with the Matrix Array property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasMatrix ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Matrix property with the given name. This also works with the Matrix Array property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasMatrix ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Vector property with the given name. This also works with the Vector Array property.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasVector ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Vector property with the given name. This also works with the Vector Array property.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasVector ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Color property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasColor ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a Color property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasColor ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a ComputeBuffer property with the given name.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasBuffer ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a ComputeBuffer property with the given name.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasBuffer ($nameID: number) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a ConstantBuffer property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasConstantBuffer ($name: string) : boolean
            /** Checks if the ShaderLab file assigned to the Material has a ConstantBuffer property with the given name.
            * @param $nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
            * @param $name The name of the property.
            * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
            */
            public HasConstantBuffer ($nameID: number) : boolean
            /** Enables a local shader keyword for this material.
            * @param $keyword The name of the Rendering.LocalKeyword to enable.
            */
            public EnableKeyword ($keyword: string) : void
            /** Disables a local shader keyword for this material.
            * @param $keyword The name of the Rendering.LocalKeyword to disable.
            */
            public DisableKeyword ($keyword: string) : void
            /** Checks whether a local shader keyword is enabled for this material.
            * @param $keyword The name of the Rendering.LocalKeyword to check.
            * @returns Returns true if a Rendering.LocalKeyword with the given name is enabled  for this material. 
            */
            public IsKeywordEnabled ($keyword: string) : boolean
            /** Enables a local shader keyword for this material.
            * @param $keyword The name of the Rendering.LocalKeyword to enable.
            */
            public EnableKeyword ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>) : void
            /** Disables a local shader keyword for this material.
            * @param $keyword The name of the Rendering.LocalKeyword to disable.
            */
            public DisableKeyword ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>) : void
            /** Sets the state of a local shader keyword for this material.
            * @param $keyword The Rendering.LocalKeyword to enable or disable.
            * @param $value The desired keyword state.
            */
            public SetKeyword ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>, $value: boolean) : void
            /** Checks whether a local shader keyword is enabled for this material.
            * @param $keyword The name of the Rendering.LocalKeyword to check.
            * @returns Returns true if a Rendering.LocalKeyword with the given name is enabled  for this material. 
            */
            public IsKeywordEnabled ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>) : boolean
            /** Enables or disables a Shader pass on a per-Material level.
            * @param $passName Shader pass name (case insensitive).
            * @param $enabled Flag indicating whether this Shader pass should be enabled.
            */
            public SetShaderPassEnabled ($passName: string, $enabled: boolean) : void
            /** Checks whether a given Shader pass is enabled on this Material.
            * @param $passName Shader pass name (case insensitive).
            * @returns True if the Shader pass is enabled. 
            */
            public GetShaderPassEnabled ($passName: string) : boolean
            /** Returns the name of the shader pass at index pass.
            */
            public GetPassName ($pass: number) : string
            /** Returns the index of the pass passName.
            */
            public FindPass ($passName: string) : number
            /** Sets an override tag/value on the material.
            * @param $tag Name of the tag to set.
            * @param $val Name of the value to set. Empty string to clear the override flag.
            */
            public SetOverrideTag ($tag: string, $val: string) : void
            /** Get the value of material's shader tag.
            */
            public GetTag ($tag: string, $searchFallbacks: boolean, $defaultValue: string) : string
            /** Get the value of material's shader tag.
            */
            public GetTag ($tag: string, $searchFallbacks: boolean) : string
            /** Interpolate properties between two materials.
            */
            public Lerp ($start: UnityEngine.Material, $end: UnityEngine.Material, $t: number) : void
            /** Activate the given pass for rendering.
            * @param $pass Shader pass number to setup.
            * @returns If false is returned, no rendering should be done. 
            */
            public SetPass ($pass: number) : boolean
            /** Copy properties from other material into this material.
            */
            public CopyPropertiesFromMaterial ($mat: UnityEngine.Material) : void
            /** Copies properties, keyword states and settings from mat to this material, but only if they exist in both materials.
            * @param $mat The Material to copy from.
            */
            public CopyMatchingPropertiesFromMaterial ($mat: UnityEngine.Material) : void
            /** Computes a CRC hash value from the content of the material.
            */
            public ComputeCRC () : number
            /** Returns the names of all texture properties exposed on this material.
            * @param $outNames Names of all texture properties exposed on this material.
            * @returns Names of all texture properties exposed on this material. 
            */
            public GetTexturePropertyNames () : System.Array$1<string>
            /** Return the name IDs of all texture properties exposed on this material.
            * @param $outNames IDs of all texture properties exposed on this material.
            * @returns IDs of all texture properties exposed on this material. 
            */
            public GetTexturePropertyNameIDs () : System.Array$1<number>
            public GetTexturePropertyNames ($outNames: System.Collections.Generic.List$1<string>) : void
            public GetTexturePropertyNameIDs ($outNames: System.Collections.Generic.List$1<number>) : void
            /** Returns True if the given material is an ancestor of this Material.
            * @param $ancestor The specific ancestor to find in the hierarchy.
            * @returns True if the given material is an ancestor of this Material. 
            */
            public IsChildOf ($ancestor: UnityEngine.Material) : boolean
            /** Removes all property overrides on this material.
            */
            public RevertAllPropertyOverrides () : void
            /** Checks whether a property is overriden by this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @returns Returns true if the property you pass in is overriden by this material. Otherwise, returns false. 
            */
            public IsPropertyOverriden ($nameID: number) : boolean
            /** Checks whether a property is locked by this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @returns Returns true if the property you pass in is locked by this material. Otherwise, returns false. 
            */
            public IsPropertyLocked ($nameID: number) : boolean
            /** Checks whether a property is locked by any of ancestor of this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @returns Returns true if the property you pass in is locked by any of ancestor of this material. Otherwise, returns false. 
            */
            public IsPropertyLockedByAncestor ($nameID: number) : boolean
            /** Checks whether a property is overriden by this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @returns Returns true if the property you pass in is overriden by this material. Otherwise, returns false. 
            */
            public IsPropertyOverriden ($name: string) : boolean
            /** Checks whether a property is locked by this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @returns Returns true if the property you pass in is locked by this material. Otherwise, returns false. 
            */
            public IsPropertyLocked ($name: string) : boolean
            /** Checks whether a property is locked by any of ancestor of this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @returns Returns true if the property you pass in is locked by any of ancestor of this material. Otherwise, returns false. 
            */
            public IsPropertyLockedByAncestor ($name: string) : boolean
            /** Sets the lock state of a property for this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @param $value The desired lock state.
            */
            public SetPropertyLock ($nameID: number, $value: boolean) : void
            /** Applies an override associated with a Material Variant to a target.
            * @param $destination The Material to which the Editor applies the override.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @param $recordUndo Wheter the editor should record an undo operation for this action.
            */
            public ApplyPropertyOverride ($destination: UnityEngine.Material, $nameID: number, $recordUndo?: boolean) : void
            /** Removes the override on a property.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            */
            public RevertPropertyOverride ($nameID: number) : void
            /** Sets the lock state of a property for this material.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @param $value The desired lock state.
            */
            public SetPropertyLock ($name: string, $value: boolean) : void
            /** Applies an override associated with a Material Variant to a target.
            * @param $destination The Material to which the Editor applies the override.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            * @param $recordUndo Wheter the editor should record an undo operation for this action.
            */
            public ApplyPropertyOverride ($destination: UnityEngine.Material, $name: string, $recordUndo?: boolean) : void
            /** Removes the override on a property.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_SrcBlend".
            */
            public RevertPropertyOverride ($name: string) : void
            /** This method is deprecated. Use SetFloat or SetInteger instead.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $value Integer value to set.
            * @param $name Property name, e.g. "_SrcBlend".
            */
            public SetInt ($name: string, $value: number) : void
            /** This method is deprecated. Use SetFloat or SetInteger instead.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $value Integer value to set.
            * @param $name Property name, e.g. "_SrcBlend".
            */
            public SetInt ($nameID: number, $value: number) : void
            /** Sets a named float value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $value Float value to set.
            * @param $name Property name, e.g. "_Glossiness".
            */
            public SetFloat ($name: string, $value: number) : void
            /** Sets a named float value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $value Float value to set.
            * @param $name Property name, e.g. "_Glossiness".
            */
            public SetFloat ($nameID: number, $value: number) : void
            /** Sets a named integer value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $value Integer value to set.
            * @param $name Property name, e.g. "_SrcBlend".
            */
            public SetInteger ($name: string, $value: number) : void
            /** Sets a named integer value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $value Integer value to set.
            * @param $name Property name, e.g. "_SrcBlend".
            */
            public SetInteger ($nameID: number, $value: number) : void
            /** Sets a color value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_Color".
            * @param $value Color value to set.
            */
            public SetColor ($name: string, $value: UnityEngine.Color) : void
            /** Sets a color value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_Color".
            * @param $value Color value to set.
            */
            public SetColor ($nameID: number, $value: UnityEngine.Color) : void
            /** Sets a named vector value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_WaveAndDistance".
            * @param $value Vector value to set.
            */
            public SetVector ($name: string, $value: UnityEngine.Vector4) : void
            /** Sets a named vector value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_WaveAndDistance".
            * @param $value Vector value to set.
            */
            public SetVector ($nameID: number, $value: UnityEngine.Vector4) : void
            /** Sets a named matrix for the shader.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_CubemapRotation".
            * @param $value Matrix value to set.
            */
            public SetMatrix ($name: string, $value: UnityEngine.Matrix4x4) : void
            /** Sets a named matrix for the shader.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_CubemapRotation".
            * @param $value Matrix value to set.
            */
            public SetMatrix ($nameID: number, $value: UnityEngine.Matrix4x4) : void
            /** Sets a named texture.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_MainTex".
            * @param $value Texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public SetTexture ($name: string, $value: UnityEngine.Texture) : void
            /** Sets a named texture.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_MainTex".
            * @param $value Texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public SetTexture ($nameID: number, $value: UnityEngine.Texture) : void
            /** Sets a named texture.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_MainTex".
            * @param $value Texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public SetTexture ($name: string, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
            /** Sets a named texture.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_MainTex".
            * @param $value Texture to set.
            * @param $element Optional parameter that specifies the type of data to set from the RenderTexture.
            */
            public SetTexture ($nameID: number, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
            /** Sets a named buffer value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name.
            * @param $value The ComputeBuffer or GraphicsBuffer value to set.
            */
            public SetBuffer ($name: string, $value: UnityEngine.ComputeBuffer) : void
            /** Sets a named buffer value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name.
            * @param $value The ComputeBuffer or GraphicsBuffer value to set.
            */
            public SetBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer) : void
            /** Sets a named buffer value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name.
            * @param $value The ComputeBuffer or GraphicsBuffer value to set.
            */
            public SetBuffer ($name: string, $value: UnityEngine.GraphicsBuffer) : void
            /** Sets a named buffer value.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name.
            * @param $value The ComputeBuffer or GraphicsBuffer value to set.
            */
            public SetBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material.
            * @param $name The name of the constant buffer to override.
            * @param $value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            * @param $nameID The shader property ID of the constant buffer to override.
            */
            public SetConstantBuffer ($name: string, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material.
            * @param $name The name of the constant buffer to override.
            * @param $value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            * @param $nameID The shader property ID of the constant buffer to override.
            */
            public SetConstantBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material.
            * @param $name The name of the constant buffer to override.
            * @param $value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            * @param $nameID The shader property ID of the constant buffer to override.
            */
            public SetConstantBuffer ($name: string, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material.
            * @param $name The name of the constant buffer to override.
            * @param $value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
            * @param $offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
            * @param $size The number of bytes to bind.
            * @param $nameID The shader property ID of the constant buffer to override.
            */
            public SetConstantBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
            public SetFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
            public SetFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
            /** Sets a float array property.
            * @param $name Property name.
            * @param $nameID Property name ID. Use Shader.PropertyToID to get this ID.
            * @param $values Array of values to set.
            */
            public SetFloatArray ($name: string, $values: System.Array$1<number>) : void
            /** Sets a float array property.
            * @param $name Property name.
            * @param $nameID Property name ID. Use Shader.PropertyToID to get this ID.
            * @param $values Array of values to set.
            */
            public SetFloatArray ($nameID: number, $values: System.Array$1<number>) : void
            public SetColorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
            public SetColorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
            /** Sets a color array property.
            * @param $name Property name.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $values Array of values to set.
            */
            public SetColorArray ($name: string, $values: System.Array$1<UnityEngine.Color>) : void
            /** Sets a color array property.
            * @param $name Property name.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $values Array of values to set.
            */
            public SetColorArray ($nameID: number, $values: System.Array$1<UnityEngine.Color>) : void
            public SetVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            public SetVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            /** Sets a vector array property.
            * @param $name Property name.
            * @param $values Array of values to set.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            */
            public SetVectorArray ($name: string, $values: System.Array$1<UnityEngine.Vector4>) : void
            /** Sets a vector array property.
            * @param $name Property name.
            * @param $values Array of values to set.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            */
            public SetVectorArray ($nameID: number, $values: System.Array$1<UnityEngine.Vector4>) : void
            public SetMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            public SetMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            /** Sets a matrix array property.
            * @param $name Property name.
            * @param $values Array of values to set.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            */
            public SetMatrixArray ($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
            /** Sets a matrix array property.
            * @param $name Property name.
            * @param $values Array of values to set.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            */
            public SetMatrixArray ($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
            /** This method is deprecated. Use GetFloat or GetInteger instead.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetInt ($name: string) : number
            /** This method is deprecated. Use GetFloat or GetInteger instead.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetInt ($nameID: number) : number
            /** Get a named float value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetFloat ($name: string) : number
            /** Get a named float value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetFloat ($nameID: number) : number
            /** Get a named integer value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetInteger ($name: string) : number
            /** Get a named integer value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetInteger ($nameID: number) : number
            /** Get a named color value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetColor ($name: string) : UnityEngine.Color
            /** Get a named color value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetColor ($nameID: number) : UnityEngine.Color
            /** Get a named vector value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetVector ($name: string) : UnityEngine.Vector4
            /** Get a named vector value.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetVector ($nameID: number) : UnityEngine.Vector4
            /** Get a named matrix value from the shader.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetMatrix ($name: string) : UnityEngine.Matrix4x4
            /** Get a named matrix value from the shader.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetMatrix ($nameID: number) : UnityEngine.Matrix4x4
            /** Get a named texture.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetTexture ($name: string) : UnityEngine.Texture
            /** Get a named texture.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetTexture ($nameID: number) : UnityEngine.Texture
            /** Get a named Graphics Buffer value.
            * @param $name The name of the graphics buffer resource property to return.
            * @returns Returns the handle of the graphics buffer resource property. 
            */
            public GetBuffer ($name: string) : UnityEngine.GraphicsBufferHandle
            /** Get a named Constant Buffer value.
            * @param $name The name of the constant buffer property to return.
            * @returns Returns the handle of the constant buffer graphics resource. 
            */
            public GetConstantBuffer ($name: string) : UnityEngine.GraphicsBufferHandle
            /** Get a named float array.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            */
            public GetFloatArray ($name: string) : System.Array$1<number>
            /** Get a named float array.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            */
            public GetFloatArray ($nameID: number) : System.Array$1<number>
            /** Get a named color array.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetColorArray ($name: string) : System.Array$1<UnityEngine.Color>
            /** Get a named color array.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetColorArray ($nameID: number) : System.Array$1<UnityEngine.Color>
            /** Get a named vector array.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            */
            public GetVectorArray ($name: string) : System.Array$1<UnityEngine.Vector4>
            /** Get a named vector array.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            */
            public GetVectorArray ($nameID: number) : System.Array$1<UnityEngine.Vector4>
            /** Get a named matrix array.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            */
            public GetMatrixArray ($name: string) : System.Array$1<UnityEngine.Matrix4x4>
            /** Get a named matrix array.
            * @param $name The name of the property.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            */
            public GetMatrixArray ($nameID: number) : System.Array$1<UnityEngine.Matrix4x4>
            public GetFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
            public GetFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
            public GetColorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
            public GetColorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
            public GetVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            public GetVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
            public GetMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            public GetMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
            /** Sets the placement offset of a given texture. The name parameter is defined in the shader. This method creates a new Material instance.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name The name of the texture property as defined in the shader. For example: "_MainTex".
            * @param $value Texture placement offset.
            */
            public SetTextureOffset ($name: string, $value: UnityEngine.Vector2) : void
            /** Sets the placement offset of a given texture. The name parameter is defined in the shader. This method creates a new Material instance.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name The name of the texture property as defined in the shader. For example: "_MainTex".
            * @param $value Texture placement offset.
            */
            public SetTextureOffset ($nameID: number, $value: UnityEngine.Vector2) : void
            /** Sets the placement scale of texture propertyName.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_MainTex".
            * @param $value Texture placement scale.
            */
            public SetTextureScale ($name: string, $value: UnityEngine.Vector2) : void
            /** Sets the placement scale of texture propertyName.
            * @param $nameID Property name ID, use Shader.PropertyToID to get it.
            * @param $name Property name, e.g. "_MainTex".
            * @param $value Texture placement scale.
            */
            public SetTextureScale ($nameID: number, $value: UnityEngine.Vector2) : void
            /** Gets the placement offset of texture propertyName.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetTextureOffset ($name: string) : UnityEngine.Vector2
            /** Gets the placement offset of texture propertyName.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetTextureOffset ($nameID: number) : UnityEngine.Vector2
            /** Gets the placement scale of texture propertyName.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetTextureScale ($name: string) : UnityEngine.Vector2
            /** Gets the placement scale of texture propertyName.
            * @param $nameID The name ID of the property retrieved by Shader.PropertyToID.
            * @param $name The name of the property.
            */
            public GetTextureScale ($nameID: number) : UnityEngine.Vector2
            /** Retrieves a list of the named properties in the material that match the input property type.
            * @param $type The type to use to query the material for named properties.
            */
            public GetPropertyNames ($type: UnityEngine.MaterialPropertyType) : System.Array$1<string>
            public constructor ($shader: UnityEngine.Shader)
            public constructor ($source: UnityEngine.Material)
            public constructor ()
        }
        /** How the material interacts with lightmaps and lightprobes.
        */
        enum MaterialGlobalIlluminationFlags
        { None = 0, RealtimeEmissive = 1, BakedEmissive = 2, EmissiveIsBlack = 4, AnyEmissive = 3 }
        /** GPU data buffer, mostly for use with compute shaders.
        */
        class ComputeBuffer extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        /** GPU graphics data buffer, for working with geometry or compute shader data.
        */
        class GraphicsBuffer extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents the internal handle/id of a GraphicsBuffer.
        */
        class GraphicsBufferHandle extends System.ValueType implements System.IEquatable$1<UnityEngine.GraphicsBufferHandle>
        {
            protected [__keep_incompatibility]: never;
        }
        /** The type of a given material property.
        */
        enum MaterialPropertyType
        { Float = 0, Int = 1, Vector = 2, Matrix = 3, Texture = 4, ConstantBuffer = 5, ComputeBuffer = 6 }
        enum TexGenMode
        { None = 0, SphereMap = 1, Object = 2, EyeLinear = 3, CubeReflect = 4, CubeNormal = 5 }
        /** General functionality for all renderers.
        */
        class Renderer extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** The bounding box of the renderer in world space.
            */
            public get bounds(): UnityEngine.Bounds;
            public set bounds(value: UnityEngine.Bounds);
            /** The bounding box of the renderer in local space.
            */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Makes the rendered 3D object visible if enabled.
            */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Is this renderer visible in any camera? (Read Only)
            */
            public get isVisible(): boolean;
            /** Does this object cast shadows?
            */
            public get shadowCastingMode(): UnityEngine.Rendering.ShadowCastingMode;
            public set shadowCastingMode(value: UnityEngine.Rendering.ShadowCastingMode);
            /** Does this object receive shadows?
            */
            public get receiveShadows(): boolean;
            public set receiveShadows(value: boolean);
            /** Allows turning off rendering for a specific component.
            */
            public get forceRenderingOff(): boolean;
            public set forceRenderingOff(value: boolean);
            /** Is this renderer a static shadow caster?
            */
            public get staticShadowCaster(): boolean;
            public set staticShadowCaster(value: boolean);
            /** Specifies the mode for motion vector rendering.
            */
            public get motionVectorGenerationMode(): UnityEngine.MotionVectorGenerationMode;
            public set motionVectorGenerationMode(value: UnityEngine.MotionVectorGenerationMode);
            /** The light probe interpolation type.
            */
            public get lightProbeUsage(): UnityEngine.Rendering.LightProbeUsage;
            public set lightProbeUsage(value: UnityEngine.Rendering.LightProbeUsage);
            /** Should reflection probes be used for this Renderer?
            */
            public get reflectionProbeUsage(): UnityEngine.Rendering.ReflectionProbeUsage;
            public set reflectionProbeUsage(value: UnityEngine.Rendering.ReflectionProbeUsage);
            /** Determines which rendering layer this renderer lives on, if you use a.
            */
            public get renderingLayerMask(): number;
            public set renderingLayerMask(value: number);
            /** This value sorts renderers by priority. Lower values are rendered first and higher values are rendered last.
            */
            public get rendererPriority(): number;
            public set rendererPriority(value: number);
            /** Describes how this renderer is updated for ray tracing.
            */
            public get rayTracingMode(): UnityEngine.Experimental.Rendering.RayTracingMode;
            public set rayTracingMode(value: UnityEngine.Experimental.Rendering.RayTracingMode);
            /** Name of the Renderer's sorting layer.
            */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Unique ID of the Renderer's sorting layer.
            */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Renderer's order within a sorting layer.
            */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** Controls if dynamic occlusion culling should be performed for this renderer.
            */
            public get allowOcclusionWhenDynamic(): boolean;
            public set allowOcclusionWhenDynamic(value: boolean);
            /** Indicates whether the renderer is part of a with other renderers.
            */
            public get isPartOfStaticBatch(): boolean;
            /** Matrix that transforms a point from world space into local space (Read Only).
            */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only).
            */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** If set, the Renderer will use the Light Probe Proxy Volume component attached to the source GameObject.
            */
            public get lightProbeProxyVolumeOverride(): UnityEngine.GameObject;
            public set lightProbeProxyVolumeOverride(value: UnityEngine.GameObject);
            /** If set, Renderer will use this Transform's position to find the light or reflection probe.
            */
            public get probeAnchor(): UnityEngine.Transform;
            public set probeAnchor(value: UnityEngine.Transform);
            /** The index of the baked lightmap applied to this renderer.
            */
            public get lightmapIndex(): number;
            public set lightmapIndex(value: number);
            /** The index of the real-time lightmap applied to this renderer.
            */
            public get realtimeLightmapIndex(): number;
            public set realtimeLightmapIndex(value: number);
            /** The UV scale & offset used for a lightmap.
            */
            public get lightmapScaleOffset(): UnityEngine.Vector4;
            public set lightmapScaleOffset(value: UnityEngine.Vector4);
            /** The UV scale & offset used for a real-time lightmap.
            */
            public get realtimeLightmapScaleOffset(): UnityEngine.Vector4;
            public set realtimeLightmapScaleOffset(value: UnityEngine.Vector4);
            /** Returns all the instantiated materials of this object.
            */
            public get materials(): System.Array$1<UnityEngine.Material>;
            public set materials(value: System.Array$1<UnityEngine.Material>);
            /** Returns the first instantiated Material assigned to the renderer.
            */
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            /** The shared material of this object.
            */
            public get sharedMaterial(): UnityEngine.Material;
            public set sharedMaterial(value: UnityEngine.Material);
            /** All the shared materials of this object.
            */
            public get sharedMaterials(): System.Array$1<UnityEngine.Material>;
            public set sharedMaterials(value: System.Array$1<UnityEngine.Material>);
            /** Reset custom world space bounds.
            */
            public ResetBounds () : void
            /** Reset custom local space bounds.
            */
            public ResetLocalBounds () : void
            /** Returns true if the Renderer has a material property block attached via SetPropertyBlock.
            */
            public HasPropertyBlock () : boolean
            /** Lets you set or clear per-renderer or per-material parameter overrides.
            * @param $properties Property block with values you want to override.
            * @param $materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
            */
            public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
            /** Lets you set or clear per-renderer or per-material parameter overrides.
            * @param $properties Property block with values you want to override.
            * @param $materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
            */
            public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number) : void
            /** Get per-Renderer or per-Material property block.
            * @param $properties Material parameters to retrieve.
            * @param $materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
            */
            public GetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
            /** Get per-Renderer or per-Material property block.
            * @param $properties Material parameters to retrieve.
            * @param $materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
            */
            public GetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number) : void
            public GetMaterials ($m: System.Collections.Generic.List$1<UnityEngine.Material>) : void
            public SetSharedMaterials ($materials: System.Collections.Generic.List$1<UnityEngine.Material>) : void
            public SetMaterials ($materials: System.Collections.Generic.List$1<UnityEngine.Material>) : void
            public GetSharedMaterials ($m: System.Collections.Generic.List$1<UnityEngine.Material>) : void
            public GetClosestReflectionProbes ($result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>) : void
            public constructor ()
        }
        /** A block of material values to apply.
        */
        class MaterialPropertyBlock extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** The type of motion vectors that should be generated.
        */
        enum MotionVectorGenerationMode
        { Camera = 0, Object = 1, ForceNoMotion = 2 }
        /** Renders meshes inserted by the MeshFilter or TextMesh.
        */
        class MeshRenderer extends UnityEngine.Renderer
        {
            protected [__keep_incompatibility]: never;
            /** Vertex attributes in this mesh will override or add attributes of the primary mesh in the MeshRenderer.
            */
            public get additionalVertexStreams(): UnityEngine.Mesh;
            public set additionalVertexStreams(value: UnityEngine.Mesh);
            /** Vertex attributes that override the primary mesh when the MeshRenderer uses lightmaps in the Realtime Global Illumination system.
            */
            public get enlightenVertexStream(): UnityEngine.Mesh;
            public set enlightenVertexStream(value: UnityEngine.Mesh);
            /** Index of the first sub-mesh to use from the Mesh associated with this MeshRenderer (Read Only).
            */
            public get subMeshStartIndex(): number;
            /** Specifies the relative lightmap resolution of this object. (Editor only)
            */
            public get scaleInLightmap(): number;
            public set scaleInLightmap(value: number);
            /** Determines how the object will receive global illumination. (Editor only)
            */
            public get receiveGI(): UnityEngine.ReceiveGI;
            public set receiveGI(value: UnityEngine.ReceiveGI);
            /** When enabled, seams in baked lightmaps will get smoothed. (Editor only)
            */
            public get stitchLightmapSeams(): boolean;
            public set stitchLightmapSeams(value: boolean);
            public constructor ()
        }
        /** A class that allows you to create or modify meshes.
        */
        class Mesh extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** This property only takes effect if you enable a global illumination setting such as for the GameObject associated with the target Mesh Renderer. Otherwise this property defaults to the Light Probes setting.
        */
        enum ReceiveGI
        { Lightmaps = 1, LightProbes = 2 }
        /** The Skinned Mesh filter.
        */
        class SkinnedMeshRenderer extends UnityEngine.Renderer
        {
            protected [__keep_incompatibility]: never;
            /** The maximum number of bones per vertex that are taken into account during skinning.
            */
            public get quality(): UnityEngine.SkinQuality;
            public set quality(value: UnityEngine.SkinQuality);
            /** If enabled, the Skinned Mesh will be updated when offscreen. If disabled, this also disables updating animations.
            */
            public get updateWhenOffscreen(): boolean;
            public set updateWhenOffscreen(value: boolean);
            /** Forces the Skinned Mesh to recalculate its matricies when rendered
            */
            public get forceMatrixRecalculationPerRender(): boolean;
            public set forceMatrixRecalculationPerRender(value: boolean);
            public get rootBone(): UnityEngine.Transform;
            public set rootBone(value: UnityEngine.Transform);
            /** The bones used to skin the mesh.
            */
            public get bones(): System.Array$1<UnityEngine.Transform>;
            public set bones(value: System.Array$1<UnityEngine.Transform>);
            /** The mesh used for skinning.
            */
            public get sharedMesh(): UnityEngine.Mesh;
            public set sharedMesh(value: UnityEngine.Mesh);
            /** Specifies whether skinned motion vectors should be used for this renderer.
            */
            public get skinnedMotionVectors(): boolean;
            public set skinnedMotionVectors(value: boolean);
            /** The intended target usage of the skinned mesh GPU vertex buffer.
            */
            public get vertexBufferTarget(): UnityEngine.GraphicsBuffer.Target;
            public set vertexBufferTarget(value: UnityEngine.GraphicsBuffer.Target);
            /** Returns the weight of a BlendShape for this Renderer.
            * @param $index The index of the BlendShape whose weight you want to retrieve. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer.
            * @returns The weight of the BlendShape. 
            */
            public GetBlendShapeWeight ($index: number) : number
            /** Sets the weight of a BlendShape for this Renderer.
            * @param $index The index of the BlendShape to modify. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer.
            * @param $value The weight for this BlendShape.
            */
            public SetBlendShapeWeight ($index: number, $value: number) : void
            /** Creates a snapshot of SkinnedMeshRenderer and stores it in mesh.
            * @param $mesh A static mesh that will receive the snapshot of the skinned mesh.
            * @param $useScale Whether to use the SkinnedMeshRenderer's Transform scale when baking the Mesh. If this is true, Unity bakes the Mesh using the position, rotation, and scale values from the SkinnedMeshRenderer's Transform. If this is false, Unity bakes the Mesh using the position and rotation values from the SkinnedMeshRenderer's Transform, but without using the scale value from the SkinnedMeshRenderer's Transform. The default value is false.
            */
            public BakeMesh ($mesh: UnityEngine.Mesh) : void
            /** Creates a snapshot of SkinnedMeshRenderer and stores it in mesh.
            * @param $mesh A static mesh that will receive the snapshot of the skinned mesh.
            * @param $useScale Whether to use the SkinnedMeshRenderer's Transform scale when baking the Mesh. If this is true, Unity bakes the Mesh using the position, rotation, and scale values from the SkinnedMeshRenderer's Transform. If this is false, Unity bakes the Mesh using the position and rotation values from the SkinnedMeshRenderer's Transform, but without using the scale value from the SkinnedMeshRenderer's Transform. The default value is false.
            */
            public BakeMesh ($mesh: UnityEngine.Mesh, $useScale: boolean) : void
            /** Retrieves a GraphicsBuffer that provides direct access to the GPU vertex buffer for this skinned mesh, for the current frame.
            * @returns The skinned mesh vertex buffer as a GraphicsBuffer. 
            */
            public GetVertexBuffer () : UnityEngine.GraphicsBuffer
            /** Retrieves a GraphicsBuffer that provides direct access to the GPU vertex buffer for this skinned mesh, for the previous frame.
            * @returns The skinned mesh vertex buffer as a GraphicsBuffer. 
            */
            public GetPreviousVertexBuffer () : UnityEngine.GraphicsBuffer
            public constructor ()
        }
        /** The maximum number of bones affecting a single vertex.
        */
        enum SkinQuality
        { Auto = 0, Bone1 = 1, Bone2 = 2, Bone4 = 4 }
        /** Anisotropic filtering mode.
        */
        enum AnisotropicFiltering
        { Disable = 0, Enable = 1, ForceEnable = 2 }
        /** Wrap mode for textures.
        */
        enum TextureWrapMode
        { Repeat = 0, Clamp = 1, Mirror = 2, MirrorOnce = 3 }
        /** Filtering mode for textures. Corresponds to the settings in a.
        */
        enum FilterMode
        { Point = 0, Bilinear = 1, Trilinear = 2 }
        /** Represents  a 128-bit hash value.
        */
        class Hash128 extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEngine.Hash128>, System.IEquatable$1<UnityEngine.Hash128>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Class that represents textures in C# code.
        */
        class Texture2D extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
            /** The format of the pixel data in the texture (Read Only).
            */
            public get format(): UnityEngine.TextureFormat;
            /** This property causes a texture to ignore all texture mipmap limit settings.
            */
            public get ignoreMipmapLimit(): boolean;
            public set ignoreMipmapLimit(value: boolean);
            /** The name of the texture mipmap limit group that this texture is associated with. (Read Only)
            */
            public get mipmapLimitGroup(): string;
            /** The number of high resolution mipmap levels from the texture that Unity doesn't upload to the GPU. (Read Only)
            */
            public get activeMipmapLimit(): number;
            /** Gets a small Texture with all white pixels.
            */
            public static get whiteTexture(): UnityEngine.Texture2D;
            /** Gets a small Texture with all black pixels.
            */
            public static get blackTexture(): UnityEngine.Texture2D;
            /** Gets a small Texture with all red pixels.
            */
            public static get redTexture(): UnityEngine.Texture2D;
            /** Gets a small Texture with all gray pixels.
            */
            public static get grayTexture(): UnityEngine.Texture2D;
            /** Gets a small Texture with all gray pixels.
            */
            public static get linearGrayTexture(): UnityEngine.Texture2D;
            /** Gets a small Texture with pixels that represent surface normal vectors at a neutral position.
            */
            public static get normalTexture(): UnityEngine.Texture2D;
            public get isReadable(): boolean;
            /** Returns true if the VTOnly checkbox was checked when the texture was imported; otherwise returns false. For additional information, see TextureImporter.vtOnly.
            */
            public get vtOnly(): boolean;
            /** Determines whether mipmap streaming is enabled for this Texture.
            */
            public get streamingMipmaps(): boolean;
            /** Sets the relative priority for this Texture when reducing memory size to fit within the memory budget.
            */
            public get streamingMipmapsPriority(): number;
            /** The mipmap level to load.
            */
            public get requestedMipmapLevel(): number;
            public set requestedMipmapLevel(value: number);
            /** Restricts the mipmap streaming system to a minimum mip level for this Texture.
            */
            public get minimumMipmapLevel(): number;
            public set minimumMipmapLevel(value: number);
            /** The mipmap level calculated by the streaming system, which takes into account the streaming Cameras and the location of the objects containing this Texture. This is unaffected by requestedMipmapLevel or minimumMipmapLevel.
            */
            public get calculatedMipmapLevel(): number;
            /** The mipmap level that the streaming system would load before memory budgets are applied.
            */
            public get desiredMipmapLevel(): number;
            /** The mipmap level that the mipmap streaming system is in the process of loading.
            */
            public get loadingMipmapLevel(): number;
            /** The mipmap level that is currently loaded by the streaming system.
            */
            public get loadedMipmapLevel(): number;
            /** Indicates whether this texture was imported with TextureImporter.alphaIsTransparency enabled. This setting is available only in the Editor scripts. Note that changing this setting will have no effect; it must be enabled in TextureImporter instead.
            */
            public get alphaIsTransparency(): boolean;
            public set alphaIsTransparency(value: boolean);
            /** Compress texture at runtime to DXT/BCn or ETC formats.
            */
            public Compress ($highQuality: boolean) : void
            /** Resets the requestedMipmapLevel field.
            */
            public ClearRequestedMipmapLevel () : void
            /** Checks to see whether the mipmap level set by requestedMipmapLevel has finished loading.
            * @returns True if the mipmap level requested by requestedMipmapLevel has finished loading. 
            */
            public IsRequestedMipmapLevelLoaded () : boolean
            /** Resets the minimumMipmapLevel field.
            */
            public ClearMinimumMipmapLevel () : void
            /** Updates Unity texture to use different native texture object.
            * @param $nativeTex Native 2D texture object.
            */
            public UpdateExternalTexture ($nativeTex: System.IntPtr) : void
            /** Gets the raw data from a texture, as a copy.
            * @returns A byte array that contains raw texture data. 
            */
            public GetRawTextureData () : System.Array$1<number>
            /** Gets the pixel color data for part of a mipmap level as Color structs.
            * @param $x The starting x position of the section to fetch.
            * @param $y The starting y position of the section to fetch.
            * @param $blockWidth The width of the section to fetch.
            * @param $blockHeight The height of the section to fetch.
            * @param $miplevel The mipmap level to read from. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $miplevel: number) : System.Array$1<UnityEngine.Color>
            /** Gets the pixel color data for part of a mipmap level as Color structs.
            * @param $x The starting x position of the section to fetch.
            * @param $y The starting y position of the section to fetch.
            * @param $blockWidth The width of the section to fetch.
            * @param $blockHeight The height of the section to fetch.
            * @param $miplevel The mipmap level to read from. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number) : System.Array$1<UnityEngine.Color>
            /** Gets the pixel color data for a mipmap level as Color32 structs.
            * @param $miplevel The mipmap level to get. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels32 ($miplevel: number) : System.Array$1<UnityEngine.Color32>
            public GetPixels32 () : System.Array$1<UnityEngine.Color32>
            /** Packs multiple Textures into a texture atlas.
            * @param $textures Array of textures to pack into the atlas.
            * @param $padding Padding in pixels between the packed textures.
            * @param $maximumAtlasSize Maximum size of the resulting texture.
            * @param $makeNoLongerReadable Should the texture be marked as no longer readable?
            * @returns An array of rectangles containing the UV coordinates in the atlas for each input texture, or null if packing fails. 
            */
            public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number, $maximumAtlasSize: number, $makeNoLongerReadable: boolean) : System.Array$1<UnityEngine.Rect>
            public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number, $maximumAtlasSize: number) : System.Array$1<UnityEngine.Rect>
            public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number) : System.Array$1<UnityEngine.Rect>
            /** Creates a Unity Texture out of an externally created native texture object.
            * @param $nativeTex Native 2D texture object.
            * @param $width Width of texture in pixels.
            * @param $height Height of texture in pixels.
            * @param $format Format of underlying texture object.
            * @param $mipmap Does the texture have mipmaps?
            * @param $linear Is texture using linear color space?
            */
            public static CreateExternalTexture ($width: number, $height: number, $format: UnityEngine.TextureFormat, $mipChain: boolean, $linear: boolean, $nativeTex: System.IntPtr) : UnityEngine.Texture2D
            /** Sets the pixel color at coordinates (x,y).
            * @param $x The x coordinate of the pixel to set. The range is 0 through (texture width - 1).
            * @param $y The y coordinate of the pixel to set. The range is 0 through (texture height - 1).
            * @param $color The color to set.
            * @param $mipLevel The mipmap level to write to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixel ($x: number, $y: number, $color: UnityEngine.Color) : void
            /** Sets the pixel color at coordinates (x,y).
            * @param $x The x coordinate of the pixel to set. The range is 0 through (texture width - 1).
            * @param $y The y coordinate of the pixel to set. The range is 0 through (texture height - 1).
            * @param $color The color to set.
            * @param $mipLevel The mipmap level to write to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixel ($x: number, $y: number, $color: UnityEngine.Color, $mipLevel: number) : void
            /** Sets the pixel colors of part of a mipmap level.
            * @param $x The x coordinate to place the block of pixels at. The range is 0 through (texture width - 1).
            * @param $y The y coordinate to place the block of pixels at. The range is 0 through (texture height - 1).
            * @param $blockWidth The width of the block of pixels to set.
            * @param $blockHeight The height of the block of pixels to set.
            * @param $colors The array of pixel colours to use. This is a 2D image flattened to a 1D array. Must be blockWidth x blockHeight in length.
            * @param $miplevel The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
            public SetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color>) : void
            /** Sets the pixel colors of an entire mipmap level.
            * @param $colors The array of pixel colours to use. This is a 2D image flattened to a 1D array.
            * @param $miplevel The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixels ($colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
            public SetPixels ($colors: System.Array$1<UnityEngine.Color>) : void
            /** Gets the pixel color at coordinates (x, y).
            * @param $x The x coordinate of the pixel to get. The range is 0 through (texture width - 1).
            * @param $y The y coordinate of the pixel to get. The range is 0 through (texture height - 1).
            * @param $mipLevel The mipmap level to sample. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns The pixel color. 
            */
            public GetPixel ($x: number, $y: number) : UnityEngine.Color
            /** Gets the pixel color at coordinates (x, y).
            * @param $x The x coordinate of the pixel to get. The range is 0 through (texture width - 1).
            * @param $y The y coordinate of the pixel to get. The range is 0 through (texture height - 1).
            * @param $mipLevel The mipmap level to sample. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns The pixel color. 
            */
            public GetPixel ($x: number, $y: number, $mipLevel: number) : UnityEngine.Color
            /** Gets the filtered pixel color at the normalized coordinates (u, v).
            * @param $u The u coordinate of the pixel to get.
            * @param $v The v coordinate of the pixel to get.
            * @param $mipLevel The mipmap level to read from. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns The pixel color. 
            */
            public GetPixelBilinear ($u: number, $v: number) : UnityEngine.Color
            /** Gets the filtered pixel color at the normalized coordinates (u, v).
            * @param $u The u coordinate of the pixel to get.
            * @param $v The v coordinate of the pixel to get.
            * @param $mipLevel The mipmap level to read from. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns The pixel color. 
            */
            public GetPixelBilinear ($u: number, $v: number, $mipLevel: number) : UnityEngine.Color
            /** Sets the raw data of an entire texture in CPU memory.
            * @param $data The array of data to use.
            * @param $size The size of the data in bytes.
            */
            public LoadRawTextureData ($data: System.IntPtr, $size: number) : void
            /** Sets the raw data of an entire texture in CPU memory.
            * @param $data The array of data to use.
            * @param $size The size of the data in bytes.
            */
            public LoadRawTextureData ($data: System.Array$1<number>) : void
            /** Copies changes you've made in a CPU texture to the GPU.
            * @param $updateMipmaps When the value is true, Unity recalculates mipmap levels, using mipmap level 0 as the source. The default value is true.
            * @param $makeNoLongerReadable When the value is true, Unity deletes the texture in CPU memory after it uploads it to the GPU, and sets Texture.isReadable|isReadable to false. The default value is false.
            */
            public Apply ($updateMipmaps: boolean, $makeNoLongerReadable: boolean) : void
            public Apply ($updateMipmaps: boolean) : void
            public Apply () : void
            /** Reinitializes a Texture2D, making it possible for you to replace width, height, textureformat, and graphicsformat data for that texture.
            * @param $width New width of the Texture.
            * @param $height New height of the Texture.
            * @param $format New format of the Texture.
            * @param $hasMipMap Indicates if the Texture should reserve memory for a full mip map chain.
            * @returns Returns true if the reinitialization was a success. 
            */
            public Reinitialize ($width: number, $height: number) : boolean
            /** Reinitializes a Texture2D, making it possible for you to replace width, height, textureformat, and graphicsformat data for that texture.
            * @param $width New width of the Texture.
            * @param $height New height of the Texture.
            * @param $format New format of the Texture.
            * @param $hasMipMap Indicates if the Texture should reserve memory for a full mip map chain.
            * @returns Returns true if the reinitialization was a success. 
            */
            public Reinitialize ($width: number, $height: number, $format: UnityEngine.TextureFormat, $hasMipMap: boolean) : boolean
            /** Reinitializes a Texture2D, making it possible for you to replace width, height, textureformat, and graphicsformat data for that texture.
            * @param $width New width of the Texture.
            * @param $height New height of the Texture.
            * @param $format New format of the Texture.
            * @param $hasMipMap Indicates if the Texture should reserve memory for a full mip map chain.
            * @returns Returns true if the reinitialization was a success. 
            */
            public Reinitialize ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $hasMipMap: boolean) : boolean
            /** Reads pixels from the current render target and writes them to a texture.
            * @param $source The region of the render target to read from.
            * @param $destX The x position in the texture to write the pixels to.
            * @param $destY The y position in the texture to write the pixels to.
            * @param $recalculateMipMaps When the value is true, Unity automatically recalculates the mipmap for the texture after it writes the pixel data. Otherwise, Unity doesn't do this automatically.
            */
            public ReadPixels ($source: UnityEngine.Rect, $destX: number, $destY: number, $recalculateMipMaps: boolean) : void
            public ReadPixels ($source: UnityEngine.Rect, $destX: number, $destY: number) : void
            public static GenerateAtlas ($sizes: System.Array$1<UnityEngine.Vector2>, $padding: number, $atlasSize: number, $results: System.Collections.Generic.List$1<UnityEngine.Rect>) : boolean
            /** Sets the pixel colors of an entire mipmap level.
            * @param $colors The array of pixel colours to use. This is a 2D image flattened to a 1D array.
            * @param $miplevel The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
            /** Sets the pixel colors of an entire mipmap level.
            * @param $colors The array of pixel colours to use. This is a 2D image flattened to a 1D array.
            * @param $miplevel The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>) : void
            /** Sets the pixel colors of part of a mipmap level.
            * @param $x The x coordinate to place the block of pixels at. The range is 0 through (texture width - 1).
            * @param $y The y coordinate to place the block of pixels at. The range is 0 through (texture height - 1).
            * @param $blockWidth The width of the block of pixels to set.
            * @param $blockHeight The height of the block of pixels to set.
            * @param $colors The array of pixel colours to use. This is a 2D image flattened to a 1D array. Must be blockWidth x blockHeight in length.
            * @param $miplevel The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixels32 ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
            /** Sets the pixel colors of part of a mipmap level.
            * @param $x The x coordinate to place the block of pixels at. The range is 0 through (texture width - 1).
            * @param $y The y coordinate to place the block of pixels at. The range is 0 through (texture height - 1).
            * @param $blockWidth The width of the block of pixels to set.
            * @param $blockHeight The height of the block of pixels to set.
            * @param $colors The array of pixel colours to use. This is a 2D image flattened to a 1D array. Must be blockWidth x blockHeight in length.
            * @param $miplevel The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            */
            public SetPixels32 ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color32>) : void
            /** Gets the pixel color data for a mipmap level as Color structs.
            * @param $miplevel The mipmap level to get. The range is 0 through the texture's Texture.mipmapCount. The default value is 0.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels ($miplevel: number) : System.Array$1<UnityEngine.Color>
            public GetPixels () : System.Array$1<UnityEngine.Color>
            public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.DefaultFormat, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
            public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.DefaultFormat, $mipCount: number, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
            public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.DefaultFormat, $mipCount: number, $mipmapLimitGroupName: string, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
            public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
            public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $mipCount: number, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
            public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $mipCount: number, $mipmapLimitGroupName: string, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
            public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipCount: number, $linear: boolean)
            public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipCount: number, $linear: boolean, $createUninitialized: boolean)
            public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipCount: number, $linear: boolean, $createUninitialized: boolean, $ignoreMipmapLimit: boolean, $mipmapLimitGroupName: string)
            public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipChain: boolean, $linear: boolean)
            public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipChain: boolean, $linear: boolean, $createUninitialized: boolean)
            public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipChain: boolean)
            public constructor ($width: number, $height: number)
            public constructor ()
        }
        /** Format used when creating textures from scripts.
        */
        enum TextureFormat
        { Alpha8 = 1, ARGB4444 = 2, RGB24 = 3, RGBA32 = 4, ARGB32 = 5, RGB565 = 7, R16 = 9, DXT1 = 10, DXT5 = 12, RGBA4444 = 13, BGRA32 = 14, RHalf = 15, RGHalf = 16, RGBAHalf = 17, RFloat = 18, RGFloat = 19, RGBAFloat = 20, YUY2 = 21, RGB9e5Float = 22, BC4 = 26, BC5 = 27, BC6H = 24, BC7 = 25, DXT1Crunched = 28, DXT5Crunched = 29, PVRTC_RGB2 = 30, PVRTC_RGBA2 = 31, PVRTC_RGB4 = 32, PVRTC_RGBA4 = 33, ETC_RGB4 = 34, ATC_RGB4 = -127, ATC_RGBA8 = -127, EAC_R = 41, EAC_R_SIGNED = 42, EAC_RG = 43, EAC_RG_SIGNED = 44, ETC2_RGB = 45, ETC2_RGBA1 = 46, ETC2_RGBA8 = 47, ASTC_4x4 = 48, ASTC_5x5 = 49, ASTC_6x6 = 50, ASTC_8x8 = 51, ASTC_10x10 = 52, ASTC_12x12 = 53, ETC_RGB4_3DS = 60, ETC_RGBA8_3DS = 61, RG16 = 62, R8 = 63, ETC_RGB4Crunched = 64, ETC2_RGBA8Crunched = 65, ASTC_HDR_4x4 = 66, ASTC_HDR_5x5 = 67, ASTC_HDR_6x6 = 68, ASTC_HDR_8x8 = 69, ASTC_HDR_10x10 = 70, ASTC_HDR_12x12 = 71, RG32 = 72, RGB48 = 73, RGBA64 = 74, ASTC_RGB_4x4 = 48, ASTC_RGB_5x5 = 49, ASTC_RGB_6x6 = 50, ASTC_RGB_8x8 = 51, ASTC_RGB_10x10 = 52, ASTC_RGB_12x12 = 53, ASTC_RGBA_4x4 = 54, ASTC_RGBA_5x5 = 55, ASTC_RGBA_6x6 = 56, ASTC_RGBA_8x8 = 57, ASTC_RGBA_10x10 = 58, ASTC_RGBA_12x12 = 59, PVRTC_2BPP_RGB = -127, PVRTC_2BPP_RGBA = -127, PVRTC_4BPP_RGB = -127, PVRTC_4BPP_RGBA = -127 }
        /** Represents a Sprite object for use in 2D gameplay.
        */
        class Sprite extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Bounds of the Sprite, specified by its center and extents in world space units.
            */
            public get bounds(): UnityEngine.Bounds;
            /** Location of the Sprite on the original Texture, specified in pixels.
            */
            public get rect(): UnityEngine.Rect;
            /** Returns the border sizes of the Sprite.
            */
            public get border(): UnityEngine.Vector4;
            /** Get the reference to the used Texture. If packed this will point to the atlas, if not packed will point to the source Sprite.
            */
            public get texture(): UnityEngine.Texture2D;
            /** The number of pixels in the Sprite that correspond to one unit in world space. (Read Only)
            */
            public get pixelsPerUnit(): number;
            /** The Variant scale of Texture used by the Sprite. This is useful to check when a Variant SpriteAtlas is being used by Sprites.
            */
            public get spriteAtlasTextureScale(): number;
            /** Returns the Texture that contains the alpha channel from the source Texture. Unity generates this Texture under the hood for Sprites that have alpha in the source, and need to be compressed using techniques like ETC1.
            Returns NULL if there is no associated alpha Texture for the source Sprite. This is the case if the Sprite has not been setup to use ETC1 compression.
            */
            public get associatedAlphaSplitTexture(): UnityEngine.Texture2D;
            /** Location of the Sprite's pivot point in the Rect on the original Texture, specified in pixels.
            */
            public get pivot(): UnityEngine.Vector2;
            /** Returns true if this Sprite is packed in an atlas.
            */
            public get packed(): boolean;
            /** If Sprite is packed (see Sprite.packed), returns its SpritePackingMode.
            */
            public get packingMode(): UnityEngine.SpritePackingMode;
            /** If Sprite is packed (see Sprite.packed), returns its SpritePackingRotation.
            */
            public get packingRotation(): UnityEngine.SpritePackingRotation;
            /** Get the rectangle this Sprite uses on its Texture. Raises an exception if this Sprite is tightly packed in an atlas.
            */
            public get textureRect(): UnityEngine.Rect;
            /** Gets the offset of the rectangle this Sprite uses on its Texture to the original Sprite bounds. If Sprite mesh type is FullRect, offset is zero.
            */
            public get textureRectOffset(): UnityEngine.Vector2;
            /** Returns a copy of the array containing Sprite mesh vertex positions.
            */
            public get vertices(): System.Array$1<UnityEngine.Vector2>;
            /** Returns a copy of the array containing Sprite mesh triangles.
            */
            public get triangles(): System.Array$1<number>;
            /** The base Texture coordinates of the Sprite mesh.
            */
            public get uv(): System.Array$1<UnityEngine.Vector2>;
            /** Gets the number of Secondary Textures that the Sprite is using.
            * @returns Returns the number of Secondary Textures that the Sprite is using. 
            */
            public GetSecondaryTextureCount () : number
            /** Retrieves an array of SecondarySpriteTexture used by the Sprite.
            * @param $secondaryTexture The array of SecondarySpriteTexture to contain the Secondary Textures properties used by the Sprite.
            * @returns Returns the number of Secondary Textures properties retrieved. 
            */
            public GetSecondaryTextures ($secondaryTexture: System.Array$1<UnityEngine.SecondarySpriteTexture>) : number
            /** The number of physics shapes for the Sprite.
            * @returns The number of physics shapes for the Sprite. 
            */
            public GetPhysicsShapeCount () : number
            /** The number of points in the selected physics shape for the Sprite.
            * @param $shapeIdx The index of the physics shape to retrieve the number of points from.
            * @returns The number of points in the selected physics shape for the Sprite. 
            */
            public GetPhysicsShapePointCount ($shapeIdx: number) : number
            public GetPhysicsShape ($shapeIdx: number, $physicsShape: System.Collections.Generic.List$1<UnityEngine.Vector2>) : number
            public OverridePhysicsShape ($physicsShapes: System.Collections.Generic.IList$1<System.Array$1<UnityEngine.Vector2>>) : void
            /** Sets up new Sprite geometry.
            * @param $vertices Array of vertex positions in Sprite Rect space.
            * @param $triangles Array of sprite mesh triangle indices.
            */
            public OverrideGeometry ($vertices: System.Array$1<UnityEngine.Vector2>, $triangles: System.Array$1<number>) : void
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4, $generateFallbackPhysicsShape: boolean) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4, $generateFallbackPhysicsShape: boolean, $secondaryTextures: System.Array$1<UnityEngine.SecondarySpriteTexture>) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param $texture The Texture to obtain the Sprite graphic from.
            * @param $rect The rectangular section of the Texture to use for the Sprite.
            * @param $pivot The Sprite's pivot point relative to its graphic rectangle.
            * @param $pixelsPerUnit The number of pixels in the Sprite that correspond to one unit in world space.
            * @param $extrude The amount by which the Sprite mesh should be expanded outwards.
            * @param $meshType The type of mesh that is generated for the Sprite.
            * @param $border The border sizes of the Sprite (X=left, Y=bottom, Z=right, W=top).
            * @param $generateFallbackPhysicsShape Whether to generate a default physics shape for the Sprite.
            * @param $secondaryTextures The Secondary Texture properties to be used by the created Sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2) : UnityEngine.Sprite
        }
        /** Encapsulates a Texture2D and its shader property name to give Sprite-based renderers access to a secondary texture, in addition to the main Sprite texture.
        */
        class SecondarySpriteTexture extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Sprite packing modes for the Sprite Packer.
        */
        enum SpritePackingMode
        { Tight = 0, Rectangle = 1 }
        /** Sprite rotation modes for the Sprite Packer.
        */
        enum SpritePackingRotation
        { None = 0, FlipHorizontal = 1, FlipVertical = 2, Rotate180 = 3, Any = 15 }
        /** Defines the type of mesh generated for a sprite.
        */
        enum SpriteMeshType
        { FullRect = 0, Tight = 1 }
        /** Script interface for.
        */
        class Light extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** The type of the light.
            */
            public get type(): UnityEngine.LightType;
            public set type(value: UnityEngine.LightType);
            /** This property describes the shape of the spot light. Only Scriptable Render Pipelines use this property; the built-in renderer does not support it.
            */
            public get shape(): UnityEngine.LightShape;
            public set shape(value: UnityEngine.LightShape);
            /** The angle of the spot light's cone in degrees.
            */
            public get spotAngle(): number;
            public set spotAngle(value: number);
            /** The angle of the spot light's inner cone in degrees.
            */
            public get innerSpotAngle(): number;
            public set innerSpotAngle(value: number);
            /** The color of the light.
            */
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            /** 
            The color temperature of the light.
            Correlated Color Temperature (abbreviated as CCT) is multiplied with the color filter when calculating the final color of a light source. The color temperature of the electromagnetic radiation emitted from an ideal black body is defined as its surface temperature in Kelvin. White is 6500K according to the D65 standard. A candle light is 1800K and a soft warm light bulb is 2700K.
            If you want to use colorTemperature, GraphicsSettings.lightsUseLinearIntensity and Light.useColorTemperature has to be enabled.
            Additional resources: GraphicsSettings.lightsUseLinearIntensity, GraphicsSettings.useColorTemperature.
            */
            public get colorTemperature(): number;
            public set colorTemperature(value: number);
            /** Set to true to use the color temperature.
            */
            public get useColorTemperature(): boolean;
            public set useColorTemperature(value: boolean);
            /** The Intensity of a light is multiplied with the Light color.
            */
            public get intensity(): number;
            public set intensity(value: number);
            /** The multiplier that defines the strength of the bounce lighting.
            */
            public get bounceIntensity(): number;
            public set bounceIntensity(value: number);
            /** Set to true to override light bounding sphere for culling.
            */
            public get useBoundingSphereOverride(): boolean;
            public set useBoundingSphereOverride(value: boolean);
            /** Bounding sphere used to override the regular light bounding sphere during culling.
            */
            public get boundingSphereOverride(): UnityEngine.Vector4;
            public set boundingSphereOverride(value: UnityEngine.Vector4);
            /** Whether to cull shadows for this Light when the Light is outside of the view frustum.
            */
            public get useViewFrustumForShadowCasterCull(): boolean;
            public set useViewFrustumForShadowCasterCull(value: boolean);
            /** The custom resolution of the shadow map.
            */
            public get shadowCustomResolution(): number;
            public set shadowCustomResolution(value: number);
            /** Shadow mapping constant bias.
            */
            public get shadowBias(): number;
            public set shadowBias(value: number);
            /** Shadow mapping normal-based bias.
            */
            public get shadowNormalBias(): number;
            public set shadowNormalBias(value: number);
            /** Near plane value to use for shadow frustums.
            */
            public get shadowNearPlane(): number;
            public set shadowNearPlane(value: number);
            /** Set to true to enable custom matrix for culling during shadows.
            */
            public get useShadowMatrixOverride(): boolean;
            public set useShadowMatrixOverride(value: boolean);
            /** Matrix that overrides the regular light projection matrix during shadow culling. Unity uses this matrix if you set Light.useShadowMatrixOverride to true.
            */
            public get shadowMatrixOverride(): UnityEngine.Matrix4x4;
            public set shadowMatrixOverride(value: UnityEngine.Matrix4x4);
            /** The range of the light.
            */
            public get range(): number;
            public set range(value: number);
            /** The to use for this light.
            */
            public get flare(): UnityEngine.Flare;
            public set flare(value: UnityEngine.Flare);
            /** This property describes the output of the last Global Illumination bake.
            */
            public get bakingOutput(): UnityEngine.LightBakingOutput;
            public set bakingOutput(value: UnityEngine.LightBakingOutput);
            /** This is used to light certain objects in the Scene selectively.
            */
            public get cullingMask(): number;
            public set cullingMask(value: number);
            /** Determines which rendering LayerMask this Light affects.
            */
            public get renderingLayerMask(): number;
            public set renderingLayerMask(value: number);
            /** Allows you to override the global Shadowmask Mode per light. Only use this with render pipelines that can handle per light Shadowmask modes. Incompatible with the legacy renderers.
            */
            public get lightShadowCasterMode(): UnityEngine.LightShadowCasterMode;
            public set lightShadowCasterMode(value: UnityEngine.LightShadowCasterMode);
            /** Controls the amount of artificial softening applied to the edges of shadows cast by the Point or Spot light (Editor only).
            */
            public get shadowRadius(): number;
            public set shadowRadius(value: number);
            /** Controls the amount of artificial softening applied to the edges of shadows cast by directional lights (Editor only).
            */
            public get shadowAngle(): number;
            public set shadowAngle(value: number);
            /** How this light casts shadows
            */
            public get shadows(): UnityEngine.LightShadows;
            public set shadows(value: UnityEngine.LightShadows);
            /** Strength of light's shadows.
            */
            public get shadowStrength(): number;
            public set shadowStrength(value: number);
            /** The resolution of the shadow map.
            */
            public get shadowResolution(): UnityEngine.Rendering.LightShadowResolution;
            public set shadowResolution(value: UnityEngine.Rendering.LightShadowResolution);
            /** Per-light, per-layer shadow culling distances. Directional lights only. 
            */
            public get layerShadowCullDistances(): System.Array$1<number>;
            public set layerShadowCullDistances(value: System.Array$1<number>);
            /** The size of a directional light's cookie.
            */
            public get cookieSize(): number;
            public set cookieSize(value: number);
            /** The cookie texture projected by the light.
            */
            public get cookie(): UnityEngine.Texture;
            public set cookie(value: UnityEngine.Texture);
            /** How to render the light.
            */
            public get renderMode(): UnityEngine.LightRenderMode;
            public set renderMode(value: UnityEngine.LightRenderMode);
            /** The size of the area light (Editor only).
            */
            public get areaSize(): UnityEngine.Vector2;
            public set areaSize(value: UnityEngine.Vector2);
            /** This property describes what part of a light's contribution can be baked (Editor only).
            */
            public get lightmapBakeType(): UnityEngine.LightmapBakeType;
            public set lightmapBakeType(value: UnityEngine.LightmapBakeType);
            /** Number of command buffers set up on this light (Read Only).
            */
            public get commandBufferCount(): number;
            /** Revert all light parameters to default.
            */
            public Reset () : void
            /** Sets a light dirty to notify the light baking backends to update their internal light representation (Editor only).
            */
            public SetLightDirty () : void
            /** Add a command buffer to be executed at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @param $buffer The buffer to execute.
            * @param $shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Add a command buffer to be executed at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @param $buffer The buffer to execute.
            * @param $shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $shadowPassMask: UnityEngine.Rendering.ShadowMapPass) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point.
            * @param $evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param $buffer The buffer to execute.
            * @param $queueType The desired async compute queue type to execute the buffer on.
            * @param $shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point.
            * @param $evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param $buffer The buffer to execute.
            * @param $queueType The desired async compute queue type to execute the buffer on.
            * @param $shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $shadowPassMask: UnityEngine.Rendering.ShadowMapPass, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Remove command buffer from execution at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @param $buffer The buffer to execute.
            */
            public RemoveCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Remove command buffers from execution at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            */
            public RemoveCommandBuffers ($evt: UnityEngine.Rendering.LightEvent) : void
            /** Remove all command buffers set on this light.
            */
            public RemoveAllCommandBuffers () : void
            /** Get command buffers to be executed at a specified place.
            * @param $evt When to execute the command buffer during rendering.
            * @returns Array of command buffers. 
            */
            public GetCommandBuffers ($evt: UnityEngine.Rendering.LightEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
            public constructor ()
        }
        /** The type of a Light.
        */
        enum LightType
        { Spot = 0, Directional = 1, Point = 2, Area = 3, Rectangle = 3, Disc = 4 }
        /** Describes the shape of a spot light.
        */
        enum LightShape
        { Cone = 0, Pyramid = 1, Box = 2 }
        /** A flare asset. Read more about flares in the.
        */
        class Flare extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Struct describing the result of a Global Illumination bake for a given light.
        */
        class LightBakingOutput extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Allows mixed lights to control shadow caster culling when Shadowmasks are present.
        */
        enum LightShadowCasterMode
        { Default = 0, NonLightmappedOnly = 1, Everything = 2 }
        /** Shadow casting options for a Light.
        */
        enum LightShadows
        { None = 0, Hard = 1, Soft = 2 }
        /** How the Light is rendered.
        */
        enum LightRenderMode
        { Auto = 0, ForcePixel = 1, ForceVertex = 2 }
        /** Enum describing what part of a light contribution can be baked.
        */
        enum LightmapBakeType
        { Realtime = 4, Baked = 2, Mixed = 1 }
        enum LightmappingMode
        { Realtime = 4, Baked = 2, Mixed = 1 }
        /** Provides access to display information.
        */
        class Screen extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The current width of the screen window in pixels (Read Only).
            */
            public static get width(): number;
            /** The current height of the screen window in pixels (Read Only).
            */
            public static get height(): number;
            /** The current pixel density of the screen measured in dots-per-inch (DPI) (Read Only).
            */
            public static get dpi(): number;
            /** The current screen resolution (Read Only).
            */
            public static get currentResolution(): UnityEngine.Resolution;
            /** Returns all full-screen resolutions that the monitor supports (Read Only).
            */
            public static get resolutions(): System.Array$1<UnityEngine.Resolution>;
            /** Enables full-screen mode for the application.
            */
            public static get fullScreen(): boolean;
            public static set fullScreen(value: boolean);
            /** Set this property to one of the values in FullScreenMode to change the display mode of your application.
            */
            public static get fullScreenMode(): UnityEngine.FullScreenMode;
            public static set fullScreenMode(value: UnityEngine.FullScreenMode);
            /** Returns the safe area of the screen in pixels (Read Only).
            */
            public static get safeArea(): UnityEngine.Rect;
            /** Returns a list of screen areas that are not functional for displaying content (Read Only).
            */
            public static get cutouts(): System.Array$1<UnityEngine.Rect>;
            /** Enables auto-rotation to portrait.
            */
            public static get autorotateToPortrait(): boolean;
            public static set autorotateToPortrait(value: boolean);
            /** Enables auto-rotation to portrait, upside down.
            */
            public static get autorotateToPortraitUpsideDown(): boolean;
            public static set autorotateToPortraitUpsideDown(value: boolean);
            /** Enables auto-rotation to landscape left.
            */
            public static get autorotateToLandscapeLeft(): boolean;
            public static set autorotateToLandscapeLeft(value: boolean);
            /** Enables auto-rotation to landscape right.
            */
            public static get autorotateToLandscapeRight(): boolean;
            public static set autorotateToLandscapeRight(value: boolean);
            /** Specifies logical orientation of the screen.
            */
            public static get orientation(): UnityEngine.ScreenOrientation;
            public static set orientation(value: UnityEngine.ScreenOrientation);
            /** A power saving setting, allowing the screen to dim some time after the last active user interaction.
            */
            public static get sleepTimeout(): number;
            public static set sleepTimeout(value: number);
            /** Indicates the current brightness of the screen.
            */
            public static get brightness(): number;
            public static set brightness(value: number);
            /** The position of the top left corner of the main window relative to the top left corner of the display.
            */
            public static get mainWindowPosition(): UnityEngine.Vector2Int;
            /** The display information associated with the display that the main application window is on.
            */
            public static get mainWindowDisplayInfo(): UnityEngine.DisplayInfo;
            /** Switches the screen resolution.
            */
            public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode, $preferredRefreshRate: UnityEngine.RefreshRate) : void
            /** Switches the screen resolution.
            */
            public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode) : void
            /** Switches the screen resolution.
            */
            public static SetResolution ($width: number, $height: number, $fullscreen: boolean) : void
            public static GetDisplayLayout ($displayLayout: System.Collections.Generic.List$1<UnityEngine.DisplayInfo>) : void
            /** Moves the main window to the specified position relative to the top left corner of the specified display. Position value is represented in pixels. Moving the window is an asynchronous operation, which can take multiple frames.
            * @param $display The target display where the window should move to.
            * @param $position The position the window moves to. Relative to the top left corner of the specified display in pixels.
            * @returns Returns AsyncOperation that represents moving the window. 
            */
            public static MoveMainWindowTo ($display: $Ref<UnityEngine.DisplayInfo>, $position: UnityEngine.Vector2Int) : UnityEngine.AsyncOperation
            public constructor ()
        }
        /** Represents a display resolution.
        */
        class Resolution extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Sets the full-screen mode. For information on platform compatibility, refer to the description of each mode.
        */
        enum FullScreenMode
        { ExclusiveFullScreen = 0, FullScreenWindow = 1, MaximizedWindow = 2, Windowed = 3 }
        /** Represents the display refresh rate. This is how many frames the display can show per second.
        */
        class RefreshRate extends System.ValueType implements System.IComparable$1<UnityEngine.RefreshRate>, System.IEquatable$1<UnityEngine.RefreshRate>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Describes screen orientation.
        */
        enum ScreenOrientation
        { Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, AutoRotation = 5, Unknown = 0, Landscape = 3 }
        /** Representation of 2D vectors and points using integers.
        */
        class Vector2Int extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2Int>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents a connected display.
        */
        class DisplayInfo extends System.ValueType implements System.IEquatable$1<UnityEngine.DisplayInfo>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Global physics properties and helper methods.
        */
        class Physics extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Layer mask constant to select ignore raycast layer.
            */
            public static IgnoreRaycastLayer : number
            /** Layer mask constant to select default raycast layers.
            */
            public static DefaultRaycastLayers : number
            /** Layer mask constant to select all layers.
            */
            public static AllLayers : number
            /** The gravity applied to all rigid bodies in the Scene.
            */
            public static get gravity(): UnityEngine.Vector3;
            public static set gravity(value: UnityEngine.Vector3);
            /** The default contact offset of the newly created colliders.
            */
            public static get defaultContactOffset(): number;
            public static set defaultContactOffset(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep.
            */
            public static get sleepThreshold(): number;
            public static set sleepThreshold(value: number);
            /** Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default.
            */
            public static get queriesHitTriggers(): boolean;
            public static set queriesHitTriggers(value: boolean);
            /** Whether physics queries should hit back-face triangles.
            */
            public static get queriesHitBackfaces(): boolean;
            public static set queriesHitBackfaces(value: boolean);
            /** Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.
            */
            public static get bounceThreshold(): number;
            public static set bounceThreshold(value: number);
            /** The maximum default velocity needed to move a Rigidbody's collider out of another collider's surface penetration. Must be positive.
            */
            public static get defaultMaxDepenetrationVelocity(): number;
            public static set defaultMaxDepenetrationVelocity(value: number);
            /** The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive.
            */
            public static get defaultSolverIterations(): number;
            public static set defaultSolverIterations(value: number);
            /** The defaultSolverVelocityIterations affects how accurately the Rigidbody joints and collision contacts are resolved. (default 1). Must be positive.
            */
            public static get defaultSolverVelocityIterations(): number;
            public static set defaultSolverVelocityIterations(value: number);
            /** Controls when Unity executes the physics simulation.
            */
            public static get simulationMode(): UnityEngine.SimulationMode;
            public static set simulationMode(value: UnityEngine.SimulationMode);
            /** Default maximum angular speed of the dynamic Rigidbody, in radians (default 50).
            */
            public static get defaultMaxAngularSpeed(): number;
            public static set defaultMaxAngularSpeed(value: number);
            /** Enables an improved patch friction mode that guarantees static and dynamic friction do not exceed analytical results.
            */
            public static get improvedPatchFriction(): boolean;
            public static set improvedPatchFriction(value: boolean);
            /** Whether or not MonoBehaviour collision messages will be sent by the physics system.
            */
            public static get invokeCollisionCallbacks(): boolean;
            public static set invokeCollisionCallbacks(value: boolean);
            /** The PhysicsScene automatically created when Unity starts.
            */
            public static get defaultPhysicsScene(): UnityEngine.PhysicsScene;
            /** Whether or not to automatically sync transform changes with the physics system whenever a Transform component changes.
            */
            public static get autoSyncTransforms(): boolean;
            public static set autoSyncTransforms(value: boolean);
            /** Determines whether the garbage collector should reuse only a single instance of a Collision type for all collision callbacks.
            */
            public static get reuseCollisionCallbacks(): boolean;
            public static set reuseCollisionCallbacks(value: boolean);
            /** Sets the minimum separation distance for cloth inter-collision.
            */
            public static get interCollisionDistance(): number;
            public static set interCollisionDistance(value: number);
            /** Sets the cloth inter-collision stiffness.
            */
            public static get interCollisionStiffness(): number;
            public static set interCollisionStiffness(value: number);
            public static get interCollisionSettingsToggle(): boolean;
            public static set interCollisionSettingsToggle(value: boolean);
            /** Cloth Gravity setting.
            Set gravity for all cloth components.
            */
            public static get clothGravity(): UnityEngine.Vector3;
            public static set clothGravity(value: UnityEngine.Vector3);
            public static add_ContactModifyEvent ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            public static remove_ContactModifyEvent ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            public static add_ContactModifyEventCCD ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            public static remove_ContactModifyEventCCD ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            /** Makes the collision detection system ignore all collisions between collider1 and collider2.
            * @param $collider1 Any collider.
            * @param $collider2 Another collider you want to have collider1 to start or stop ignoring collisions with.
            * @param $ignore Whether or not the collisions between the two colliders should be ignored or not.
            */
            public static IgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider, $ignore: boolean) : void
            public static IgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider) : void
            /** Makes the collision detection system ignore all collisions between any collider in layer1 and any collider in layer2.
            Note that IgnoreLayerCollision will reset the trigger state of affected colliders, so you might receive OnTriggerExit and OnTriggerEnter messages in response to calling this.
            */
            public static IgnoreLayerCollision ($layer1: number, $layer2: number, $ignore: boolean) : void
            public static IgnoreLayerCollision ($layer1: number, $layer2: number) : void
            /** Are collisions between layer1 and layer2 being ignored?
            */
            public static GetIgnoreLayerCollision ($layer1: number, $layer2: number) : boolean
            /** Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
            * @param $collider1 The first collider to compare to collider2.
            * @param $collider2 The second collider to compare to collider1.
            * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not. 
            */
            public static GetIgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider) : boolean
            /** Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore Colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true if the ray intersects with a Collider, otherwise false. 
            */
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : boolean
            /** Casts a ray against all colliders in the Scene and returns detailed information on what was hit.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Same as above using ray.origin and ray.direction instead of origin and direction.
            * @param $ray The starting point and direction of the ray.
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray) : boolean
            /** Same as above using ray.origin and ray.direction instead of origin and direction.
            * @param $ray The starting point and direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Returns true if there is any collider intersecting the line between start and end.
            * @param $start Start point.
            * @param $end End point.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : boolean
            /** Returns true if there is any collider intersecting the line between start and end.
            * @param $start Start point.
            * @param $end End point.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            */
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a capsule against all colliders in the Scene and returns detailed information on what was hit.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the capsule sweep intersects any collider, otherwise false. 
            */
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : boolean
            /** * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $maxDistance The max length of the sweep.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction into which to sweep the sphere.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number) : boolean
            /** * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : boolean
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Additional resources: Raycast.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layermask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Casts a ray through the Scene and returns all hits. Note that order of the results is undefined.
            * @param $ray The starting point and direction of the ray.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of RaycastHit objects. Note that the order of the results is undefined. 
            */
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray) : System.Array$1<UnityEngine.RaycastHit>
            /** Cast a ray through the Scene and store the hits into the buffer.
            * @param $ray The starting point and direction of the ray.
            * @param $results The buffer to store the hits into.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast a ray through the Scene and store the hits into the buffer.
            * @param $origin The starting point and direction of the ray.
            * @param $results The buffer to store the hits into.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Like Physics.CapsuleCast, but this function will return all hits the capsule sweep intersects.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $maxDistance The max length of the sweep.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction in which to sweep the sphere.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
            * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number) : System.Array$1<UnityEngine.RaycastHit>
            /** Check the given capsule against the physics world and return all overlapping colliders.
            * @param $point0 The center of the sphere at the start of the capsule.
            * @param $point1 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Colliders touching or inside the capsule. 
            */
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number) : System.Array$1<UnityEngine.Collider>
            /** Computes and stores colliders touching or inside the sphere.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $layerMask A defines which layers of colliders to include in the query.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns an array with all colliders touching or inside the sphere. 
            */
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number) : System.Array$1<UnityEngine.Collider>
            /** Simulate physics in the Scene.
            * @param $step The time to advance physics by.
            */
            public static Simulate ($step: number) : void
            /** Apply Transform changes to the physics engine.
            */
            public static SyncTransforms () : void
            /** Compute the minimal translation required to separate the given colliders apart at specified poses.
            * @param $colliderA The first collider.
            * @param $positionA Position of the first collider.
            * @param $rotationA Rotation of the first collider.
            * @param $colliderB The second collider.
            * @param $positionB Position of the second collider.
            * @param $rotationB Rotation of the second collider.
            * @param $direction Direction along which the translation required to separate the colliders apart is minimal.
            * @param $distance The distance along direction that is required to separate the colliders apart.
            * @returns True, if the colliders overlap at the given poses. 
            */
            public static ComputePenetration ($colliderA: UnityEngine.Collider, $positionA: UnityEngine.Vector3, $rotationA: UnityEngine.Quaternion, $colliderB: UnityEngine.Collider, $positionB: UnityEngine.Vector3, $rotationB: UnityEngine.Quaternion, $direction: $Ref<UnityEngine.Vector3>, $distance: $Ref<number>) : boolean
            /** Returns a point on the given collider that is closest to the specified location.
            * @param $point Location you want to find the closest point to.
            * @param $collider The collider that you find the closest point on.
            * @param $position The position of the collider.
            * @param $rotation The rotation of the collider.
            * @returns The point on the collider that is closest to the specified location. 
            */
            public static ClosestPoint ($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Vector3
            /** Computes and stores colliders touching or inside the sphere into the provided buffer.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $results The buffer to store the results into.
            * @param $layerMask A defines which layers of colliders to include in the query.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns the amount of colliders stored into the results buffer. 
            */
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number) : number
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number) : boolean
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number) : boolean
            /** Casts a capsule against all colliders in the Scene and returns detailed information on what was hit into the buffer.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $results The buffer to store the hits into.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the buffer. 
            */
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast sphere along the direction and store the results into buffer.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction in which to sweep the sphere.
            * @param $results The buffer to save the hits into.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast sphere along the direction and store the results into buffer.
            * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $results The buffer to save the results to.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Checks if any colliders overlap a capsule-shaped volume in world space.
            * @param $start The center of the sphere at the start of the capsule.
            * @param $end The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number) : boolean
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number) : boolean
            /** Check whether the given box overlaps with other colliders or not.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $orientation Rotation of the box.
            * @param $layermask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if the box overlaps with any colliders. 
            */
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layermask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3) : boolean
            /** Find all colliders touching or inside of the given box.
            * @param $center Center of the box.
            * @param $halfExtents Half of the size of the box in each dimension.
            * @param $orientation Rotation of the box.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Colliders that overlap with the given box. 
            */
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3) : System.Array$1<UnityEngine.Collider>
            /** Find all colliders touching or inside of the given box, and store them into the buffer.
            * @param $center Center of the box.
            * @param $halfExtents Half of the size of the box in each dimension.
            * @param $results The buffer to store the results in.
            * @param $orientation Rotation of the box.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of colliders stored in results. 
            */
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Cast the box along the direction, and store hits in the provided buffer.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $results The buffer to store the results in.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored to the results buffer. 
            */
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Like Physics.BoxCast, but returns all hits.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns All colliders that were hit. 
            */
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
            * @param $point0 The center of the sphere at the start of the capsule.
            * @param $point1 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $results The buffer to store the results into.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of entries written to the buffer. 
            */
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number) : number
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Rebuild the broadphase interest regions as well as set the world boundaries.
            * @param $worldBounds Boundaries of the physics world.
            * @param $subdivisions How many cells to create along x and z axis.
            */
            public static RebuildBroadphaseRegions ($worldBounds: UnityEngine.Bounds, $subdivisions: number) : void
            /** Prepares the mesh for use with a MeshCollider.
            * @param $meshID The instance ID of the mesh to bake collision data from.
            * @param $convex A flag to indicate whether to bake convex geometry or not.
            * @param $cookingOptions The cooking options to use when you bake the mesh.
            */
            public static BakeMesh ($meshID: number, $convex: boolean, $cookingOptions: UnityEngine.MeshColliderCookingOptions) : void
            /** Prepares the mesh for use with a MeshCollider and uses default cooking options.
            * @param $meshID The instance ID of the mesh to bake collision data from.
            * @param $convex A flag to indicate whether to bake convex geometry or not.
            */
            public static BakeMesh ($meshID: number, $convex: boolean) : void
            public static add_ContactEvent ($value: UnityEngine.Physics.ContactEventDelegate) : void
            public static remove_ContactEvent ($value: UnityEngine.Physics.ContactEventDelegate) : void
            public constructor ()
        }
        /** Represents a single instance of a 3D physics Scene.
        */
        class PhysicsScene extends System.ValueType implements System.IEquatable$1<UnityEngine.PhysicsScene>
        {
            protected [__keep_incompatibility]: never;
        }
        /** A light-weight proxy that allows to access the contact buffers directly.
        */
        class ModifiableContactPair extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** A selection of modes that control when Unity executes the physics simulation.
        */
        enum SimulationMode
        { FixedUpdate = 0, Update = 1, Script = 2 }
        /** A base class of all colliders.
        */
        class Collider extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Enabled Colliders will collide with other Colliders, disabled Colliders won't.
            */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** The rigidbody the collider is attached to.
            */
            public get attachedRigidbody(): UnityEngine.Rigidbody;
            /** The articulation body the collider is attached to.
            */
            public get attachedArticulationBody(): UnityEngine.ArticulationBody;
            /** Specify if this collider is configured as a trigger.
            */
            public get isTrigger(): boolean;
            public set isTrigger(value: boolean);
            /** Contact offset value of this collider.
            */
            public get contactOffset(): number;
            public set contactOffset(value: number);
            /** The world space bounding volume of the collider (Read Only).
            */
            public get bounds(): UnityEngine.Bounds;
            /** Specify whether this Collider's contacts are modifiable or not.
            */
            public get hasModifiableContacts(): boolean;
            public set hasModifiableContacts(value: boolean);
            /** Whether or not this Collider generates contacts for Physics.ContactEvent.
            */
            public get providesContacts(): boolean;
            public set providesContacts(value: boolean);
            /** A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
            */
            public get layerOverridePriority(): number;
            public set layerOverridePriority(value: number);
            /** The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
            */
            public get excludeLayers(): UnityEngine.LayerMask;
            public set excludeLayers(value: UnityEngine.LayerMask);
            /** The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
            */
            public get includeLayers(): UnityEngine.LayerMask;
            public set includeLayers(value: UnityEngine.LayerMask);
            /** The shared physic material of this collider.
            */
            public get sharedMaterial(): UnityEngine.PhysicMaterial;
            public set sharedMaterial(value: UnityEngine.PhysicMaterial);
            /** The material used by the collider.
            */
            public get material(): UnityEngine.PhysicMaterial;
            public set material(value: UnityEngine.PhysicMaterial);
            /** Returns a point on the collider that is closest to a given location.
            * @param $position Location you want to find the closest point to.
            * @returns The point on the collider that is closest to the specified location. 
            */
            public ClosestPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Casts a Ray that ignores all Colliders except this one.
            * @param $ray The starting point and direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit.
            * @param $maxDistance The max length of the ray.
            * @returns True when the ray intersects the collider, otherwise false. 
            */
            public Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            /** The closest point to the bounding box of the attached collider.
            */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            public constructor ()
        }
        /** Overrides the global Physics.queriesHitTriggers.
        */
        enum QueryTriggerInteraction
        { UseGlobal = 0, Ignore = 1, Collide = 2 }
        /** Structure used to get information back from a raycast.
        */
        class RaycastHit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The Collider that was hit.
            */
            public get collider(): UnityEngine.Collider;
            /** Instance ID of the Collider that was hit.
            */
            public get colliderInstanceID(): number;
            /** The impact point in world space where the ray hit the collider.
            */
            public get point(): UnityEngine.Vector3;
            public set point(value: UnityEngine.Vector3);
            /** The normal of the surface the ray hit.
            */
            public get normal(): UnityEngine.Vector3;
            public set normal(value: UnityEngine.Vector3);
            /** The barycentric coordinate of the triangle we hit.
            */
            public get barycentricCoordinate(): UnityEngine.Vector3;
            public set barycentricCoordinate(value: UnityEngine.Vector3);
            /** The distance from the ray's origin to the impact point.
            */
            public get distance(): number;
            public set distance(value: number);
            /** The index of the triangle that was hit.
            */
            public get triangleIndex(): number;
            /** The uv texture coordinate at the collision location.
            */
            public get textureCoord(): UnityEngine.Vector2;
            /** The secondary uv texture coordinate at the impact point.
            */
            public get textureCoord2(): UnityEngine.Vector2;
            /** The Transform of the rigidbody or collider that was hit.
            */
            public get transform(): UnityEngine.Transform;
            /** The Rigidbody of the collider that was hit. If the collider is not attached to a rigidbody then it is null.
            */
            public get rigidbody(): UnityEngine.Rigidbody;
            /** The ArticulationBody of the collider that was hit. If the collider is not attached to an articulation body then it is null.
            */
            public get articulationBody(): UnityEngine.ArticulationBody;
            /** The uv lightmap coordinate at the impact point.
            */
            public get lightmapCoord(): UnityEngine.Vector2;
        }
        /** Cooking options that are available with MeshCollider.
        */
        enum MeshColliderCookingOptions
        { None = 0, InflateConvexMesh = 1, CookForFasterSimulation = 2, EnableMeshCleaning = 4, WeldColocatedVertices = 8, UseFastMidphase = 16 }
        /** A header struct which contains colliding bodies.
        */
        class ContactPairHeader extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Control of an object's position through physics simulation.
        */
        class Rigidbody extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.
            */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** The angular velocity vector of the rigidbody measured in radians per second.
            */
            public get angularVelocity(): UnityEngine.Vector3;
            public set angularVelocity(value: UnityEngine.Vector3);
            /** The drag of the object.
            */
            public get drag(): number;
            public set drag(value: number);
            /** The angular drag of the object.
            */
            public get angularDrag(): number;
            public set angularDrag(value: number);
            /** The mass of the rigidbody.
            */
            public get mass(): number;
            public set mass(value: number);
            /** Controls whether gravity affects this rigidbody.
            */
            public get useGravity(): boolean;
            public set useGravity(value: boolean);
            /** Maximum velocity of a rigidbody when moving out of penetrating state.
            */
            public get maxDepenetrationVelocity(): number;
            public set maxDepenetrationVelocity(value: number);
            /** Controls whether physics affects the rigidbody.
            */
            public get isKinematic(): boolean;
            public set isKinematic(value: boolean);
            /** Controls whether physics will change the rotation of the object.
            */
            public get freezeRotation(): boolean;
            public set freezeRotation(value: boolean);
            /** Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
            */
            public get constraints(): UnityEngine.RigidbodyConstraints;
            public set constraints(value: UnityEngine.RigidbodyConstraints);
            /** The Rigidbody's collision detection mode.
            */
            public get collisionDetectionMode(): UnityEngine.CollisionDetectionMode;
            public set collisionDetectionMode(value: UnityEngine.CollisionDetectionMode);
            /** Whether or not to calculate the center of mass automatically.
            */
            public get automaticCenterOfMass(): boolean;
            public set automaticCenterOfMass(value: boolean);
            /** The center of mass relative to the transform's origin.
            */
            public get centerOfMass(): UnityEngine.Vector3;
            public set centerOfMass(value: UnityEngine.Vector3);
            /** The center of mass of the rigidbody in world space (Read Only).
            */
            public get worldCenterOfMass(): UnityEngine.Vector3;
            /** Whether or not to calculate the inertia tensor automatically.
            */
            public get automaticInertiaTensor(): boolean;
            public set automaticInertiaTensor(value: boolean);
            /** The rotation of the inertia tensor.
            */
            public get inertiaTensorRotation(): UnityEngine.Quaternion;
            public set inertiaTensorRotation(value: UnityEngine.Quaternion);
            /** The inertia tensor of this body, defined as a diagonal matrix in a reference frame positioned at this body's center of mass and rotated by Rigidbody.inertiaTensorRotation.
            */
            public get inertiaTensor(): UnityEngine.Vector3;
            public set inertiaTensor(value: UnityEngine.Vector3);
            /** Should collision detection be enabled? (By default always enabled).
            */
            public get detectCollisions(): boolean;
            public set detectCollisions(value: boolean);
            /** The position of the rigidbody.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** The rotation of the Rigidbody.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** Interpolation provides a way to manage the appearance of jitter in the movement of your Rigidbody GameObjects at run time.
            */
            public get interpolation(): UnityEngine.RigidbodyInterpolation;
            public set interpolation(value: UnityEngine.RigidbodyInterpolation);
            /** The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
            */
            public get solverIterations(): number;
            public set solverIterations(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep.
            */
            public get sleepThreshold(): number;
            public set sleepThreshold(value: number);
            /** The maximum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }.
            */
            public get maxAngularVelocity(): number;
            public set maxAngularVelocity(value: number);
            /** The maximum linear velocity of the rigidbody measured in meters per second.
            */
            public get maxLinearVelocity(): number;
            public set maxLinearVelocity(value: number);
            /** The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
            */
            public get solverVelocityIterations(): number;
            public set solverVelocityIterations(value: number);
            /** The additional layers that all Colliders attached to this Rigidbody should exclude when deciding if the Collider can come into contact with another Collider.
            */
            public get excludeLayers(): UnityEngine.LayerMask;
            public set excludeLayers(value: UnityEngine.LayerMask);
            /** The additional layers that all Colliders attached to this Rigidbody should include when deciding if the Collider can come into contact with another Collider.
            */
            public get includeLayers(): UnityEngine.LayerMask;
            public set includeLayers(value: UnityEngine.LayerMask);
            /** Sets the mass based on the attached colliders assuming a constant density.
            */
            public SetDensity ($density: number) : void
            /** Moves the kinematic Rigidbody towards position.
            * @param $position Provides the new position for the Rigidbody object.
            */
            public MovePosition ($position: UnityEngine.Vector3) : void
            /** Rotates the rigidbody to rotation.
            * @param $rot The new rotation for the Rigidbody.
            */
            public MoveRotation ($rot: UnityEngine.Quaternion) : void
            /** Moves the Rigidbody to position and rotates the Rigidbody to rotation.
            * @param $position The new position for the Rigidbody.
            * @param $rotation The new rotation for the Rigidbody.
            */
            public Move ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Forces a rigidbody to sleep at least one frame.
            */
            public Sleep () : void
            /** Is the rigidbody sleeping?
            */
            public IsSleeping () : boolean
            /** Forces a rigidbody to wake up.
            */
            public WakeUp () : void
            /** Reset the center of mass of the rigidbody.
            */
            public ResetCenterOfMass () : void
            /** Reset the inertia tensor value and rotation.
            */
            public ResetInertiaTensor () : void
            /** The velocity relative to the rigidbody at the point relativePoint.
            */
            public GetRelativePointVelocity ($relativePoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** The velocity of the rigidbody at the point worldPoint in global space.
            */
            public GetPointVelocity ($worldPoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns the force that the Rigidbody has accumulated before the simulation step.
            * @param $step The timestep of the next physics simulation.
            * @returns Accumulated force expressed in ForceMode.Force. 
            */
            public GetAccumulatedForce ($step: number) : UnityEngine.Vector3
            public GetAccumulatedForce () : UnityEngine.Vector3
            /** Returns the torque that the Rigidbody has accumulated before the simulation step.
            * @param $step The timestep of the next physics simulation.
            * @returns Accumulated torque expressed in ForceMode.Force. 
            */
            public GetAccumulatedTorque ($step: number) : UnityEngine.Vector3
            public GetAccumulatedTorque () : UnityEngine.Vector3
            /** Adds a force to the Rigidbody.
            * @param $force Force vector in world coordinates.
            * @param $mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody.
            * @param $force Force vector in world coordinates.
            * @param $mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the Rigidbody.
            * @param $x Size of force along the world x-axis.
            * @param $y Size of force along the world y-axis.
            * @param $z Size of force along the world z-axis.
            * @param $mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody.
            * @param $x Size of force along the world x-axis.
            * @param $y Size of force along the world y-axis.
            * @param $z Size of force along the world z-axis.
            * @param $mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $force Force vector in local coordinates.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $force Force vector in local coordinates.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $x Size of force along the local x-axis.
            * @param $y Size of force along the local y-axis.
            * @param $z Size of force along the local z-axis.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $x Size of force along the local x-axis.
            * @param $y Size of force along the local y-axis.
            * @param $z Size of force along the local z-axis.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody.
            * @param $torque Torque vector in world coordinates.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody.
            * @param $torque Torque vector in world coordinates.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody.
            * @param $x Size of torque along the world x-axis.
            * @param $y Size of torque along the world y-axis.
            * @param $z Size of torque along the world z-axis.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody.
            * @param $x Size of torque along the world x-axis.
            * @param $y Size of torque along the world y-axis.
            * @param $z Size of torque along the world z-axis.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $torque Torque vector in local coordinates.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $torque Torque vector in local coordinates.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $x Size of torque along the local x-axis.
            * @param $y Size of torque along the local y-axis.
            * @param $z Size of torque along the local z-axis.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $x Size of torque along the local x-axis.
            * @param $y Size of torque along the local y-axis.
            * @param $z Size of torque along the local z-axis.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number) : void
            /** Applies force at position. As a result this will apply a torque and force on the object.
            * @param $force Force vector in world coordinates.
            * @param $position Position in world coordinates.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies force at position. As a result this will apply a torque and force on the object.
            * @param $force Force vector in world coordinates.
            * @param $position Position in world coordinates.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param $explosionForce The force of the explosion (which may be modified by distance).
            * @param $explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param $explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param $upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param $mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param $explosionForce The force of the explosion (which may be modified by distance).
            * @param $explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param $explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param $upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param $mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param $explosionForce The force of the explosion (which may be modified by distance).
            * @param $explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param $explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param $upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param $mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number) : void
            /** The closest point to the bounding box of the attached colliders.
            */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Tests if a rigidbody would collide with anything, if it was moved through the Scene.
            * @param $direction The direction into which to sweep the rigidbody.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (Additional resources: RaycastHit).
            * @param $maxDistance The length of the sweep.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the rigidbody sweep intersects any collider, otherwise false. 
            */
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Like Rigidbody.SweepTest, but returns all hits.
            * @param $direction The direction into which to sweep the rigidbody.
            * @param $maxDistance The length of the sweep.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            public constructor ()
        }
        /** Use these flags to constrain motion of Rigidbodies.
        */
        enum RigidbodyConstraints
        { None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
        /** The collision detection mode constants used for Rigidbody.collisionDetectionMode.
        */
        enum CollisionDetectionMode
        { Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
        /** Rigidbody interpolation mode.
        */
        enum RigidbodyInterpolation
        { None = 0, Interpolate = 1, Extrapolate = 2 }
        /** Specifies Layers to use in a Physics.Raycast.
        */
        class LayerMask extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Converts a layer mask value to an integer value.
            */
            public get value(): number;
            public set value(value: number);
            public static op_Implicit ($mask: UnityEngine.LayerMask) : number
            public static op_Implicit ($intVal: number) : UnityEngine.LayerMask
            /** Given a layer number, returns the name of the layer as defined in either a Builtin or a User Layer in the.
            */
            public static LayerToName ($layer: number) : string
            /** Given a layer name, returns the layer index as defined by either a Builtin or a User Layer in the.
            */
            public static NameToLayer ($layerName: string) : number
            /** Given a set of layer names as defined by either a Builtin or a User Layer in the, returns the equivalent layer mask for all of them.
            * @param $layerNames List of layer names to convert to a layer mask.
            * @returns The layer mask created from the layerNames. 
            */
            public static GetMask (...layerNames: string[]) : number
        }
        /** Use ForceMode to specify how to apply a force using Rigidbody.AddForce or ArticulationBody.AddForce.
        */
        enum ForceMode
        { Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
        /** A body that forms part of a Physics articulation.
        */
        class ArticulationBody extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** Physics material describes how to handle colliding objects (friction, bounciness).
        */
        class PhysicMaterial extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** A box-shaped primitive collider.
        */
        class BoxCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The center of the box, measured in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The size of the box, measured in the object's local space.
            */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            public constructor ()
        }
        /** A sphere-shaped primitive collider.
        */
        class SphereCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The center of the sphere in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The radius of the sphere measured in the object's local space.
            */
            public get radius(): number;
            public set radius(value: number);
            public constructor ()
        }
        /** A capsule-shaped primitive collider.
        */
        class CapsuleCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The center of the capsule, measured in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The radius of the sphere, measured in the object's local space.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The height of the capsule measured in the object's local space.
            */
            public get height(): number;
            public set height(value: number);
            /** The direction of the capsule.
            */
            public get direction(): number;
            public set direction(value: number);
            public constructor ()
        }
        /** A mesh collider allows you to do between meshes and primitives.
        */
        class MeshCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The mesh object used for collision detection.
            */
            public get sharedMesh(): UnityEngine.Mesh;
            public set sharedMesh(value: UnityEngine.Mesh);
            /** Use a convex collider from the mesh.
            */
            public get convex(): boolean;
            public set convex(value: boolean);
            /** Options used to enable or disable certain features in mesh cooking.
            */
            public get cookingOptions(): UnityEngine.MeshColliderCookingOptions;
            public set cookingOptions(value: UnityEngine.MeshColliderCookingOptions);
            public constructor ()
        }
        /** Interface to control the Mecanim animation system.
        */
        class Animator extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
            */
            public get isOptimizable(): boolean;
            /** Returns true if the current rig is humanoid, false if it is generic.
            */
            public get isHuman(): boolean;
            /** Returns true if the current rig has root motion.
            */
            public get hasRootMotion(): boolean;
            /** Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
            */
            public get humanScale(): number;
            /** Returns whether the animator is initialized successfully.
            */
            public get isInitialized(): boolean;
            /** Gets the avatar delta position for the last evaluated frame.
            */
            public get deltaPosition(): UnityEngine.Vector3;
            /** Gets the avatar delta rotation for the last evaluated frame.
            */
            public get deltaRotation(): UnityEngine.Quaternion;
            /** Gets the avatar velocity  for the last evaluated frame.
            */
            public get velocity(): UnityEngine.Vector3;
            /** Gets the avatar angular velocity for the last evaluated frame.
            */
            public get angularVelocity(): UnityEngine.Vector3;
            /** The root position, the position of the game object.
            */
            public get rootPosition(): UnityEngine.Vector3;
            public set rootPosition(value: UnityEngine.Vector3);
            /** The root rotation, the rotation of the game object.
            */
            public get rootRotation(): UnityEngine.Quaternion;
            public set rootRotation(value: UnityEngine.Quaternion);
            /** Should root motion be applied?
            */
            public get applyRootMotion(): boolean;
            public set applyRootMotion(value: boolean);
            /** Specifies the update mode of the Animator.
            */
            public get updateMode(): UnityEngine.AnimatorUpdateMode;
            public set updateMode(value: UnityEngine.AnimatorUpdateMode);
            /** Returns true if the object has a transform hierarchy.
            */
            public get hasTransformHierarchy(): boolean;
            /** The current gravity weight based on current animations that are played.
            */
            public get gravityWeight(): number;
            /** The position of the body center of mass.
            */
            public get bodyPosition(): UnityEngine.Vector3;
            public set bodyPosition(value: UnityEngine.Vector3);
            /** The rotation of the body center of mass.
            */
            public get bodyRotation(): UnityEngine.Quaternion;
            public set bodyRotation(value: UnityEngine.Quaternion);
            /** Automatic stabilization of feet during transition and blending.
            */
            public get stabilizeFeet(): boolean;
            public set stabilizeFeet(value: boolean);
            /** Returns the number of layers in the controller.
            */
            public get layerCount(): number;
            /** The AnimatorControllerParameter list used by the animator. (Read Only)
            */
            public get parameters(): System.Array$1<UnityEngine.AnimatorControllerParameter>;
            /** Returns the number of parameters in the controller.
            */
            public get parameterCount(): number;
            /** Blends pivot point between body center of mass and feet pivot.
            */
            public get feetPivotActive(): number;
            public set feetPivotActive(value: number);
            /** Gets the pivot weight.
            */
            public get pivotWeight(): number;
            /** Get the current position of the pivot.
            */
            public get pivotPosition(): UnityEngine.Vector3;
            /** If automatic matching is active.
            */
            public get isMatchingTarget(): boolean;
            /** The playback speed of the Animator. 1 is normal playback speed.
            */
            public get speed(): number;
            public set speed(value: number);
            /** Returns the position of the target specified by SetTarget.
            */
            public get targetPosition(): UnityEngine.Vector3;
            /** Returns the rotation of the target specified by SetTarget.
            */
            public get targetRotation(): UnityEngine.Quaternion;
            /** Returns the Avatar root Transform.
            */
            public get avatarRoot(): UnityEngine.Transform;
            /** Controls culling of this Animator component.
            */
            public get cullingMode(): UnityEngine.AnimatorCullingMode;
            public set cullingMode(value: UnityEngine.AnimatorCullingMode);
            /** Sets the playback position in the recording buffer.
            */
            public get playbackTime(): number;
            public set playbackTime(value: number);
            /** Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
            */
            public get recorderStartTime(): number;
            public set recorderStartTime(value: number);
            /** End time of the recorded clip relative to when StartRecording was called.
            */
            public get recorderStopTime(): number;
            public set recorderStopTime(value: number);
            /** Gets the mode of the Animator recorder.
            */
            public get recorderMode(): UnityEngine.AnimatorRecorderMode;
            /** The runtime representation of AnimatorController that controls the Animator.
            */
            public get runtimeAnimatorController(): UnityEngine.RuntimeAnimatorController;
            public set runtimeAnimatorController(value: UnityEngine.RuntimeAnimatorController);
            /** Returns true if Animator has any playables assigned to it.
            */
            public get hasBoundPlayables(): boolean;
            /** Gets/Sets the current Avatar.
            */
            public get avatar(): UnityEngine.Avatar;
            public set avatar(value: UnityEngine.Avatar);
            /** The PlayableGraph created by the Animator.
            */
            public get playableGraph(): UnityEngine.Playables.PlayableGraph;
            /** Additional layers affects the center of mass.
            */
            public get layersAffectMassCenter(): boolean;
            public set layersAffectMassCenter(value: boolean);
            /** Get left foot bottom height.
            */
            public get leftFeetBottomHeight(): number;
            /** Get right foot bottom height.
            */
            public get rightFeetBottomHeight(): number;
            public get logWarnings(): boolean;
            public set logWarnings(value: boolean);
            /** Sets whether the Animator sends events of type AnimationEvent.
            */
            public get fireEvents(): boolean;
            public set fireEvents(value: boolean);
            /** Controls the behaviour of the Animator component when a GameObject is inactive.
            */
            public get keepAnimatorStateOnDisable(): boolean;
            public set keepAnimatorStateOnDisable(value: boolean);
            /** Specifies whether playable graph values are reset or preserved when the Animator is disabled.
            */
            public get writeDefaultValuesOnDisable(): boolean;
            public set writeDefaultValuesOnDisable(value: boolean);
            /** Returns the value of the given float parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetFloat ($name: string) : number
            /** Returns the value of the given float parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetFloat ($id: number) : number
            /** Send float values to the Animator to affect transitions.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            * @param $dampTime The damper total time.
            * @param $deltaTime The delta time to give to the damper.
            */
            public SetFloat ($name: string, $value: number) : void
            /** Send float values to the Animator to affect transitions.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            * @param $dampTime The damper total time.
            * @param $deltaTime The delta time to give to the damper.
            */
            public SetFloat ($name: string, $value: number, $dampTime: number, $deltaTime: number) : void
            /** Send float values to the Animator to affect transitions.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            * @param $dampTime The damper total time.
            * @param $deltaTime The delta time to give to the damper.
            */
            public SetFloat ($id: number, $value: number) : void
            /** Send float values to the Animator to affect transitions.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            * @param $dampTime The damper total time.
            * @param $deltaTime The delta time to give to the damper.
            */
            public SetFloat ($id: number, $value: number, $dampTime: number, $deltaTime: number) : void
            /** Returns the value of the given boolean parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetBool ($name: string) : boolean
            /** Returns the value of the given boolean parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetBool ($id: number) : boolean
            /** Sets the value of the given boolean parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            */
            public SetBool ($name: string, $value: boolean) : void
            /** Sets the value of the given boolean parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            */
            public SetBool ($id: number, $value: boolean) : void
            /** Returns the value of the given integer parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetInteger ($name: string) : number
            /** Returns the value of the given integer parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetInteger ($id: number) : number
            /** Sets the value of the given integer parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            */
            public SetInteger ($name: string, $value: number) : void
            /** Sets the value of the given integer parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @param $value The new parameter value.
            */
            public SetInteger ($id: number, $value: number) : void
            /** Sets the value of the given trigger parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            */
            public SetTrigger ($name: string) : void
            /** Sets the value of the given trigger parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            */
            public SetTrigger ($id: number) : void
            /** Resets the value of the given trigger parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            */
            public ResetTrigger ($name: string) : void
            /** Resets the value of the given trigger parameter.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            */
            public ResetTrigger ($id: number) : void
            /** Returns true if the parameter is controlled by a curve, false otherwise.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns True if the parameter is controlled by a curve, false otherwise. 
            */
            public IsParameterControlledByCurve ($name: string) : boolean
            /** Returns true if the parameter is controlled by a curve, false otherwise.
            * @param $name The parameter name.
            * @param $id The parameter ID.
            * @returns True if the parameter is controlled by a curve, false otherwise. 
            */
            public IsParameterControlledByCurve ($id: number) : boolean
            /** Gets the position of an IK goal.
            * @param $goal The AvatarIKGoal that is queried.
            * @returns Return the current position of this IK goal in world space. 
            */
            public GetIKPosition ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Vector3
            /** Sets the position of an IK goal.
            * @param $goal The AvatarIKGoal that is set.
            * @param $goalPosition The position in world space.
            */
            public SetIKPosition ($goal: UnityEngine.AvatarIKGoal, $goalPosition: UnityEngine.Vector3) : void
            /** Gets the rotation of an IK goal.
            * @param $goal The AvatarIKGoal that is is queried.
            */
            public GetIKRotation ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Quaternion
            /** Sets the rotation of an IK goal.
            * @param $goal The AvatarIKGoal that is set.
            * @param $goalRotation The rotation of the goal in world space which should follow Unity's world coordinates convention (see below).
            */
            public SetIKRotation ($goal: UnityEngine.AvatarIKGoal, $goalRotation: UnityEngine.Quaternion) : void
            /** Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
            * @param $goal The AvatarIKGoal that is queried.
            */
            public GetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal) : number
            /** Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
            * @param $goal The AvatarIKGoal that is set.
            * @param $value The translative weight.
            */
            public SetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
            /** Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
            * @param $goal The AvatarIKGoal that is queried.
            */
            public GetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal) : number
            /** Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
            * @param $goal The AvatarIKGoal that is set.
            * @param $value The rotational weight.
            */
            public SetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
            /** Gets the position of an IK hint.
            * @param $hint The AvatarIKHint that is queried.
            * @returns Return the current position of this IK hint in world space. 
            */
            public GetIKHintPosition ($hint: UnityEngine.AvatarIKHint) : UnityEngine.Vector3
            /** Sets the position of an IK hint.
            * @param $hint The AvatarIKHint that is set.
            * @param $hintPosition The position in world space.
            */
            public SetIKHintPosition ($hint: UnityEngine.AvatarIKHint, $hintPosition: UnityEngine.Vector3) : void
            /** Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
            * @param $hint The AvatarIKHint that is queried.
            * @returns Return translative weight. 
            */
            public GetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint) : number
            /** Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
            * @param $hint The AvatarIKHint that is set.
            * @param $value The translative weight.
            */
            public SetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint, $value: number) : void
            /** Sets the look at position.
            * @param $lookAtPosition The position to lookAt.
            */
            public SetLookAtPosition ($lookAtPosition: UnityEngine.Vector3) : void
            /** Set look at weights.
            * @param $weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param $bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param $headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param $eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param $clampWeight (0-1) 0.0 means the character is unrestrained in motion. 1.0 means the character is clamped (look at becomes impossible). 0.5 means the character is able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number) : void
            /** Set look at weights.
            * @param $weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param $bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param $headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param $eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param $clampWeight (0-1) 0.0 means the character is unrestrained in motion. 1.0 means the character is clamped (look at becomes impossible). 0.5 means the character is able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number) : void
            /** Set look at weights.
            * @param $weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param $bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param $headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param $eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param $clampWeight (0-1) 0.0 means the character is unrestrained in motion. 1.0 means the character is clamped (look at becomes impossible). 0.5 means the character is able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number) : void
            /** Set look at weights.
            * @param $weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param $bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param $headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param $eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param $clampWeight (0-1) 0.0 means the character is unrestrained in motion. 1.0 means the character is clamped (look at becomes impossible). 0.5 means the character is able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number) : void
            /** Set look at weights.
            * @param $weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param $bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param $headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param $eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param $clampWeight (0-1) 0.0 means the character is unrestrained in motion. 1.0 means the character is clamped (look at becomes impossible). 0.5 means the character is able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number, $clampWeight: number) : void
            /** Sets local rotation of a human bone during a IK pass.
            * @param $humanBoneId The human bone Id.
            * @param $rotation The local rotation.
            */
            public SetBoneLocalRotation ($humanBoneId: UnityEngine.HumanBodyBones, $rotation: UnityEngine.Quaternion) : void
            public GetBehaviours ($fullPathHash: number, $layerIndex: number) : System.Array$1<UnityEngine.StateMachineBehaviour>
            /** Returns the layer name.
            * @param $layerIndex The layer index.
            * @returns The layer name. 
            */
            public GetLayerName ($layerIndex: number) : string
            /** Returns the index of the layer with the given name.
            * @param $layerName The layer name.
            * @returns The layer index. 
            */
            public GetLayerIndex ($layerName: string) : number
            /** Returns the weight of the layer at the specified index.
            * @param $layerIndex The layer index.
            * @returns The layer weight. 
            */
            public GetLayerWeight ($layerIndex: number) : number
            /** Sets the weight of the layer at the given index.
            * @param $layerIndex The layer index.
            * @param $weight The new layer weight.
            */
            public SetLayerWeight ($layerIndex: number, $weight: number) : void
            /** Returns an AnimatorStateInfo with the information on the current state.
            * @param $layerIndex The layer index.
            * @returns An AnimatorStateInfo with the information on the current state. 
            */
            public GetCurrentAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
            /** Returns an AnimatorStateInfo with the information on the next state.
            * @param $layerIndex The layer index.
            * @returns An AnimatorStateInfo with the information on the next state. 
            */
            public GetNextAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
            /** Returns an AnimatorTransitionInfo with the informations on the current transition.
            * @param $layerIndex The layer's index.
            * @returns An AnimatorTransitionInfo with the informations on the current transition. 
            */
            public GetAnimatorTransitionInfo ($layerIndex: number) : UnityEngine.AnimatorTransitionInfo
            /** Returns the number of AnimatorClipInfo in the current state.
            * @param $layerIndex The layer index.
            * @returns The number of AnimatorClipInfo in the current state. 
            */
            public GetCurrentAnimatorClipInfoCount ($layerIndex: number) : number
            /** Returns the number of AnimatorClipInfo in the next state.
            * @param $layerIndex The layer index.
            * @returns The number of AnimatorClipInfo in the next state. 
            */
            public GetNextAnimatorClipInfoCount ($layerIndex: number) : number
            /** Returns an array of all the AnimatorClipInfo in the current state of the given layer.
            * @param $layerIndex The layer index.
            * @returns An array of all the AnimatorClipInfo in the current state. 
            */
            public GetCurrentAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
            /** Returns an array of all the AnimatorClipInfo in the next state of the given layer.
            * @param $layerIndex The layer index.
            * @returns An array of all the AnimatorClipInfo in the next state. 
            */
            public GetNextAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
            public GetCurrentAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
            public GetNextAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
            /** Returns true if there is a transition on the given layer, false otherwise.
            * @param $layerIndex The layer index.
            * @returns True if there is a transition on the given layer, false otherwise. 
            */
            public IsInTransition ($layerIndex: number) : boolean
            /** See AnimatorController.parameters.
            */
            public GetParameter ($index: number) : UnityEngine.AnimatorControllerParameter
            public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number) : void
            /** Automatically adjust the GameObject position and rotation.
            * @param $matchPosition The position we want the body part to reach.
            * @param $matchRotation The rotation in which we want the body part to be.
            * @param $targetBodyPart The body part that is involved in the match.
            * @param $weightMask Structure that contains weights for matching position and rotation.
            * @param $startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
            * @param $targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
            * @param $completeMatch Allows you to specify what should happen if the MatchTarget function is interrupted. A value of true causes the GameObject to immediately move to the matchPosition if interrupted. A value of false causes the GameObject to stay at its current position if interrupted.
            */
            public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number) : void
            public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number, $completeMatch: boolean) : void
            /** Interrupts the automatic target matching.
            */
            public InterruptMatchTarget () : void
            /** Interrupts the automatic target matching.
            */
            public InterruptMatchTarget ($completeMatch: boolean) : void
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number) : void
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number) : void
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
            /** Creates a crossfade from the current state to any other state using times in seconds.
            * @param $stateName The name of the state.
            * @param $stateHashName The hash name of the state.
            * @param $fixedTransitionDuration The duration of the transition (in seconds).
            * @param $layer The layer where the crossfade occurs.
            * @param $fixedTimeOffset The time of the state (in seconds).
            * @param $normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number) : void
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number) : void
            /** Creates a crossfade from the current state to any other state using times in seconds.
            * @param $stateName The name of the state.
            * @param $stateHashName The hash name of the state.
            * @param $fixedTransitionDuration The duration of the transition (in seconds).
            * @param $layer The layer where the crossfade occurs.
            * @param $fixedTimeOffset The time of the state (in seconds).
            * @param $normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
            /** Forces a write of the default values stored in the animator.
            */
            public WriteDefaultValues () : void
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number) : void
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number) : void
            /** Creates a crossfade from the current state to any other state using normalized times.
            * @param $stateName The name of the state.
            * @param $stateHashName The hash name of the state.
            * @param $normalizedTransitionDuration The duration of the transition (normalized).
            * @param $layer The layer where the crossfade occurs.
            * @param $normalizedTimeOffset The time of the state (normalized).
            * @param $normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
            /** Creates a crossfade from the current state to any other state using normalized times.
            * @param $stateName The name of the state.
            * @param $stateHashName The hash name of the state.
            * @param $normalizedTransitionDuration The duration of the transition (normalized).
            * @param $layer The layer where the crossfade occurs.
            * @param $normalizedTimeOffset The time of the state (normalized).
            * @param $normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number) : void
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number) : void
            public PlayInFixedTime ($stateName: string, $layer: number) : void
            public PlayInFixedTime ($stateName: string) : void
            /** Plays a state.
            * @param $stateName The state name.
            * @param $stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param $layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param $fixedTime The time offset (in seconds).
            */
            public PlayInFixedTime ($stateName: string, $layer: number, $fixedTime: number) : void
            /** Plays a state.
            * @param $stateName The state name.
            * @param $stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param $layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param $fixedTime The time offset (in seconds).
            */
            public PlayInFixedTime ($stateNameHash: number, $layer: number, $fixedTime: number) : void
            public PlayInFixedTime ($stateNameHash: number, $layer: number) : void
            public PlayInFixedTime ($stateNameHash: number) : void
            public Play ($stateName: string, $layer: number) : void
            public Play ($stateName: string) : void
            /** Plays a state.
            * @param $stateName The state name.
            * @param $stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param $layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param $normalizedTime The time offset between zero and one.
            */
            public Play ($stateName: string, $layer: number, $normalizedTime: number) : void
            /** Plays a state.
            * @param $stateName The state name.
            * @param $stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param $layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param $normalizedTime The time offset between zero and one.
            */
            public Play ($stateNameHash: number, $layer: number, $normalizedTime: number) : void
            public Play ($stateNameHash: number, $layer: number) : void
            public Play ($stateNameHash: number) : void
            /** Sets an AvatarTarget and a targetNormalizedTime for the current state.
            * @param $targetIndex The avatar body part that is queried.
            * @param $targetNormalizedTime The current state Time that is queried.
            */
            public SetTarget ($targetIndex: UnityEngine.AvatarTarget, $targetNormalizedTime: number) : void
            /** Retrieves the Transform mapped to a human bone based on its id.
            * @param $humanBoneId The human bone to be queried. See the HumanBodyBones enum for a list of possible values.
            * @returns Returns the Transform mapped to the human bone. Returns null if the human bone has no Transform. 
            */
            public GetBoneTransform ($humanBoneId: UnityEngine.HumanBodyBones) : UnityEngine.Transform
            /** Sets the animator in playback mode.
            */
            public StartPlayback () : void
            /** Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
            */
            public StopPlayback () : void
            /** Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
            * @param $frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
            */
            public StartRecording ($frameCount: number) : void
            /** Stops animator record mode.
            */
            public StopRecording () : void
            /** Returns true if the state exists in this layer, false otherwise.
            * @param $layerIndex The layer index.
            * @param $stateID The state ID.
            * @returns True if the state exists in this layer, false otherwise. 
            */
            public HasState ($layerIndex: number, $stateID: number) : boolean
            /** Generates an parameter id from a string.
            * @param $name The string to convert to Id.
            */
            public static StringToHash ($name: string) : number
            /** Evaluates the animator based on deltaTime.
            * @param $deltaTime The time delta.
            */
            public Update ($deltaTime: number) : void
            /** Rebind all the animated properties and mesh data with the Animator.
            */
            public Rebind () : void
            /** Apply the default Root Motion.
            */
            public ApplyBuiltinRootMotion () : void
            public constructor ()
        }
        /** Information about what animation clips is played and its weight.
        */
        class AnimationInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** The update mode of the Animator.
        */
        enum AnimatorUpdateMode
        { Normal = 0, AnimatePhysics = 1, UnscaledTime = 2 }
        /** IK Goal.
        */
        enum AvatarIKGoal
        { LeftFoot = 0, RightFoot = 1, LeftHand = 2, RightHand = 3 }
        /** IK Hint.
        */
        enum AvatarIKHint
        { LeftKnee = 0, RightKnee = 1, LeftElbow = 2, RightElbow = 3 }
        /** Human Body Bones.
        */
        enum HumanBodyBones
        { Hips = 0, LeftUpperLeg = 1, RightUpperLeg = 2, LeftLowerLeg = 3, RightLowerLeg = 4, LeftFoot = 5, RightFoot = 6, Spine = 7, Chest = 8, UpperChest = 54, Neck = 9, Head = 10, LeftShoulder = 11, RightShoulder = 12, LeftUpperArm = 13, RightUpperArm = 14, LeftLowerArm = 15, RightLowerArm = 16, LeftHand = 17, RightHand = 18, LeftToes = 19, RightToes = 20, LeftEye = 21, RightEye = 22, Jaw = 23, LeftThumbProximal = 24, LeftThumbIntermediate = 25, LeftThumbDistal = 26, LeftIndexProximal = 27, LeftIndexIntermediate = 28, LeftIndexDistal = 29, LeftMiddleProximal = 30, LeftMiddleIntermediate = 31, LeftMiddleDistal = 32, LeftRingProximal = 33, LeftRingIntermediate = 34, LeftRingDistal = 35, LeftLittleProximal = 36, LeftLittleIntermediate = 37, LeftLittleDistal = 38, RightThumbProximal = 39, RightThumbIntermediate = 40, RightThumbDistal = 41, RightIndexProximal = 42, RightIndexIntermediate = 43, RightIndexDistal = 44, RightMiddleProximal = 45, RightMiddleIntermediate = 46, RightMiddleDistal = 47, RightRingProximal = 48, RightRingIntermediate = 49, RightRingDistal = 50, RightLittleProximal = 51, RightLittleIntermediate = 52, RightLittleDistal = 53, LastBone = 55 }
        /** A class you can derive from if you want to create objects that live independently of GameObjects.
        */
        class ScriptableObject extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** StateMachineBehaviour is a component that can be added to a state machine state. It's the base class any script on a state must derive from.
        */
        class StateMachineBehaviour extends UnityEngine.ScriptableObject
        {
            protected [__keep_incompatibility]: never;
        }
        /** Information about the current or next state.
        */
        class AnimatorStateInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Information about the current transition.
        */
        class AnimatorTransitionInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Information about clip being played and blended by the Animator.
        */
        class AnimatorClipInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API.
        */
        class AnimatorControllerParameter extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Target.
        */
        enum AvatarTarget
        { Root = 0, Body = 1, LeftFoot = 2, RightFoot = 3, LeftHand = 4, RightHand = 5 }
        /** Use this struct to specify the position and rotation weight mask for Animator.MatchTarget.
        */
        class MatchTargetWeightMask extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Culling mode for the Animator.
        */
        enum AnimatorCullingMode
        { AlwaysAnimate = 0, CullUpdateTransforms = 1, CullCompletely = 2, BasedOnRenderers = 1 }
        /** The mode of the Animator's recorder.
        */
        enum AnimatorRecorderMode
        { Offline = 0, Playback = 1, Record = 2 }
        /** The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
        */
        class RuntimeAnimatorController extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Avatar definition.
        */
        class Avatar extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** The animation component is used to play back animations.
        */
        class Animation extends UnityEngine.Behaviour implements System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** The default animation.
            */
            public get clip(): UnityEngine.AnimationClip;
            public set clip(value: UnityEngine.AnimationClip);
            /** Should the default animation clip (the Animation.clip property) automatically start playing on startup?
            */
            public get playAutomatically(): boolean;
            public set playAutomatically(value: boolean);
            /** How should time beyond the playback range of the clip be treated?
            */
            public get wrapMode(): UnityEngine.WrapMode;
            public set wrapMode(value: UnityEngine.WrapMode);
            /** Is an animation currently being played?
            */
            public get isPlaying(): boolean;
            /** When turned on, animations will be executed in the physics loop. This is only useful in conjunction with kinematic rigidbodies.
            */
            public get animatePhysics(): boolean;
            public set animatePhysics(value: boolean);
            /** Controls culling of this Animation component.
            */
            public get cullingType(): UnityEngine.AnimationCullingType;
            public set cullingType(value: UnityEngine.AnimationCullingType);
            /** AABB of this Animation animation component in local space.
            */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Stops all playing animations that were started with this Animation.
            */
            public Stop () : void
            /** Stops an animation named name.
            */
            public Stop ($name: string) : void
            /** Rewinds all animations.
            */
            public Rewind () : void
            /** Rewinds the animation named name.
            */
            public Rewind ($name: string) : void
            /** Samples animations at the current state.
            */
            public Sample () : void
            /** Is the animation named name playing?
            */
            public IsPlaying ($name: string) : boolean
            public get_Item ($name: string) : UnityEngine.AnimationState
            public Play () : boolean
            /** Plays an animation without blending.
            * @returns If no name is supplied and there is no default animation, then this method returns false. Otherwise, it returns true. 
            */
            public Play ($mode: UnityEngine.PlayMode) : boolean
            /** Plays an animation without blending.
            * @returns If no name is supplied and there is no default animation, then this method returns false. Otherwise, it returns true. 
            */
            public Play ($animation: string) : boolean
            /** Plays an animation without blending.
            * @returns If no name is supplied and there is no default animation, then this method returns false. Otherwise, it returns true. 
            */
            public Play ($animation: string, $mode: UnityEngine.PlayMode) : boolean
            /** Fades in the animation with the name animation over a period of time defined by fadeLength.
            */
            public CrossFade ($animation: string) : void
            /** Fades in the animation with the name animation over a period of time defined by fadeLength.
            */
            public CrossFade ($animation: string, $fadeLength: number) : void
            /** Fades in the animation with the name animation over a period of time defined by fadeLength.
            */
            public CrossFade ($animation: string, $fadeLength: number, $mode: UnityEngine.PlayMode) : void
            /** Blends the animation named animation towards targetWeight over the next time seconds.
            */
            public Blend ($animation: string) : void
            /** Blends the animation named animation towards targetWeight over the next time seconds.
            */
            public Blend ($animation: string, $targetWeight: number) : void
            /** Blends the animation named animation towards targetWeight over the next time seconds.
            */
            public Blend ($animation: string, $targetWeight: number, $fadeLength: number) : void
            /** Cross fades an animation after previous animations has finished playing.
            */
            public CrossFadeQueued ($animation: string) : UnityEngine.AnimationState
            /** Cross fades an animation after previous animations has finished playing.
            */
            public CrossFadeQueued ($animation: string, $fadeLength: number) : UnityEngine.AnimationState
            /** Cross fades an animation after previous animations has finished playing.
            */
            public CrossFadeQueued ($animation: string, $fadeLength: number, $queue: UnityEngine.QueueMode) : UnityEngine.AnimationState
            /** Cross fades an animation after previous animations has finished playing.
            */
            public CrossFadeQueued ($animation: string, $fadeLength: number, $queue: UnityEngine.QueueMode, $mode: UnityEngine.PlayMode) : UnityEngine.AnimationState
            /** Plays an animation after previous animations has finished playing.
            */
            public PlayQueued ($animation: string) : UnityEngine.AnimationState
            /** Plays an animation after previous animations has finished playing.
            */
            public PlayQueued ($animation: string, $queue: UnityEngine.QueueMode) : UnityEngine.AnimationState
            /** Plays an animation after previous animations has finished playing.
            */
            public PlayQueued ($animation: string, $queue: UnityEngine.QueueMode, $mode: UnityEngine.PlayMode) : UnityEngine.AnimationState
            /** Adds a clip to the animation with name newName.
            */
            public AddClip ($clip: UnityEngine.AnimationClip, $newName: string) : void
            /** Adds clip to the only play between firstFrame and lastFrame. The new clip will also be added to the animation with name newName.
            * @param $addLoopFrame Should an extra frame be inserted at the end that matches the first frame? Turn this on if you are making a looping animation.
            */
            public AddClip ($clip: UnityEngine.AnimationClip, $newName: string, $firstFrame: number, $lastFrame: number) : void
            /** Adds clip to the only play between firstFrame and lastFrame. The new clip will also be added to the animation with name newName.
            * @param $addLoopFrame Should an extra frame be inserted at the end that matches the first frame? Turn this on if you are making a looping animation.
            */
            public AddClip ($clip: UnityEngine.AnimationClip, $newName: string, $firstFrame: number, $lastFrame: number, $addLoopFrame: boolean) : void
            /** Remove clip from the animation list.
            */
            public RemoveClip ($clip: UnityEngine.AnimationClip) : void
            /** Remove clip from the animation list.
            */
            public RemoveClip ($clipName: string) : void
            /** Get the number of clips currently assigned to this animation.
            */
            public GetClipCount () : number
            public SyncLayer ($layer: number) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public GetClip ($name: string) : UnityEngine.AnimationClip
            public constructor ()
        }
        /** Base class for AnimationClips and BlendTrees.
        */
        class Motion extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Stores keyframe based animations.
        */
        class AnimationClip extends UnityEngine.Motion
        {
            protected [__keep_incompatibility]: never;
            /** Animation length in seconds. (Read Only)
            */
            public get length(): number;
            /** Frame rate at which keyframes are sampled. (Read Only)
            */
            public get frameRate(): number;
            public set frameRate(value: number);
            /** Sets the default wrap mode used in the animation state.
            */
            public get wrapMode(): UnityEngine.WrapMode;
            public set wrapMode(value: UnityEngine.WrapMode);
            /** AABB of this Animation Clip in local space of Animation component that it is attached too.
            */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
            */
            public get legacy(): boolean;
            public set legacy(value: boolean);
            /** Returns true if the animation contains curve that drives a humanoid rig.
            */
            public get humanMotion(): boolean;
            /** Returns true if the animation clip has no curves and no events.
            */
            public get empty(): boolean;
            /** Returns true if the Animation has animation on the root transform.
            */
            public get hasGenericRootTransform(): boolean;
            /** Returns true if the AnimationClip has editor curves for its root motion.
            */
            public get hasMotionFloatCurves(): boolean;
            /** Returns true if the AnimationClip has root motion curves.
            */
            public get hasMotionCurves(): boolean;
            /** Returns true if the AnimationClip has root Curves.
            */
            public get hasRootCurves(): boolean;
            /** Animation Events for this animation clip.
            */
            public get events(): System.Array$1<UnityEngine.AnimationEvent>;
            public set events(value: System.Array$1<UnityEngine.AnimationEvent>);
            /** Samples an animation at a given time for any animated properties.
            * @param $go The animated game object.
            * @param $time The time to sample an animation.
            */
            public SampleAnimation ($go: UnityEngine.GameObject, $time: number) : void
            /** Assigns the curve to animate a specific property.
            * @param $relativePath Path to the game object this curve applies to. The relativePath
            is formatted similar to a pathname, e.g. "rootspineleftArm".  If relativePath
            is empty it refers to the game object the animation clip is attached to.
            * @param $type The class type of the component that is animated.
            * @param $propertyName The name or path to the property being animated.
            * @param $curve The animation curve.
            */
            public SetCurve ($relativePath: string, $type: System.Type, $propertyName: string, $curve: UnityEngine.AnimationCurve) : void
            /** Realigns quaternion keys to ensure shortest interpolation paths.
            */
            public EnsureQuaternionContinuity () : void
            /** Clears all curves from the clip.
            */
            public ClearCurves () : void
            /** Adds an animation event to the clip.
            * @param $evt AnimationEvent to add.
            */
            public AddEvent ($evt: UnityEngine.AnimationEvent) : void
            public constructor ()
        }
        /** Determines how time is treated outside of the keyframed range of an AnimationClip or AnimationCurve.
        */
        enum WrapMode
        { Once = 1, Loop = 2, PingPong = 4, Default = 0, ClampForever = 8, Clamp = 1 }
        class TrackedReference extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** The AnimationState gives full control over animation blending.
        */
        class AnimationState extends UnityEngine.TrackedReference
        {
            protected [__keep_incompatibility]: never;
        }
        /** Used by Animation.Play function.
        */
        enum PlayMode
        { StopSameLayer = 0, StopAll = 4 }
        /** Used by Animation.Play function.
        */
        enum QueueMode
        { CompleteOthers = 0, PlayNow = 2 }
        enum AnimationPlayMode
        { Stop = 0, Queue = 1, Mix = 2 }
        /** This enum controlls culling of Animation component.
        */
        enum AnimationCullingType
        { AlwaysAnimate = 0, BasedOnRenderers = 1, BasedOnClipBounds = 2, BasedOnUserBounds = 3 }
        /** Store a collection of Keyframes that can be evaluated over time.
        */
        class AnimationCurve extends System.Object implements System.IEquatable$1<UnityEngine.AnimationCurve>
        {
            protected [__keep_incompatibility]: never;
        }
        /** AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation.
        */
        class AnimationEvent extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class AudioBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** A representation of audio sources in 3D.
        */
        class AudioSource extends UnityEngine.AudioBehaviour
        {
            protected [__keep_incompatibility]: never;
            /** The volume of the audio source (0.0 to 1.0).
            */
            public get volume(): number;
            public set volume(value: number);
            /** The pitch of the audio source.
            */
            public get pitch(): number;
            public set pitch(value: number);
            /** Playback position in seconds.
            */
            public get time(): number;
            public set time(value: number);
            /** The current playback position of the AudioSource in PCM samples.
            */
            public get timeSamples(): number;
            public set timeSamples(value: number);
            /** The default AudioClip to play.
            */
            public get clip(): UnityEngine.AudioClip;
            public set clip(value: UnityEngine.AudioClip);
            /** The target group to which the AudioSource should route its signal.
            */
            public get outputAudioMixerGroup(): UnityEngine.Audio.AudioMixerGroup;
            public set outputAudioMixerGroup(value: UnityEngine.Audio.AudioMixerGroup);
            /** Gets or sets the gamepad audio output type for this audio source.
            */
            public get gamepadSpeakerOutputType(): UnityEngine.GamepadSpeakerOutputType;
            public set gamepadSpeakerOutputType(value: UnityEngine.GamepadSpeakerOutputType);
            /** Returns whether the AudioSource is currently playing a clip (Read Only).
            */
            public get isPlaying(): boolean;
            /** True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system.
            */
            public get isVirtual(): boolean;
            /** Is the audio clip looping?
            */
            public get loop(): boolean;
            public set loop(value: boolean);
            /** This makes the audio source not take into account the volume of the audio listener.
            */
            public get ignoreListenerVolume(): boolean;
            public set ignoreListenerVolume(value: boolean);
            /** Enable this property to automatically play the audio source when the component or GameObject becomes active.
            */
            public get playOnAwake(): boolean;
            public set playOnAwake(value: boolean);
            /** Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus.
            */
            public get ignoreListenerPause(): boolean;
            public set ignoreListenerPause(value: boolean);
            /** Whether the Audio Source should be updated in the fixed or dynamic update.
            */
            public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
            public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
            /** Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo.
            */
            public get panStereo(): number;
            public set panStereo(value: number);
            /** Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D.
            */
            public get spatialBlend(): number;
            public set spatialBlend(value: number);
            /** Enables or disables spatialization.
            */
            public get spatialize(): boolean;
            public set spatialize(value: boolean);
            /** Determines if the spatializer effect is inserted before or after the effect filters.
            */
            public get spatializePostEffects(): boolean;
            public set spatializePostEffects(value: boolean);
            /** The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones.
            */
            public get reverbZoneMix(): number;
            public set reverbZoneMix(value: number);
            /** Bypass effects (Applied from filter components or global listener filters).
            */
            public get bypassEffects(): boolean;
            public set bypassEffects(value: boolean);
            /** When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group.
            */
            public get bypassListenerEffects(): boolean;
            public set bypassListenerEffects(value: boolean);
            /** When set doesn't route the signal from an AudioSource into the global reverb associated with reverb zones.
            */
            public get bypassReverbZones(): boolean;
            public set bypassReverbZones(value: boolean);
            /** Sets the Doppler scale for this AudioSource.
            */
            public get dopplerLevel(): number;
            public set dopplerLevel(value: number);
            /** Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space.
            */
            public get spread(): number;
            public set spread(value: number);
            /** Sets the priority of the AudioSource.
            */
            public get priority(): number;
            public set priority(value: number);
            /** Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume.
            */
            public get mute(): boolean;
            public set mute(value: boolean);
            /** Within the Min distance the AudioSource will cease to grow louder in volume.
            */
            public get minDistance(): number;
            public set minDistance(value: number);
            /** The distance where sound either becomes inaudible or stops attenuation, depending on the rolloff mode.
            */
            public get maxDistance(): number;
            public set maxDistance(value: number);
            /** Sets/Gets how the AudioSource attenuates over distance.
            */
            public get rolloffMode(): UnityEngine.AudioRolloffMode;
            public set rolloffMode(value: UnityEngine.AudioRolloffMode);
            /** Enable the audio source to play through a specific gamepad.
            * @param $slot Slot number of the gamepad (0-3).
            * @returns Returns TRUE if enabling audio output through this users controller was successful. 
            */
            public PlayOnGamepad ($slot: number) : boolean
            /** Disables audio output to a gamepad for this audio source.
            * @returns Returns true if successful. 
            */
            public DisableGamepadOutput () : boolean
            public SetGamepadSpeakerMixLevel ($slot: number, $mixLevel: number) : boolean
            public SetGamepadSpeakerMixLevelDefault ($slot: number) : boolean
            public SetGamepadSpeakerRestrictedAudio ($slot: number, $restricted: boolean) : boolean
            /** Check if the platform supports an audio output type  on gamepads.
            * @param $outputType The desired output type.
            * @returns Returns true if the gamepad supports the specified audio output type. 
            */
            public static GamepadSpeakerSupportsOutputType ($outputType: UnityEngine.GamepadSpeakerOutputType) : boolean
            public Play () : void
            /** Plays the clip.
            * @param $delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
            */
            public Play ($delay: bigint) : void
            /** Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument.
            * @param $delay Delay time specified in seconds.
            */
            public PlayDelayed ($delay: number) : void
            /** Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from.
            * @param $time Time in seconds on the absolute time-line that AudioSettings.dspTime refers to for when the sound should start playing.
            */
            public PlayScheduled ($time: number) : void
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale.
            * @param $clip The clip being played.
            * @param $volumeScale The scale of the volume. Unity automatically clamps negative scales to zero. Note: Scales larger than one might cause clipping.
            */
            public PlayOneShot ($clip: UnityEngine.AudioClip) : void
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale.
            * @param $clip The clip being played.
            * @param $volumeScale The scale of the volume. Unity automatically clamps negative scales to zero. Note: Scales larger than one might cause clipping.
            */
            public PlayOneShot ($clip: UnityEngine.AudioClip, $volumeScale: number) : void
            /** Changes the time at which a sound that has already been scheduled to play will start.
            * @param $time Time in seconds.
            */
            public SetScheduledStartTime ($time: number) : void
            /** Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled.
            * @param $time Time in seconds.
            */
            public SetScheduledEndTime ($time: number) : void
            /** Stops playing the clip.
            */
            public Stop () : void
            /** Pauses playing the clip.
            */
            public Pause () : void
            /** Unpause the paused playback of this AudioSource.
            */
            public UnPause () : void
            /** Plays an AudioClip at a given position in world space.
            * @param $clip Audio data to play.
            * @param $position Position in world space from which sound originates.
            * @param $volume Playback volume (range from 0.0 - 1.0).
            */
            public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3) : void
            /** Plays an AudioClip at a given position in world space.
            * @param $clip Audio data to play.
            * @param $position Position in world space from which sound originates.
            * @param $volume Playback volume (range from 0.0 - 1.0).
            */
            public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number) : void
            /** Set the custom curve for the given AudioSourceCurveType.
            * @param $type The curve type that should be set.
            * @param $curve The curve that should be applied to the given curve type.
            */
            public SetCustomCurve ($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve) : void
            /** Get the current custom curve for the given AudioSourceCurveType.
            * @param $type The curve type to get.
            * @returns The custom AnimationCurve corresponding to the given curve type. 
            */
            public GetCustomCurve ($type: UnityEngine.AudioSourceCurveType) : UnityEngine.AnimationCurve
            /** Provides a block of the currently playing source's output data.
            * @param $samples The array to populate with audio samples. Its length must be a power of 2.
            * @param $channel The channel to sample from.
            */
            public GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
            /** Provides the block of audio frequencies (spectrum data) of the AudioSource that is currently playing.
            * @param $samples The array to populate with frequency domain representations of audio samples. The array length must be a power of 2 (such as 128, 256, 512). Also, the length must not be less than 64 or greater than 8192.
            * @param $channel The channel to sample from.
            * @param $window The FFTWindow type to use when sampling.
            */
            public GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
            /** Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be set.
            * @param $value New value of the user-defined parameter.
            * @returns True, if the parameter could be set. 
            */
            public SetSpatializerFloat ($index: number, $value: number) : boolean
            /** Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be read.
            * @param $value Return value of the user-defined parameter that is read.
            * @returns True, if the parameter could be read. 
            */
            public GetSpatializerFloat ($index: number, $value: $Ref<number>) : boolean
            /** Reads a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be read.
            * @param $value Return value of the user-defined parameter that is read.
            * @returns True, if the parameter could be read. 
            */
            public GetAmbisonicDecoderFloat ($index: number, $value: $Ref<number>) : boolean
            /** Sets a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be set.
            * @param $value New value of the user-defined parameter.
            * @returns True, if the parameter could be set. 
            */
            public SetAmbisonicDecoderFloat ($index: number, $value: number) : boolean
            public constructor ()
        }
        /** A container for audio data.
        */
        class AudioClip extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The length of the audio clip in seconds. (Read Only)
            */
            public get length(): number;
            /** The length of the audio clip in samples. (Read Only)
            */
            public get samples(): number;
            /** The number of channels in the audio clip. (Read Only)
            */
            public get channels(): number;
            /** The sample frequency of the clip in Hertz. (Read Only)
            */
            public get frequency(): number;
            /** The load type of the clip (read-only).
            */
            public get loadType(): UnityEngine.AudioClipLoadType;
            /** Enable this property in the Inspector to preload audio data from the audio clip when loading the clip Asset (Read Only).
            */
            public get preloadAudioData(): boolean;
            /** Returns true if this audio clip is ambisonic (read-only).
            */
            public get ambisonic(): boolean;
            /** Enable this property to load the AudioClip asynchronously in the background instead of on the main thread. Set this property in the Inspector (Read Only).
            */
            public get loadInBackground(): boolean;
            /** Returns the current load state of the audio data associated with an AudioClip.
            */
            public get loadState(): UnityEngine.AudioDataLoadState;
            /** Loads the asset data of an AudioClip into memory, so it will immediately be ready to play.
            * @returns Returns true if the clip is loaded into memory. 
            */
            public LoadAudioData () : boolean
            /** Unloads the audio data associated with the clip. This works only for AudioClips that are based on actual sound file assets.
            * @returns Returns `true` if the audio data unloads successfully. 
            */
            public UnloadAudioData () : boolean
            /** Fills an array with sample data from the audio clip.
            * @param $data The array you want to fill with raw data from the audio clip.
            * @param $offsetSamples The index of where to start data extraction from the array of raw data.
            * @returns Returns 'true' if AudioClip retrieves the data successfully. Returns 'false' if the operation was unsuccessful. 
            */
            public GetData ($data: System.Array$1<number>, $offsetSamples: number) : boolean
            /** Fills an audio clip with sample data from an array or Span. Overwrites existing data if necessary.
            * @param $data Linear buffer of samples to write to the audio clip buffer.
            * @param $offsetSamples Offset from the start of the audio clip at which to begin writing sample data.
            * @returns Returns whether all samples were successfully written to the audio clip. This can return false if offsetSamples isn't a valid offset within the existing AudioClip, or if the data is empty. 
            */
            public SetData ($data: System.Array$1<number>, $offsetSamples: number) : boolean
            /** Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
            * @param $name Name of clip.
            * @param $lengthSamples Number of sample frames.
            * @param $channels Number of channels per frame.
            * @param $frequency Sample frequency of clip.
            * @param $_3D Audio clip is played back in 3D.
            * @param $stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
            * @param $pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
            * @param $pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
            * @returns A reference to the created AudioClip. 
            */
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean) : UnityEngine.AudioClip
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback) : UnityEngine.AudioClip
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback) : UnityEngine.AudioClip
        }
        /** Gamepad audio output types.
        */
        enum GamepadSpeakerOutputType
        { Speaker = 0, Vibration = 1, SecondaryVibration = 2 }
        /** Describes when an AudioSource or AudioListener is updated.
        */
        enum AudioVelocityUpdateMode
        { Auto = 0, Fixed = 1, Dynamic = 2 }
        /** This defines the curve type of the different custom curves that can be queried and set within the AudioSource.
        */
        enum AudioSourceCurveType
        { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
        /** Rolloff modes that a 3D sound can have in an audio source.
        */
        enum AudioRolloffMode
        { Logarithmic = 0, Linear = 1, Custom = 2 }
        /** Spectrum analysis windowing types.
        */
        enum FFTWindow
        { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
        /** Determines how the audio clip is loaded in.
        */
        enum AudioClipLoadType
        { DecompressOnLoad = 0, CompressedInMemory = 1, Streaming = 2 }
        /** Value describes the current load state of the audio data associated with an AudioClip.
        */
        enum AudioDataLoadState
        { Unloaded = 0, Loading = 1, Loaded = 2, Failed = 3 }
        /** Interface into the Input system.
        */
        class Input extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Enables/Disables mouse simulation with touches. By default this option is enabled.
            */
            public static get simulateMouseWithTouches(): boolean;
            public static set simulateMouseWithTouches(value: boolean);
            /** Is any key or mouse button currently held down? (Read Only)
            */
            public static get anyKey(): boolean;
            /** Returns true the first frame the user hits any key or mouse button. (Read Only)
            */
            public static get anyKeyDown(): boolean;
            /** Returns the keyboard input entered this frame. (Read Only)
            */
            public static get inputString(): string;
            /** The current mouse position in pixel coordinates. (Read Only).
            */
            public static get mousePosition(): UnityEngine.Vector3;
            /** The current mouse scroll delta. (Read Only)
            */
            public static get mouseScrollDelta(): UnityEngine.Vector2;
            /** Controls enabling and disabling of IME input composition.
            */
            public static get imeCompositionMode(): UnityEngine.IMECompositionMode;
            public static set imeCompositionMode(value: UnityEngine.IMECompositionMode);
            /** The current IME composition string being typed by the user.
            */
            public static get compositionString(): string;
            /** Does the user have an IME keyboard input source selected?
            */
            public static get imeIsSelected(): boolean;
            /** The current text input position used by IMEs to open windows.
            */
            public static get compositionCursorPos(): UnityEngine.Vector2;
            public static set compositionCursorPos(value: UnityEngine.Vector2);
            /** Indicates if a mouse device is detected.
            */
            public static get mousePresent(): boolean;
            /** Returns the number of queued pen events that can be accessed by calling GetPenEvent().
            */
            public static get penEventCount(): number;
            /** Number of touches. Guaranteed not to change throughout the frame. (Read Only)
            */
            public static get touchCount(): number;
            /** Bool value which let's users check if touch pressure is supported.
            */
            public static get touchPressureSupported(): boolean;
            /** Returns true when Stylus Touch is supported by a device or platform.
            */
            public static get stylusTouchSupported(): boolean;
            /** Returns whether the device on which application is currently running supports touch input.
            */
            public static get touchSupported(): boolean;
            /** Property indicating whether the system handles multiple touches.
            */
            public static get multiTouchEnabled(): boolean;
            public static set multiTouchEnabled(value: boolean);
            /** Device physical orientation as reported by OS. (Read Only)
            */
            public static get deviceOrientation(): UnityEngine.DeviceOrientation;
            /** Last measured linear acceleration of a device in three-dimensional space. (Read Only)
            */
            public static get acceleration(): UnityEngine.Vector3;
            /** This property controls if input sensors should be compensated for screen orientation.
            */
            public static get compensateSensors(): boolean;
            public static set compensateSensors(value: boolean);
            /** Number of acceleration measurements which occurred during last frame.
            */
            public static get accelerationEventCount(): number;
            /** Should  Back button quit the application?
            Only usable on Android or Universal Windows Platform (UWP).
            */
            public static get backButtonLeavesApp(): boolean;
            public static set backButtonLeavesApp(value: boolean);
            /** Property for accessing device location (handheld devices only). (Read Only)
            */
            public static get location(): UnityEngine.LocationService;
            /** Property for accessing compass (handheld devices only). (Read Only)
            */
            public static get compass(): UnityEngine.Compass;
            /** Returns default gyroscope.
            */
            public static get gyro(): UnityEngine.Gyroscope;
            /** Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables).
            */
            public static get touches(): System.Array$1<UnityEngine.Touch>;
            /** Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables).
            */
            public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
            /** Returns the value of the virtual axis identified by axisName.
            */
            public static GetAxis ($axisName: string) : number
            /** Returns the value of the virtual axis identified by axisName with no smoothing filtering applied.
            */
            public static GetAxisRaw ($axisName: string) : number
            /** Returns true while the virtual button identified by buttonName is held down.
            * @param $buttonName The name of the button such as Jump.
            * @returns True when an axis has been pressed and not released. 
            */
            public static GetButton ($buttonName: string) : boolean
            /** Returns true during the frame the user pressed down the virtual button identified by buttonName.
            */
            public static GetButtonDown ($buttonName: string) : boolean
            /** Returns true the first frame the user releases the virtual button identified by buttonName.
            */
            public static GetButtonUp ($buttonName: string) : boolean
            /** Returns whether the given mouse button is held down.
            */
            public static GetMouseButton ($button: number) : boolean
            /** Returns true during the frame the user pressed the given mouse button.
            */
            public static GetMouseButtonDown ($button: number) : boolean
            /** Returns true during the frame the user releases the given mouse button.
            */
            public static GetMouseButtonUp ($button: number) : boolean
            /** Resets all input. After ResetInputAxes all axes return to 0 and all buttons return to 0 for one frame.
            */
            public static ResetInputAxes () : void
            /** Determine whether a particular joystick model has been preconfigured by Unity. (Linux-only).
            * @param $joystickName The name of the joystick to check (returned by Input.GetJoystickNames).
            * @returns True if the joystick layout has been preconfigured; false otherwise. 
            */
            public static IsJoystickPreconfigured ($joystickName: string) : boolean
            /** Retrieves a list of input device names corresponding to the index of an Axis configured within Input Manager.
            * @returns Returns an array of joystick and gamepad device names. 
            */
            public static GetJoystickNames () : System.Array$1<string>
            /** Call Input.GetTouch to obtain a Touch struct.
            * @param $index The touch input on the device screen.
            * @returns Touch details in the struct. 
            */
            public static GetTouch ($index: number) : UnityEngine.Touch
            /** Returns the PenData for the pen event at the given index in the pen event queue.
            * @returns Pen event details in the struct. 
            */
            public static GetPenEvent ($index: number) : UnityEngine.PenData
            /** Returns the PenData for the last stored pen up or down event.
            * @returns Pen event details in the struct. 
            */
            public static GetLastPenContactEvent () : UnityEngine.PenData
            /** Clears the pen event queue.
            */
            public static ResetPenEvents () : void
            /** Clears the last stored pen event.
            Calling this function may impact event handling for UIToolKit elements.
            */
            public static ClearLastPenContactEvent () : void
            /** Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables).
            */
            public static GetAccelerationEvent ($index: number) : UnityEngine.AccelerationEvent
            /** Returns true while the user holds down the key identified by the key KeyCode enum parameter.
            */
            public static GetKey ($key: UnityEngine.KeyCode) : boolean
            /** Returns true while the user holds down the key identified by name.
            */
            public static GetKey ($name: string) : boolean
            /** Returns true during the frame the user releases the key identified by the key KeyCode enum parameter.
            */
            public static GetKeyUp ($key: UnityEngine.KeyCode) : boolean
            /** Returns true during the frame the user releases the key identified by name.
            */
            public static GetKeyUp ($name: string) : boolean
            /** Returns true during the frame the user starts pressing down the key identified by the key KeyCode enum parameter.
            */
            public static GetKeyDown ($key: UnityEngine.KeyCode) : boolean
            /** Returns true during the frame the user starts pressing down the key identified by name.
            */
            public static GetKeyDown ($name: string) : boolean
            public constructor ()
        }
        /** Structure describing the status of a finger touching the screen.
        */
        class Touch extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Structure describing the status of a pen event.
        */
        class PenData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Structure describing acceleration status of the device.
        */
        class AccelerationEvent extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. If "Use Physical Keys" is enabled in, these map directly to a physical key on the keyboard. If "Use Physical Keys" is disabled these map to language dependent mapping, different for every platform and cannot be guaranteed to work. "Use Physical Keys" is enabled by default from 2022.1
        */
        enum KeyCode
        { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftMeta = 310, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightMeta = 309, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, F16 = 670, F17 = 671, F18 = 672, F19 = 673, F20 = 674, F21 = 675, F22 = 676, F23 = 677, F24 = 678, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        /** Controls IME input.
        */
        enum IMECompositionMode
        { Auto = 0, On = 1, Off = 2 }
        /** Describes physical orientation of the device as determined by the OS.
        */
        enum DeviceOrientation
        { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
        /** Provides methods that allow an application to access the device's location.
        */
        class LocationService extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Interface into compass functionality.
        */
        class Compass extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Interface into the Gyroscope.
        */
        class Gyroscope extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Element that can be used for screen rendering.
        */
        class Canvas extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Is the Canvas in World or Overlay mode?
            */
            public get renderMode(): UnityEngine.RenderMode;
            public set renderMode(value: UnityEngine.RenderMode);
            /** Is this the root Canvas?
            */
            public get isRootCanvas(): boolean;
            /** Get the render rect for the Canvas.
            */
            public get pixelRect(): UnityEngine.Rect;
            /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space.
            */
            public get scaleFactor(): number;
            public set scaleFactor(value: number);
            /** The number of pixels per unit that is considered the default.
            */
            public get referencePixelsPerUnit(): number;
            public set referencePixelsPerUnit(value: number);
            /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases.
            */
            public get overridePixelPerfect(): boolean;
            public set overridePixelPerfect(value: boolean);
            /** Should the Canvas vertex color always be in gamma space before passing to the UI shaders in linear color space work flow.
            */
            public get vertexColorAlwaysGammaSpace(): boolean;
            public set vertexColorAlwaysGammaSpace(value: boolean);
            /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space.
            */
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            /** How far away from the camera is the Canvas generated.
            */
            public get planeDistance(): number;
            public set planeDistance(value: number);
            /** The render order in which the canvas is being emitted to the Scene. (Read Only)
            */
            public get renderOrder(): number;
            /** Override the sorting of canvas.
            */
            public get overrideSorting(): boolean;
            public set overrideSorting(value: boolean);
            /** Canvas' order within a sorting layer.
            */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** For Overlay mode, display index on which the UI canvas will appear.
            */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Unique ID of the Canvas' sorting layer.
            */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Cached calculated value based upon SortingLayerID.
            */
            public get cachedSortingLayerValue(): number;
            /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh.
            */
            public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
            public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
            /** Name of the Canvas' sorting layer.
            */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself.
            */
            public get rootCanvas(): UnityEngine.Canvas;
            /** Returns the canvas display size based on the selected render mode and target display.
            */
            public get renderingDisplaySize(): UnityEngine.Vector2;
            /** Should the Canvas size be updated based on the render target when a manual Camera.Render call is performed.
            */
            public get updateRectTransformForStandalone(): UnityEngine.StandaloneRenderResize;
            public set updateRectTransformForStandalone(value: UnityEngine.StandaloneRenderResize);
            public get distributedOffset(): UnityEngine.Vector2;
            public set distributedOffset(value: UnityEngine.Vector2);
            public get distributedScale(): UnityEngine.Vector2;
            public set distributedScale(value: UnityEngine.Vector2);
            /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space Canvas.
            */
            public get worldCamera(): UnityEngine.Camera;
            public set worldCamera(value: UnityEngine.Camera);
            /** The normalized grid size that the canvas will split the renderable area into.
            */
            public get normalizedSortingGridSize(): number;
            public set normalizedSortingGridSize(value: number);
            public static add_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static remove_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static add_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static remove_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            /** Returns the default material that can be used for rendering normal elements on the Canvas.
            */
            public static GetDefaultCanvasMaterial () : UnityEngine.Material
            /** Gets or generates the ETC1 Material.
            * @returns The generated ETC1 Material from the Canvas. 
            */
            public static GetETC1SupportedCanvasMaterial () : UnityEngine.Material
            /** Force all canvases to update their content.
            */
            public static ForceUpdateCanvases () : void
            public constructor ()
        }
        /** RenderMode for the Canvas.
        */
        enum RenderMode
        { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created.
        */
        enum AdditionalCanvasShaderChannels
        { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        /** Enum used to determine if a Canvas should be resized when a manual Camera.Render call is performed.
        */
        enum StandaloneRenderResize
        { Enabled = 0, Disabled = 1 }
        /** Class that can be used to generate text for rendering.
        */
        class TextGenerator extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Script interface for.
        */
        class Font extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Where the anchor of the text is placed.
        */
        enum TextAnchor
        { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
        /** Wrapping modes for text that reaches the horizontal boundary.
        */
        enum HorizontalWrapMode
        { Wrap = 0, Overflow = 1 }
        /** Wrapping modes for text that reaches the vertical boundary.
        */
        enum VerticalWrapMode
        { Truncate = 0, Overflow = 1 }
        /** Font Style applied to GUI Texts, Text Meshes or GUIStyles.
        */
        enum FontStyle
        { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
        /** A struct that stores the settings for TextGeneration.
        */
        class TextGenerationSettings extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICanvasRaycastFilter
        {
        }
        interface ISerializationCallbackReceiver
        {
        }
        /** Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported.
        */
        class TouchScreenKeyboard extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Enumeration of the different types of supported touchscreen keyboards.
        */
        enum TouchScreenKeyboardType
        { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11, OneTimeCode = 12 }
        /** A UnityGUI event.
        */
        class Event extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** PlayerPrefs is a class that stores Player preferences between game sessions. It can store string, float and integer values into the user’s platform registry.
        */
        class PlayerPrefs extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Sets a single integer value for the preference identified by the given key. You can use PlayerPrefs.GetInt to retrieve this value.
            */
            public static SetInt ($key: string, $value: number) : void
            /** Returns the value corresponding to key in the preference file if it exists.
            */
            public static GetInt ($key: string, $defaultValue: number) : number
            /** Returns the value corresponding to key in the preference file if it exists.
            */
            public static GetInt ($key: string) : number
            /** Sets the float value of the preference identified by the given key. You can use PlayerPrefs.GetFloat to retrieve this value.
            */
            public static SetFloat ($key: string, $value: number) : void
            /** Returns the value corresponding to key in the preference file if it exists.
            */
            public static GetFloat ($key: string, $defaultValue: number) : number
            /** Returns the value corresponding to key in the preference file if it exists.
            */
            public static GetFloat ($key: string) : number
            /** Sets a single string value for the preference identified by the given key. You can use PlayerPrefs.GetString to retrieve this value. 
            */
            public static SetString ($key: string, $value: string) : void
            /** Returns the value corresponding to key in the preference file if it exists.
            */
            public static GetString ($key: string, $defaultValue: string) : string
            /** Returns the value corresponding to key in the preference file if it exists.
            */
            public static GetString ($key: string) : string
            /** Returns true if the given key exists in PlayerPrefs, otherwise returns false.
            */
            public static HasKey ($key: string) : boolean
            /** Removes the given key from the PlayerPrefs. If the key does not exist, DeleteKey has no impact.
            */
            public static DeleteKey ($key: string) : void
            /** Removes all keys and values from the preferences. Use with caution.
            */
            public static DeleteAll () : void
            /** Saves all modified preferences.
            */
            public static Save () : void
            public constructor ()
        }
        /** Suspends the coroutine execution for the given amount of seconds using scaled time.
        */
        class WaitForSeconds extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
            public constructor ($seconds: number)
        }
        /** Waits until the end of the frame after Unity has rendered every Camera and GUI, just before displaying the frame on screen.
        */
        class WaitForEndOfFrame extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        /** Script interface for the Built-in Particle System. Unity's powerful and versatile particle system implementation.
        */
        class ParticleSystem extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Determines whether the Particle System is playing.
            */
            public get isPlaying(): boolean;
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play.
            */
            public get isEmitting(): boolean;
            /** Determines whether the Particle System is in the stopped state.
            */
            public get isStopped(): boolean;
            /** Determines whether the Particle System is paused.
            */
            public get isPaused(): boolean;
            /** The current number of particles (Read Only). The number doesn't include particles of child Particle Systems
            */
            public get particleCount(): number;
            /** Playback position in seconds.
            */
            public get time(): number;
            public set time(value: number);
            /** Total playback time in seconds, including the Start Delay setting.
            */
            public get totalTime(): number;
            /** Override the random seed used for the Particle System emission.
            */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator.
            */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation?
            */
            public get proceduralSimulationSupported(): boolean;
            /** Determines whether the Particle System rotates its particles around only the Z axis, or whether the system specifies separate values for the X, Y and Z axes.
            */
            public get has3DParticleRotations(): boolean;
            /** Determines whether the Particle System uses a single value for the width and height (and depth, when using meshes), or if the system specifies different values for each axis.
            */
            public get hasNonUniformParticleSizes(): boolean;
            /** Access the main Particle System settings.
            */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            /** Script interface for the EmissionModule of a Particle System.
            */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            /** Script interface for the ShapeModule of a Particle System. 
            */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            /** Script interface for the VelocityOverLifetimeModule of a Particle System.
            */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. .
            */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            /** Script interface for the InheritVelocityModule of a Particle System.
            */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            /** Script interface for the Particle System Lifetime By Emitter Speed module.
            */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            /** Script interface for the ForceOverLifetimeModule of a Particle System.
            */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            /** Script interface for the ColorOverLifetimeModule of a Particle System.
            */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            /** Script interface for the ColorByLifetimeModule of a Particle System.
            */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            /** Script interface for the SizeOverLifetimeModule of a Particle System. 
            */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            /** Script interface for the SizeBySpeedModule of a Particle System.
            */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            /** Script interface for the RotationOverLifetimeModule of a Particle System.
            */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            /** Script interface for the RotationBySpeedModule of a Particle System.
            */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            /** Script interface for the ExternalForcesModule of a Particle System.
            */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            /** Script interface for the NoiseModule of a Particle System.
            */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            /** Script interface for the CollisionModule of a Particle System.
            */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            /** Script interface for the TriggerModule of a Particle System.
            */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            /** Script interface for the SubEmittersModule of a Particle System.
            */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            /** Script interface for the TextureSheetAnimationModule of a Particle System.
            */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            /** Script interface for the LightsModule of a Particle System.
            */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            /** Script interface for the TrailsModule of a Particle System.
            */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            /** Script interface for the CustomDataModule of a Particle System.
            */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : void
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : number
            public SetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : void
            public GetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : number
            /** Returns all the data that relates to the current internal state of the Particle System.
            * @returns The current internal state of the Particle System. 
            */
            public GetPlaybackState () : UnityEngine.ParticleSystem.PlaybackState
            public SetPlaybackState ($playbackState: UnityEngine.ParticleSystem.PlaybackState) : void
            /** Returns all the data relating to the current internal state of the Particle System Trails.
            * @returns The variable to populate with the Trails that currently belong to the Particle System.. 
            */
            public GetTrails () : UnityEngine.ParticleSystem.Trails
            public GetTrails ($trailData: $Ref<UnityEngine.ParticleSystem.Trails>) : number
            public SetTrails ($trailData: UnityEngine.ParticleSystem.Trails) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param $t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param $withChildren Fast-forward all child Particle Systems as well.
            * @param $restart Restart and start from the beginning.
            * @param $fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param $t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param $withChildren Fast-forward all child Particle Systems as well.
            * @param $restart Restart and start from the beginning.
            * @param $fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param $t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param $withChildren Fast-forward all child Particle Systems as well.
            * @param $restart Restart and start from the beginning.
            * @param $fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param $t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param $withChildren Fast-forward all child Particle Systems as well.
            * @param $restart Restart and start from the beginning.
            * @param $fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number) : void
            /** Starts the Particle System.
            * @param $withChildren Play all child Particle Systems as well.
            */
            public Play ($withChildren: boolean) : void
            /** Starts the Particle System.
            * @param $withChildren Play all child Particle Systems as well.
            */
            public Play () : void
            /** Pauses the system so no new particles are emitted and the existing particles are not updated.
            * @param $withChildren Pause all child Particle Systems as well.
            */
            public Pause ($withChildren: boolean) : void
            /** Pauses the system so no new particles are emitted and the existing particles are not updated.
            * @param $withChildren Pause all child Particle Systems as well.
            */
            public Pause () : void
            /** Stops playing the Particle System using the supplied stop behaviour.
            * @param $withChildren Stop all child Particle Systems as well.
            * @param $stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior) : void
            /** Stops playing the Particle System using the supplied stop behaviour.
            * @param $withChildren Stop all child Particle Systems as well.
            * @param $stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean) : void
            /** Stops playing the Particle System using the supplied stop behaviour.
            * @param $withChildren Stop all child Particle Systems as well.
            * @param $stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop () : void
            /** Remove all particles in the Particle System.
            * @param $withChildren Clear all child Particle Systems as well.
            */
            public Clear ($withChildren: boolean) : void
            /** Remove all particles in the Particle System.
            * @param $withChildren Clear all child Particle Systems as well.
            */
            public Clear () : void
            /** Does the Particle System contain any live particles, or will it produce more?
            * @param $withChildren Check all child Particle Systems as well.
            * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
            */
            public IsAlive ($withChildren: boolean) : boolean
            /** Does the Particle System contain any live particles, or will it produce more?
            * @param $withChildren Check all child Particle Systems as well.
            * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
            */
            public IsAlive () : boolean
            /** Emit count particles immediately.
            * @param $count Number of particles to emit.
            */
            public Emit ($count: number) : void
            public Emit ($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number) : void
            /** Triggers the specified sub emitter on all particles of the Particle System.
            * @param $subEmitterIndex Index of the sub emitter to trigger.
            */
            public TriggerSubEmitter ($subEmitterIndex: number) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>) : void
            /** Reset the cache of reserved graphics memory used for efficient rendering of Particle Systems.
            */
            public static ResetPreMappedBufferMemory () : void
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems.
            * @param $vertexBuffersCount The maximum number of cached vertex buffers.
            * @param $indexBuffersCount The maximum number of cached index buffers.
            */
            public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: number, $indexBuffersCount: number) : void
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData._axisOfRotations|axisOfRotations particle attribute array is allocated.
            */
            public AllocateAxisOfRotationAttribute () : void
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData._meshIndices|meshIndices particle attribute array is allocated.
            */
            public AllocateMeshIndexAttribute () : void
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated.
            * @param $stream The custom data stream to allocate.
            */
            public AllocateCustomDataAttribute ($stream: UnityEngine.ParticleSystemCustomData) : void
            public constructor ()
        }
        /** The space to simulate particles in.
        */
        enum ParticleSystemSimulationSpace
        { Local = 0, World = 1, Custom = 2 }
        /** Control how particle systems apply transform scale.
        */
        enum ParticleSystemScalingMode
        { Hierarchy = 0, Local = 1, Shape = 2 }
        /** Which stream of custom particle data to set.
        */
        enum ParticleSystemCustomData
        { Custom1 = 0, Custom2 = 1 }
        /** The behavior to apply when calling ParticleSystem.Stop|Stop.
        */
        enum ParticleSystemStopBehavior
        { StopEmittingAndClear = 0, StopEmitting = 1 }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        interface MemberFilter
        { 
        (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        }
        var MemberFilter: { new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter; }
        interface TypeFilter
        { 
        (m: System.Type, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Type, filterCriteria: any) => boolean;
        }
        var TypeFilter: { new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter; }
        enum MemberTypes
        { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        enum BindingFlags
        { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216, DoNotWrapExceptions = 33554432 }
        class Assembly extends System.Object implements System.Runtime.Serialization.ISerializable, System.Reflection.ICustomAttributeProvider, System.Security.IEvidenceFactory, System.Runtime.InteropServices._Assembly
        {
            protected [__keep_incompatibility]: never;
        }
        class Module extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Module, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        enum GenericParameterAttributes
        { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        enum TypeAttributes
        { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, RTSpecialName = 2048, HasSecurity = 262144, ReservedMask = 264192 }
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._ConstructorInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class Binder extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ParameterModifier extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum CallingConventions
        { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class EventInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._EventInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class FieldInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._FieldInfo
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._PropertyInfo, System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class InterfaceMapping extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class AssemblyName extends System.Object implements System.Runtime.InteropServices._AssemblyName, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Runtime.InteropServices {
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
        interface _Exception
        {
        }
        interface _Assembly
        {
        }
        interface _Module
        {
        }
        interface _MethodBase
        {
        }
        interface _Attribute
        {
        }
        class StructLayoutAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
        }
        interface _ConstructorInfo
        {
        }
        interface _EventInfo
        {
        }
        interface _FieldInfo
        {
        }
        interface _MethodInfo
        {
        }
        interface _PropertyInfo
        {
        }
        interface _AssemblyName
        {
        }
    }
    namespace Unity.Collections {
        class NativeArray$1<T> extends System.ValueType implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.IDisposable, System.IEquatable$1<Unity.Collections.NativeArray$1<T>>
        {
            protected [__keep_incompatibility]: never;
            public [Symbol.iterator]() : IterableIterator<T>
        }
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file.
        */
        class Scene extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get handle(): number;
            /** Returns the relative path of the Scene. For example: "AssetsMyScenesMyScene.unity".
            */
            public get path(): string;
            /** Returns the name of the Scene that is currently active in the game or app.
            */
            public get name(): string;
            public set name(value: string);
            /** IsLoaded is set to true after loading has completed and objects have been enabled.
            */
            public get isLoaded(): boolean;
            /** Return the index of the Scene in the Build Settings.
            */
            public get buildIndex(): number;
            /** Returns true if the Scene is modified.
            */
            public get isDirty(): boolean;
            /** The number of root transforms of this Scene.
            */
            public get rootCount(): number;
            public get isSubScene(): boolean;
            public set isSubScene(value: boolean);
            /** Whether this is a valid Scene.
            A Scene may be invalid if, for example, you tried to open a Scene that does not exist. In this case, the Scene returned from EditorSceneManager.OpenScene would return False for IsValid.
            * @returns Whether this is a valid Scene. 
            */
            public IsValid () : boolean
            /** Returns all the root game objects in the Scene.
            * @returns An array of game objects. 
            */
            public GetRootGameObjects () : System.Array$1<UnityEngine.GameObject>
            public GetRootGameObjects ($rootGameObjects: System.Collections.Generic.List$1<UnityEngine.GameObject>) : void
            public static op_Equality ($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene) : boolean
            public static op_Inequality ($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene) : boolean
        }
        /** Scene management at run-time.
        */
        class SceneManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The current number of Scenes.
            */
            public static get sceneCount(): number;
            /** The number of loaded Scenes.
            */
            public static get loadedSceneCount(): number;
            /** Number of Scenes in Build Settings.
            */
            public static get sceneCountInBuildSettings(): number;
            /** Gets the currently active Scene.
            * @returns The active Scene. 
            */
            public static GetActiveScene () : UnityEngine.SceneManagement.Scene
            /** Set the Scene to be active.
            * @param $scene The Scene to be set.
            * @returns Returns false if the Scene is not loaded yet. 
            */
            public static SetActiveScene ($scene: UnityEngine.SceneManagement.Scene) : boolean
            /** Searches all Scenes loaded for a Scene that has the given asset path.
            * @param $scenePath Path of the Scene. Should be relative to the project folder. Like: "AssetsMyScenesMyScene.unity".
            * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
            */
            public static GetSceneByPath ($scenePath: string) : UnityEngine.SceneManagement.Scene
            /** Searches through the Scenes loaded for a Scene with the given name.
            * @param $name Name of Scene to find.
            * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
            */
            public static GetSceneByName ($name: string) : UnityEngine.SceneManagement.Scene
            /** Get a Scene struct from a build index.
            * @param $buildIndex Build index as shown in the Build Settings window.
            * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
            */
            public static GetSceneByBuildIndex ($buildIndex: number) : UnityEngine.SceneManagement.Scene
            /** Get the Scene at index in the SceneManager's list of loaded Scenes.
            * @param $index Index of the Scene to get. Index must be greater than or equal to 0 and less than SceneManager.sceneCount.
            * @returns A reference to the Scene at the index specified. 
            */
            public static GetSceneAt ($index: number) : UnityEngine.SceneManagement.Scene
            /** Create an empty new Scene at runtime with the given name.
            * @param $sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
            * @param $parameters Various parameters used to create the Scene.
            * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
            */
            public static CreateScene ($sceneName: string, $parameters: UnityEngine.SceneManagement.CreateSceneParameters) : UnityEngine.SceneManagement.Scene
            /** This will merge the source Scene into the destinationScene.
            * @param $sourceScene The Scene that will be merged into the destination Scene.
            * @param $destinationScene Existing Scene to merge the source Scene into.
            */
            public static MergeScenes ($sourceScene: UnityEngine.SceneManagement.Scene, $destinationScene: UnityEngine.SceneManagement.Scene) : void
            /** Move a GameObject from its current Scene to a new Scene.
            * @param $go GameObject to move.
            * @param $scene Scene to move into.
            */
            public static MoveGameObjectToScene ($go: UnityEngine.GameObject, $scene: UnityEngine.SceneManagement.Scene) : void
            public static MoveGameObjectsToScene ($instanceIDs: Unity.Collections.NativeArray$1<number>, $scene: UnityEngine.SceneManagement.Scene) : void
            public static add_sceneLoaded ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>) : void
            public static remove_sceneLoaded ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>) : void
            public static add_sceneUnloaded ($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>) : void
            public static remove_sceneUnloaded ($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>) : void
            public static add_activeSceneChanged ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>) : void
            public static remove_activeSceneChanged ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>) : void
            /** Create an empty new Scene at runtime with the given name.
            * @param $sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
            * @param $parameters Various parameters used to create the Scene.
            * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
            */
            public static CreateScene ($sceneName: string) : UnityEngine.SceneManagement.Scene
            /** Loads the Scene by its name or index in Build Settings.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
            */
            public static LoadScene ($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode) : void
            public static LoadScene ($sceneName: string) : void
            /** Loads the Scene by its name or index in Build Settings.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $parameters Various parameters used to load the Scene.
            * @returns A handle to the Scene being loaded. 
            */
            public static LoadScene ($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.SceneManagement.Scene
            /** Loads the Scene by its name or index in Build Settings.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
            */
            public static LoadScene ($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode) : void
            public static LoadScene ($sceneBuildIndex: number) : void
            /** Loads the Scene by its name or index in Build Settings.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $parameters Various parameters used to load the Scene.
            * @returns A handle to the Scene being loaded. 
            */
            public static LoadScene ($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.SceneManagement.Scene
            /** Loads the Scene asynchronously in the background.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
            * @param $parameters Struct that collects the various parameters into a single place except for the name and index.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static LoadSceneAsync ($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode) : UnityEngine.AsyncOperation
            public static LoadSceneAsync ($sceneBuildIndex: number) : UnityEngine.AsyncOperation
            /** Loads the Scene asynchronously in the background.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
            * @param $parameters Struct that collects the various parameters into a single place except for the name and index.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static LoadSceneAsync ($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.AsyncOperation
            /** Loads the Scene asynchronously in the background.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
            * @param $parameters Struct that collects the various parameters into a single place except for the name and index.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static LoadSceneAsync ($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode) : UnityEngine.AsyncOperation
            public static LoadSceneAsync ($sceneName: string) : UnityEngine.AsyncOperation
            /** Loads the Scene asynchronously in the background.
            * @param $sceneName Name or path of the Scene to load.
            * @param $sceneBuildIndex Index of the Scene in the Build Settings to load.
            * @param $mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
            * @param $parameters Struct that collects the various parameters into a single place except for the name and index.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static LoadSceneAsync ($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.AsyncOperation
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
            * @param $sceneBuildIndex Index of the Scene in BuildSettings.
            * @param $sceneName Name or path of the Scene to unload.
            * @param $scene Scene to unload.
            * @param $options Scene unloading options.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static UnloadSceneAsync ($sceneBuildIndex: number) : UnityEngine.AsyncOperation
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
            * @param $sceneBuildIndex Index of the Scene in BuildSettings.
            * @param $sceneName Name or path of the Scene to unload.
            * @param $scene Scene to unload.
            * @param $options Scene unloading options.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static UnloadSceneAsync ($sceneName: string) : UnityEngine.AsyncOperation
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
            * @param $sceneBuildIndex Index of the Scene in BuildSettings.
            * @param $sceneName Name or path of the Scene to unload.
            * @param $scene Scene to unload.
            * @param $options Scene unloading options.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static UnloadSceneAsync ($scene: UnityEngine.SceneManagement.Scene) : UnityEngine.AsyncOperation
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
            * @param $sceneBuildIndex Index of the Scene in BuildSettings.
            * @param $sceneName Name or path of the Scene to unload.
            * @param $scene Scene to unload.
            * @param $options Scene unloading options.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static UnloadSceneAsync ($sceneBuildIndex: number, $options: UnityEngine.SceneManagement.UnloadSceneOptions) : UnityEngine.AsyncOperation
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
            * @param $sceneBuildIndex Index of the Scene in BuildSettings.
            * @param $sceneName Name or path of the Scene to unload.
            * @param $scene Scene to unload.
            * @param $options Scene unloading options.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static UnloadSceneAsync ($sceneName: string, $options: UnityEngine.SceneManagement.UnloadSceneOptions) : UnityEngine.AsyncOperation
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
            * @param $sceneBuildIndex Index of the Scene in BuildSettings.
            * @param $sceneName Name or path of the Scene to unload.
            * @param $scene Scene to unload.
            * @param $options Scene unloading options.
            * @returns Use the AsyncOperation to determine if the operation has completed. 
            */
            public static UnloadSceneAsync ($scene: UnityEngine.SceneManagement.Scene, $options: UnityEngine.SceneManagement.UnloadSceneOptions) : UnityEngine.AsyncOperation
            public constructor ()
        }
        /** This struct collects all the CreateScene parameters in to a single place.
        */
        class CreateSceneParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Used when loading a Scene in a player.
        */
        enum LoadSceneMode
        { Single = 0, Additive = 1 }
        /** This struct collects all the LoadScene parameters in to a single place.
        */
        class LoadSceneParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Scene unloading options passed to SceneManager.UnloadScene.
        */
        enum UnloadSceneOptions
        { None = 0, UnloadAllEmbeddedSceneObjects = 1 }
    }
    namespace Puerts.TypeMapping {
        class RegisterInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Threading.Tasks {
        class Task extends System.Object implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Threading {
        interface IThreadPoolWorkItem
        {
        }
        class CancellationToken extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public [Symbol.iterator]() : IterableIterator<T>
        }
    }
    namespace UnityEngine.Application {
        interface AdvertisingIdentifierCallback
        { 
        (advertisingId: string, trackingEnabled: boolean, errorMsg: string) : void; 
        Invoke?: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        }
        var AdvertisingIdentifierCallback: { new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback; }
        interface LowMemoryCallback
        { 
        () : void; 
        Invoke?: () => void;
        }
        var LowMemoryCallback: { new (func: () => void): LowMemoryCallback; }
        interface MemoryUsageChangedCallback
        { 
        (usage: $Ref<UnityEngine.ApplicationMemoryUsageChange>) : void; 
        Invoke?: (usage: $Ref<UnityEngine.ApplicationMemoryUsageChange>) => void;
        }
        var MemoryUsageChangedCallback: { new (func: (usage: $Ref<UnityEngine.ApplicationMemoryUsageChange>) => void): MemoryUsageChangedCallback; }
        interface LogCallback
        { 
        (condition: string, stackTrace: string, type: UnityEngine.LogType) : void; 
        Invoke?: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        }
        var LogCallback: { new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback; }
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents.
        */
        interface UnityAction
        { 
        () : void; 
        Invoke?: () => void;
        }
        var UnityAction: { new (func: () => void): UnityAction; }
        /** Abstract base class for UnityEvents.
        */
        class UnityEventBase extends System.Object implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
        /** A zero argument persistent callback that can be saved with the Scene.
        */
        class UnityEvent extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
        class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
        interface UnityAction$2<T0, T1>
        { 
        (arg0: T0, arg1: T1) : void; 
        Invoke?: (arg0: T0, arg1: T1) => void;
        }
        interface UnityAction$1<T0>
        { 
        (arg0: T0) : void; 
        Invoke?: (arg0: T0) => void;
        }
    }
    namespace UnityEngine.RectTransform {
        interface ReapplyDrivenProperties
        { 
        (driven: UnityEngine.RectTransform) : void; 
        Invoke?: (driven: UnityEngine.RectTransform) => void;
        }
        var ReapplyDrivenProperties: { new (func: (driven: UnityEngine.RectTransform) => void): ReapplyDrivenProperties; }
        enum Edge
        { Left = 0, Right = 1, Top = 2, Bottom = 3 }
        enum Axis
        { Horizontal = 0, Vertical = 1 }
    }
    namespace UnityEngine.Camera {
        interface CameraCallback
        { 
        (cam: UnityEngine.Camera) : void; 
        Invoke?: (cam: UnityEngine.Camera) => void;
        }
        var CameraCallback: { new (func: (cam: UnityEngine.Camera) => void): CameraCallback; }
        enum GateFitMode
        { Vertical = 1, Horizontal = 2, Fill = 3, Overscan = 4, None = 0 }
        enum MonoOrStereoscopicEye
        { Left = 0, Right = 1, Mono = 2 }
        class GateFitParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum StereoscopicEye
        { Left = 0, Right = 1 }
        enum SceneViewFilterMode
        { Off = 0, ShowFiltered = 1 }
        class RenderRequest extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Rendering {
        /** Opaque object sorting mode of a Camera.
        */
        enum OpaqueSortMode
        { Default = 0, FrontToBack = 1, NoDistanceSort = 2 }
        /** Defines a place in camera's rendering to attach Rendering.CommandBuffer objects to.
        */
        enum CameraEvent
        { BeforeDepthTexture = 0, AfterDepthTexture = 1, BeforeDepthNormalsTexture = 2, AfterDepthNormalsTexture = 3, BeforeGBuffer = 4, AfterGBuffer = 5, BeforeLighting = 6, AfterLighting = 7, BeforeFinalPass = 8, AfterFinalPass = 9, BeforeForwardOpaque = 10, AfterForwardOpaque = 11, BeforeImageEffectsOpaque = 12, AfterImageEffectsOpaque = 13, BeforeSkybox = 14, AfterSkybox = 15, BeforeForwardAlpha = 16, AfterForwardAlpha = 17, BeforeImageEffects = 18, AfterImageEffects = 19, AfterEverything = 20, BeforeReflections = 21, AfterReflections = 22, BeforeHaloAndLensFlares = 23, AfterHaloAndLensFlares = 24 }
        /** List of graphics commands to execute.
        */
        class CommandBuffer extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Describes the desired characteristics with respect to prioritisation and load balancing of the queue that a command buffer being submitted via Graphics.ExecuteCommandBufferAsync or [[ScriptableRenderContext.ExecuteCommandBufferAsync] should be sent to.
        */
        enum ComputeQueueType
        { Default = 0, Background = 1, Urgent = 2 }
        /** Parameters that configure a culling operation in the Scriptable Render Pipeline.
        */
        class ScriptableCullingParameters extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.ScriptableCullingParameters>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents a shader keyword declared in a shader source file.
        */
        class LocalKeyword extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.LocalKeyword>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Types of data that you can encapsulate within a render texture.
        */
        enum RenderTextureSubElement
        { Color = 0, Depth = 1, Stencil = 2, Default = 3 }
        enum ShaderHardwareTier
        { Tier1 = 0, Tier2 = 1, Tier3 = 2 }
        /** Represents a global shader keyword.
        */
        class GlobalKeyword extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents the local keyword space of a Shader or ComputeShader.
        */
        class LocalKeywordSpace extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.LocalKeywordSpace>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Shader tag ids are used to refer to various names in shaders.
        */
        class ShaderTagId extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.ShaderTagId>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Type of a given shader property.
        */
        enum ShaderPropertyType
        { Color = 0, Vector = 1, Float = 2, Range = 3, Texture = 4, Int = 5 }
        /** Flags that control how a shader property behaves.
        */
        enum ShaderPropertyFlags
        { None = 0, HideInInspector = 1, PerRendererData = 2, NoScaleOffset = 4, Normal = 8, HDR = 16, Gamma = 32, NonModifiableTextureData = 64, MainTexture = 128, MainColor = 256 }
        /** Texture "dimension" (type).
        */
        enum TextureDimension
        { Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
        /** How shadows are cast from this object.
        */
        enum ShadowCastingMode
        { Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
        /** Light probe interpolation type.
        */
        enum LightProbeUsage
        { Off = 0, BlendProbes = 1, UseProxyVolume = 2, CustomProvided = 4 }
        /** Reflection Probe usage.
        */
        enum ReflectionProbeUsage
        { Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
        /** ReflectionProbeBlendInfo contains information required for blending probes.
        */
        class ReflectionProbeBlendInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Shadow resolution options for a Light.
        */
        enum LightShadowResolution
        { FromQualitySettings = -1, Low = 0, Medium = 1, High = 2, VeryHigh = 3 }
        /** Defines a place in light's rendering to attach Rendering.CommandBuffer objects to.
        */
        enum LightEvent
        { BeforeShadowMap = 0, AfterShadowMap = 1, BeforeScreenspaceMask = 2, AfterScreenspaceMask = 3, BeforeShadowMapPass = 4, AfterShadowMapPass = 5 }
        /** Allows precise control over which shadow map passes to execute Rendering.CommandBuffer objects attached using Light.AddCommandBuffer.
        */
        enum ShadowMapPass
        { PointlightPositiveX = 1, PointlightNegativeX = 2, PointlightPositiveY = 4, PointlightNegativeY = 8, PointlightPositiveZ = 16, PointlightNegativeZ = 32, DirectionalCascade0 = 64, DirectionalCascade1 = 128, DirectionalCascade2 = 256, DirectionalCascade3 = 512, Spotlight = 1024, Pointlight = 63, Directional = 960, All = 2047 }
    }
    namespace UnityEngine.Experimental.Rendering {
        /** Indicates how a Renderer is updated.
        */
        enum RayTracingMode
        { Off = 0, Static = 1, DynamicTransform = 2, DynamicGeometry = 3 }
        /** Use this format to create either Textures or RenderTextures from scripts.
        */
        enum GraphicsFormat
        { None = 0, R8_SRGB = 1, R8G8_SRGB = 2, R8G8B8_SRGB = 3, R8G8B8A8_SRGB = 4, R8_UNorm = 5, R8G8_UNorm = 6, R8G8B8_UNorm = 7, R8G8B8A8_UNorm = 8, R8_SNorm = 9, R8G8_SNorm = 10, R8G8B8_SNorm = 11, R8G8B8A8_SNorm = 12, R8_UInt = 13, R8G8_UInt = 14, R8G8B8_UInt = 15, R8G8B8A8_UInt = 16, R8_SInt = 17, R8G8_SInt = 18, R8G8B8_SInt = 19, R8G8B8A8_SInt = 20, R16_UNorm = 21, R16G16_UNorm = 22, R16G16B16_UNorm = 23, R16G16B16A16_UNorm = 24, R16_SNorm = 25, R16G16_SNorm = 26, R16G16B16_SNorm = 27, R16G16B16A16_SNorm = 28, R16_UInt = 29, R16G16_UInt = 30, R16G16B16_UInt = 31, R16G16B16A16_UInt = 32, R16_SInt = 33, R16G16_SInt = 34, R16G16B16_SInt = 35, R16G16B16A16_SInt = 36, R32_UInt = 37, R32G32_UInt = 38, R32G32B32_UInt = 39, R32G32B32A32_UInt = 40, R32_SInt = 41, R32G32_SInt = 42, R32G32B32_SInt = 43, R32G32B32A32_SInt = 44, R16_SFloat = 45, R16G16_SFloat = 46, R16G16B16_SFloat = 47, R16G16B16A16_SFloat = 48, R32_SFloat = 49, R32G32_SFloat = 50, R32G32B32_SFloat = 51, R32G32B32A32_SFloat = 52, B8G8R8_SRGB = 56, B8G8R8A8_SRGB = 57, B8G8R8_UNorm = 58, B8G8R8A8_UNorm = 59, B8G8R8_SNorm = 60, B8G8R8A8_SNorm = 61, B8G8R8_UInt = 62, B8G8R8A8_UInt = 63, B8G8R8_SInt = 64, B8G8R8A8_SInt = 65, R4G4B4A4_UNormPack16 = 66, B4G4R4A4_UNormPack16 = 67, R5G6B5_UNormPack16 = 68, B5G6R5_UNormPack16 = 69, R5G5B5A1_UNormPack16 = 70, B5G5R5A1_UNormPack16 = 71, A1R5G5B5_UNormPack16 = 72, E5B9G9R9_UFloatPack32 = 73, B10G11R11_UFloatPack32 = 74, A2B10G10R10_UNormPack32 = 75, A2B10G10R10_UIntPack32 = 76, A2B10G10R10_SIntPack32 = 77, A2R10G10B10_UNormPack32 = 78, A2R10G10B10_UIntPack32 = 79, A2R10G10B10_SIntPack32 = 80, A2R10G10B10_XRSRGBPack32 = 81, A2R10G10B10_XRUNormPack32 = 82, R10G10B10_XRSRGBPack32 = 83, R10G10B10_XRUNormPack32 = 84, A10R10G10B10_XRSRGBPack32 = 85, A10R10G10B10_XRUNormPack32 = 86, D16_UNorm = 90, D24_UNorm = 91, D24_UNorm_S8_UInt = 92, D32_SFloat = 93, D32_SFloat_S8_UInt = 94, S8_UInt = 95, RGB_DXT1_SRGB = 96, RGBA_DXT1_SRGB = 96, RGB_DXT1_UNorm = 97, RGBA_DXT1_UNorm = 97, RGBA_DXT3_SRGB = 98, RGBA_DXT3_UNorm = 99, RGBA_DXT5_SRGB = 100, RGBA_DXT5_UNorm = 101, R_BC4_UNorm = 102, R_BC4_SNorm = 103, RG_BC5_UNorm = 104, RG_BC5_SNorm = 105, RGB_BC6H_UFloat = 106, RGB_BC6H_SFloat = 107, RGBA_BC7_SRGB = 108, RGBA_BC7_UNorm = 109, RGB_PVRTC_2Bpp_SRGB = 110, RGB_PVRTC_2Bpp_UNorm = 111, RGB_PVRTC_4Bpp_SRGB = 112, RGB_PVRTC_4Bpp_UNorm = 113, RGBA_PVRTC_2Bpp_SRGB = 114, RGBA_PVRTC_2Bpp_UNorm = 115, RGBA_PVRTC_4Bpp_SRGB = 116, RGBA_PVRTC_4Bpp_UNorm = 117, RGB_ETC_UNorm = 118, RGB_ETC2_SRGB = 119, RGB_ETC2_UNorm = 120, RGB_A1_ETC2_SRGB = 121, RGB_A1_ETC2_UNorm = 122, RGBA_ETC2_SRGB = 123, RGBA_ETC2_UNorm = 124, R_EAC_UNorm = 125, R_EAC_SNorm = 126, RG_EAC_UNorm = 127, RG_EAC_SNorm = 128, RGBA_ASTC4X4_SRGB = 129, RGBA_ASTC4X4_UNorm = 130, RGBA_ASTC5X5_SRGB = 131, RGBA_ASTC5X5_UNorm = 132, RGBA_ASTC6X6_SRGB = 133, RGBA_ASTC6X6_UNorm = 134, RGBA_ASTC8X8_SRGB = 135, RGBA_ASTC8X8_UNorm = 136, RGBA_ASTC10X10_SRGB = 137, RGBA_ASTC10X10_UNorm = 138, RGBA_ASTC12X12_SRGB = 139, RGBA_ASTC12X12_UNorm = 140, YUV2 = 141, DepthAuto = 142, ShadowAuto = 143, VideoAuto = 144, RGBA_ASTC4X4_UFloat = 145, RGBA_ASTC5X5_UFloat = 146, RGBA_ASTC6X6_UFloat = 147, RGBA_ASTC8X8_UFloat = 148, RGBA_ASTC10X10_UFloat = 149, RGBA_ASTC12X12_UFloat = 150, D16_UNorm_S8_UInt = 151 }
        /** 
        Use a default format to create either Textures or RenderTextures from scripts based on platform specific capability.
        */
        enum DefaultFormat
        { LDR = 0, HDR = 1, DepthStencil = 2, Shadow = 3, Video = 4 }
        enum TextureCreationFlags
        { None = 0, MipChain = 1, DontInitializePixels = 4, Crunch = 64, DontUploadUponCreate = 1024, IgnoreMipmapLimit = 2048 }
    }
    namespace UnityEngine.GraphicsBuffer {
        enum Target
        { Vertex = 1, Index = 2, CopySource = 4, CopyDestination = 8, Structured = 16, Raw = 32, Append = 64, Counter = 128, IndirectArguments = 256, Constant = 512 }
    }
    namespace UnityEngine.Physics {
        interface ContactEventDelegate
        { 
        (scene: UnityEngine.PhysicsScene, headerArray: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) : void; 
        Invoke?: (scene: UnityEngine.PhysicsScene, headerArray: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) => void;
        }
        var ContactEventDelegate: { new (func: (scene: UnityEngine.PhysicsScene, headerArray: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) => void): ContactEventDelegate; }
    }
    namespace Unity.Collections.NativeArray$1 {
        class ReadOnly<T> extends System.ValueType implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            public [Symbol.iterator]() : IterableIterator<T>
        }
    }
    namespace UnityEngine.Playables {
        /** Use the PlayableGraph to manage Playable creations and destructions.
        */
        class PlayableGraph extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Audio {
        /** Object representing a group in the mixer.
        */
        class AudioMixerGroup extends UnityEngine.Object implements UnityEngine.Internal.ISubAssetNotDuplicatable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Internal {
        interface ISubAssetNotDuplicatable
        {
        }
    }
    namespace UnityEngine.AudioClip {
        interface PCMReaderCallback
        { 
        (data: System.Array$1<number>) : void; 
        Invoke?: (data: System.Array$1<number>) => void;
        }
        var PCMReaderCallback: { new (func: (data: System.Array$1<number>) => void): PCMReaderCallback; }
        interface PCMSetPositionCallback
        { 
        (position: number) : void; 
        Invoke?: (position: number) => void;
        }
        var PCMSetPositionCallback: { new (func: (position: number) => void): PCMSetPositionCallback; }
    }
    namespace UnityEngine.Canvas {
        interface WillRenderCanvases
        { 
        () : void; 
        Invoke?: () => void;
        }
        var WillRenderCanvases: { new (func: () => void): WillRenderCanvases; }
    }
    namespace UnityEngine.EventSystems {
        class UIBehaviour extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
        }
        interface IEventSystemHandler
        {
        }
        interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        class AbstractEventData extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData
        {
            protected [__keep_incompatibility]: never;
        }
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData
        {
            protected [__keep_incompatibility]: never;
        }
        interface IInitializePotentialDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        class AxisEventData extends UnityEngine.EventSystems.BaseEventData
        {
            protected [__keep_incompatibility]: never;
        }
        interface IBeginDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IEndDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IUpdateSelectedHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IScrollHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface ICancelHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        class EventSystem extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static get current(): UnityEngine.EventSystems.EventSystem;
            public static set current(value: UnityEngine.EventSystems.EventSystem);
            public get sendNavigationEvents(): boolean;
            public set sendNavigationEvents(value: boolean);
            public get pixelDragThreshold(): number;
            public set pixelDragThreshold(value: number);
            public get currentInputModule(): UnityEngine.EventSystems.BaseInputModule;
            public get firstSelectedGameObject(): UnityEngine.GameObject;
            public set firstSelectedGameObject(value: UnityEngine.GameObject);
            public get currentSelectedGameObject(): UnityEngine.GameObject;
            public get isFocused(): boolean;
            public get alreadySelecting(): boolean;
            public UpdateModules () : void
            public SetSelectedGameObject ($selected: UnityEngine.GameObject, $pointer: UnityEngine.EventSystems.BaseEventData) : void
            public SetSelectedGameObject ($selected: UnityEngine.GameObject) : void
            public RaycastAll ($eventData: UnityEngine.EventSystems.PointerEventData, $raycastResults: System.Collections.Generic.List$1<UnityEngine.EventSystems.RaycastResult>) : void
            public IsPointerOverGameObject () : boolean
            public IsPointerOverGameObject ($pointerId: number) : boolean
            public static SetUITookitEventSystemOverride ($activeEventSystem: UnityEngine.EventSystems.EventSystem, $sendEvents?: boolean, $createPanelGameObjectsOnStart?: boolean) : void
        }
        class BaseInputModule extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
        }
        class RaycastResult extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.UI {
        class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICanvasElement
        {
        }
        class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement
        {
            protected [__keep_incompatibility]: never;
        }
        interface IClippable
        {
        }
        interface IMaterialModifier
        {
        }
        interface IMaskable
        {
        }
        class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get cachedTextGenerator(): UnityEngine.TextGenerator;
            public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
            public get mainTexture(): UnityEngine.Texture;
            public get font(): UnityEngine.Font;
            public set font(value: UnityEngine.Font);
            public get text(): string;
            public set text(value: string);
            public get supportRichText(): boolean;
            public set supportRichText(value: boolean);
            public get resizeTextForBestFit(): boolean;
            public set resizeTextForBestFit(value: boolean);
            public get resizeTextMinSize(): number;
            public set resizeTextMinSize(value: number);
            public get resizeTextMaxSize(): number;
            public set resizeTextMaxSize(value: number);
            public get alignment(): UnityEngine.TextAnchor;
            public set alignment(value: UnityEngine.TextAnchor);
            public get alignByGeometry(): boolean;
            public set alignByGeometry(value: boolean);
            public get fontSize(): number;
            public set fontSize(value: number);
            public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
            public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
            public get verticalOverflow(): UnityEngine.VerticalWrapMode;
            public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
            public get lineSpacing(): number;
            public set lineSpacing(value: number);
            public get fontStyle(): UnityEngine.FontStyle;
            public set fontStyle(value: UnityEngine.FontStyle);
            public get pixelsPerUnit(): number;
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public FontTextureChanged () : void
            public GetGenerationSettings ($extents: UnityEngine.Vector2) : UnityEngine.TextGenerationSettings
            public static GetTextAnchorPivot ($anchor: UnityEngine.TextAnchor) : UnityEngine.Vector2
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
        }
        interface ILayoutElement
        {
        }
        class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaterialModifier, UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.ISerializationCallbackReceiver, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get sprite(): UnityEngine.Sprite;
            public set sprite(value: UnityEngine.Sprite);
            public get overrideSprite(): UnityEngine.Sprite;
            public set overrideSprite(value: UnityEngine.Sprite);
            public get type(): UnityEngine.UI.Image.Type;
            public set type(value: UnityEngine.UI.Image.Type);
            public get preserveAspect(): boolean;
            public set preserveAspect(value: boolean);
            public get fillCenter(): boolean;
            public set fillCenter(value: boolean);
            public get fillMethod(): UnityEngine.UI.Image.FillMethod;
            public set fillMethod(value: UnityEngine.UI.Image.FillMethod);
            public get fillAmount(): number;
            public set fillAmount(value: number);
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            public get alphaHitTestMinimumThreshold(): number;
            public set alphaHitTestMinimumThreshold(value: number);
            public get useSpriteMesh(): boolean;
            public set useSpriteMesh(value: boolean);
            public static get defaultETC1GraphicMaterial(): UnityEngine.Material;
            public get mainTexture(): UnityEngine.Texture;
            public get hasBorder(): boolean;
            public get pixelsPerUnitMultiplier(): number;
            public set pixelsPerUnitMultiplier(value: number);
            public get pixelsPerUnit(): number;
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public DisableSpriteOptimizations () : void
            public OnBeforeSerialize () : void
            public OnAfterDeserialize () : void
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
            public IsRaycastLocationValid ($screenPoint: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
        }
        class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
        }
        class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
            public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        class Slider extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get fillRect(): UnityEngine.RectTransform;
            public set fillRect(value: UnityEngine.RectTransform);
            public get handleRect(): UnityEngine.RectTransform;
            public set handleRect(value: UnityEngine.RectTransform);
            public get direction(): UnityEngine.UI.Slider.Direction;
            public set direction(value: UnityEngine.UI.Slider.Direction);
            public get minValue(): number;
            public set minValue(value: number);
            public get maxValue(): number;
            public set maxValue(value: number);
            public get wholeNumbers(): boolean;
            public set wholeNumbers(value: boolean);
            public get value(): number;
            public set value(value: number);
            public get normalizedValue(): number;
            public set normalizedValue(value: number);
            public get onValueChanged(): UnityEngine.UI.Slider.SliderEvent;
            public set onValueChanged(value: UnityEngine.UI.Slider.SliderEvent);
            public SetValueWithoutNotify ($input: number) : void
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public SetDirection ($direction: UnityEngine.UI.Slider.Direction, $includeRectLayouts: boolean) : void
        }
        enum CanvasUpdate
        { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        class Toggle extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public toggleTransition : UnityEngine.UI.Toggle.ToggleTransition
            public graphic : UnityEngine.UI.Graphic
            public onValueChanged : UnityEngine.UI.Toggle.ToggleEvent
            public get group(): UnityEngine.UI.ToggleGroup;
            public set group(value: UnityEngine.UI.ToggleGroup);
            public get isOn(): boolean;
            public set isOn(value: boolean);
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public SetIsOnWithoutNotify ($value: boolean) : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
        }
        class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour
        {
            protected [__keep_incompatibility]: never;
        }
        class InputField extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get shouldHideMobileInput(): boolean;
            public set shouldHideMobileInput(value: boolean);
            public get shouldActivateOnSelect(): boolean;
            public set shouldActivateOnSelect(value: boolean);
            public get text(): string;
            public set text(value: string);
            public get isFocused(): boolean;
            public get caretBlinkRate(): number;
            public set caretBlinkRate(value: number);
            public get caretWidth(): number;
            public set caretWidth(value: number);
            public get textComponent(): UnityEngine.UI.Text;
            public set textComponent(value: UnityEngine.UI.Text);
            public get placeholder(): UnityEngine.UI.Graphic;
            public set placeholder(value: UnityEngine.UI.Graphic);
            public get caretColor(): UnityEngine.Color;
            public set caretColor(value: UnityEngine.Color);
            public get customCaretColor(): boolean;
            public set customCaretColor(value: boolean);
            public get selectionColor(): UnityEngine.Color;
            public set selectionColor(value: UnityEngine.Color);
            public get onEndEdit(): UnityEngine.UI.InputField.EndEditEvent;
            public set onEndEdit(value: UnityEngine.UI.InputField.EndEditEvent);
            public get onSubmit(): UnityEngine.UI.InputField.SubmitEvent;
            public set onSubmit(value: UnityEngine.UI.InputField.SubmitEvent);
            public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
            public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
            public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
            public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
            public get characterLimit(): number;
            public set characterLimit(value: number);
            public get contentType(): UnityEngine.UI.InputField.ContentType;
            public set contentType(value: UnityEngine.UI.InputField.ContentType);
            public get lineType(): UnityEngine.UI.InputField.LineType;
            public set lineType(value: UnityEngine.UI.InputField.LineType);
            public get inputType(): UnityEngine.UI.InputField.InputType;
            public set inputType(value: UnityEngine.UI.InputField.InputType);
            public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
            public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
            public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
            public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
            public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
            public get readOnly(): boolean;
            public set readOnly(value: boolean);
            public get multiLine(): boolean;
            public get asteriskChar(): number;
            public set asteriskChar(value: number);
            public get wasCanceled(): boolean;
            public get caretPosition(): number;
            public set caretPosition(value: number);
            public get selectionAnchorPosition(): number;
            public set selectionAnchorPosition(value: number);
            public get selectionFocusPosition(): number;
            public set selectionFocusPosition(value: number);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public SetTextWithoutNotify ($input: string) : void
            public MoveTextEnd ($shift: boolean) : void
            public MoveTextStart ($shift: boolean) : void
            public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public ProcessEvent ($e: UnityEngine.Event) : void
            public OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public ForceLabelUpdate () : void
            public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public ActivateInputField () : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public DeactivateInputField () : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
        }
        class ScrollRect extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutController, UnityEngine.UI.ILayoutGroup, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.UI.ILayoutElement
        {
            protected [__keep_incompatibility]: never;
            public get content(): UnityEngine.RectTransform;
            public set content(value: UnityEngine.RectTransform);
            public get horizontal(): boolean;
            public set horizontal(value: boolean);
            public get vertical(): boolean;
            public set vertical(value: boolean);
            public get movementType(): UnityEngine.UI.ScrollRect.MovementType;
            public set movementType(value: UnityEngine.UI.ScrollRect.MovementType);
            public get elasticity(): number;
            public set elasticity(value: number);
            public get inertia(): boolean;
            public set inertia(value: boolean);
            public get decelerationRate(): number;
            public set decelerationRate(value: number);
            public get scrollSensitivity(): number;
            public set scrollSensitivity(value: number);
            public get viewport(): UnityEngine.RectTransform;
            public set viewport(value: UnityEngine.RectTransform);
            public get horizontalScrollbar(): UnityEngine.UI.Scrollbar;
            public set horizontalScrollbar(value: UnityEngine.UI.Scrollbar);
            public get verticalScrollbar(): UnityEngine.UI.Scrollbar;
            public set verticalScrollbar(value: UnityEngine.UI.Scrollbar);
            public get horizontalScrollbarVisibility(): UnityEngine.UI.ScrollRect.ScrollbarVisibility;
            public set horizontalScrollbarVisibility(value: UnityEngine.UI.ScrollRect.ScrollbarVisibility);
            public get verticalScrollbarVisibility(): UnityEngine.UI.ScrollRect.ScrollbarVisibility;
            public set verticalScrollbarVisibility(value: UnityEngine.UI.ScrollRect.ScrollbarVisibility);
            public get horizontalScrollbarSpacing(): number;
            public set horizontalScrollbarSpacing(value: number);
            public get verticalScrollbarSpacing(): number;
            public set verticalScrollbarSpacing(value: number);
            public get onValueChanged(): UnityEngine.UI.ScrollRect.ScrollRectEvent;
            public set onValueChanged(value: UnityEngine.UI.ScrollRect.ScrollRectEvent);
            public get velocity(): UnityEngine.Vector2;
            public set velocity(value: UnityEngine.Vector2);
            public get normalizedPosition(): UnityEngine.Vector2;
            public set normalizedPosition(value: UnityEngine.Vector2);
            public get horizontalNormalizedPosition(): number;
            public set horizontalNormalizedPosition(value: number);
            public get verticalNormalizedPosition(): number;
            public set verticalNormalizedPosition(value: number);
            public get minWidth(): number;
            public get preferredWidth(): number;
            public get flexibleWidth(): number;
            public get minHeight(): number;
            public get preferredHeight(): number;
            public get flexibleHeight(): number;
            public get layoutPriority(): number;
            public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
            public LayoutComplete () : void
            public GraphicUpdateComplete () : void
            public StopMovement () : void
            public OnScroll ($data: UnityEngine.EventSystems.PointerEventData) : void
            public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public CalculateLayoutInputHorizontal () : void
            public CalculateLayoutInputVertical () : void
            public SetLayoutHorizontal () : void
            public SetLayoutVertical () : void
        }
        interface ILayoutController
        {
        }
        interface ILayoutGroup extends UnityEngine.UI.ILayoutController
        {
        }
        class Scrollbar extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
        }
        class Dropdown extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.ICancelHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
            protected [__keep_incompatibility]: never;
            public get template(): UnityEngine.RectTransform;
            public set template(value: UnityEngine.RectTransform);
            public get captionText(): UnityEngine.UI.Text;
            public set captionText(value: UnityEngine.UI.Text);
            public get captionImage(): UnityEngine.UI.Image;
            public set captionImage(value: UnityEngine.UI.Image);
            public get itemText(): UnityEngine.UI.Text;
            public set itemText(value: UnityEngine.UI.Text);
            public get itemImage(): UnityEngine.UI.Image;
            public set itemImage(value: UnityEngine.UI.Image);
            public get options(): System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>;
            public set options(value: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>);
            public get onValueChanged(): UnityEngine.UI.Dropdown.DropdownEvent;
            public set onValueChanged(value: UnityEngine.UI.Dropdown.DropdownEvent);
            public get alphaFadeSpeed(): number;
            public set alphaFadeSpeed(value: number);
            public get value(): number;
            public set value(value: number);
            public SetValueWithoutNotify ($input: number) : void
            public RefreshShownValue () : void
            public AddOptions ($options: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>) : void
            public AddOptions ($options: System.Collections.Generic.List$1<string>) : void
            public AddOptions ($options: System.Collections.Generic.List$1<UnityEngine.Sprite>) : void
            public ClearOptions () : void
            public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
            public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public OnCancel ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            public Show () : void
            public Hide () : void
        }
    }
    namespace UnityEngine.UI.Image {
        enum Type
        { Simple = 0, Sliced = 1, Tiled = 2, Filled = 3 }
        enum FillMethod
        { Horizontal = 0, Vertical = 1, Radial90 = 2, Radial180 = 3, Radial360 = 4 }
    }
    namespace UnityEngine.UI.Button {
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.UI.Slider {
        enum Direction
        { LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
        class SliderEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.UI.Toggle {
        enum ToggleTransition
        { None = 0, Fade = 1 }
        class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.UI.InputField {
        class EndEditEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
        class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
        class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
        interface OnValidateInput
        { 
        (text: string, charIndex: number, addedChar: number) : number; 
        Invoke?: (text: string, charIndex: number, addedChar: number) => number;
        }
        var OnValidateInput: { new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput; }
        enum ContentType
        { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
        enum LineType
        { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
        enum InputType
        { Standard = 0, AutoCorrect = 1, Password = 2 }
        enum CharacterValidation
        { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
    }
    namespace UnityEngine.UI.ScrollRect {
        enum MovementType
        { Unrestricted = 0, Elastic = 1, Clamped = 2 }
        enum ScrollbarVisibility
        { Permanent = 0, AutoHide = 1, AutoHideAndExpandViewport = 2 }
        class ScrollRectEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.Vector2> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.UI.Dropdown {
        class OptionData extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class DropdownEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.ParticleSystem {
        class Particle extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class PlaybackState extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Trails extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class EmitParams extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class MainModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class EmissionModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ShapeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class VelocityOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class InheritVelocityModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class LifetimeByEmitterSpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ForceOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ColorOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ColorBySpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class SizeOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class SizeBySpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class RotationOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class RotationBySpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ExternalForcesModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class NoiseModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class CollisionModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class TriggerModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class SubEmittersModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class TextureSheetAnimationModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class LightsModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class TrailModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class CustomDataModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Diagnostics {
        class Debug extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Assert ($condition: boolean) : void
            public static Assert ($condition: boolean, $message: string) : void
            public static Assert ($condition: boolean, $message: string, $detailMessage: string) : void
            public static Assert ($condition: boolean, $message: string, $detailMessageFormat: string, ...args: any[]) : void
            public static Fail ($message: string) : void
            public static Fail ($message: string, $detailMessage: string) : void
        }
    }
    namespace System.Security {
        interface IEvidenceFactory
        {
        }
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object implements System.ICloneable, System.IFormatProvider
        {
            protected [__keep_incompatibility]: never;
        }
    }
}
