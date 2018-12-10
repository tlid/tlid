using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS
{
   /// <summary>
   /// Tlider
   /// </summary>
   public class Tlider
   {

      /// <summary>
      /// Year
      /// </summary>
      public static string Year
      {
         get { return DateTime.Now.ToString("yy"); }
      }
      /// <summary>
      /// Month
      /// </summary>
      public static string Month
      {
         get { return DateTime.Now.ToString("yyMM"); }
      }

      /// <summary>
      /// Day
      /// </summary>
      public static string Day
      {
         get { return DateTime.Now.ToString("yyMMdd"); }
      }

      /// <summary>
      /// Hour
      /// </summary>
      public static string Hour
      {
         get { return DateTime.Now.ToString("yyMMddHH"); }
      }


      /// <summary>
      /// Hour in Int
      /// </summary>
      public static int HourInt
      {
         get { return Convert.ToInt32( DateTime.Now.ToString("HH")); }
      }

      /// <summary>
      /// Minutes
      /// </summary>
      public static string Minutes
      {
         get { return DateTime.Now.ToString("yyMMddHHmm"); }
      }

      /// <summary>
      /// Seconds
      /// </summary>
      public static string Seconds
      {
         get { return DateTime.Now.ToString("yyMMddHHmmss"); }
      }


        public static long MiliSecondsAsLong
          => Convert .ToInt64 ( MiliSeconds );

      /// <summary>
      /// MiliSeconds
      /// </summary>
        public static string MiliSeconds
      {
         get { return DateTime.Now.ToString("yyMMddHHmmssfff"); }
      }
      public static string Tlidug => getTlidug();

      public static string LastTlidug { get; set; }


      public static string getTlidug(string _idug="")
      {

         Guid idug = Guid.Empty;
         try
         {

         if (_idug.Length > 0)
            idug = new Guid(_idug);
         else idug = Guid.NewGuid();
         }
         catch (Exception)
         {
            idug = Guid .NewGuid ( );
         }

         //def: a TLidug is a form of ID that is Unique in the whole universe that we can ask where it was created plus gives sorts of indexable value

         string
         _LastTlidug =
         MiliSeconds + idug.ToString().Replace("-", "");

         LastTlidug = _LastTlidug;

         return _LastTlidug;

      }

      public static string getTlidug(Guid idug )
      {
         return getTlidug(idug.ToString());
      }

      public static string getTlid ( DateTime dt )
      {
         return dt .ToString ( "yyMMddHHmm" );
      }
   }

}
